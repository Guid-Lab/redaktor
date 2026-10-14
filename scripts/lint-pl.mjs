#!/usr/bin/env node
// lint-pl.mjs: lekki pre-skan polskiego tekstu (zero zależności, Node 20+).
// WYSOKA CZUŁOŚĆ: zwraca KANDYDATÓW do oceny, nie werdykty. Ostateczną decyzję
// (BŁĄD / WARIANT / STYL / fałszywy alarm) podejmuje redaktor, czytając references/.
// Użycie: node lint-pl.mjs <plik> | node lint-pl.mjs --text "..."
//         [--genre doc|ui|legal|science] [--json]
// Import: import { lint, GENRES } from "./lint-pl.mjs"; lint(text, genre) zwraca
// ten sam obiekt co --json.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Granice słów: JS \b zna tylko ASCII, więc polskie litery na brzegu psują dopasowanie.
const B0 = "(?<![\\p{L}\\p{N}_])";
const B1 = "(?![\\p{L}\\p{N}_])";
const L = "\\p{L}";
const re = (src, flags = "gu") => new RegExp(src, flags);
const word = (src, flags = "giu") => re(`${B0}(?:${src})${B1}`, flags);

// Gatunek steruje progami i pomijanymi klasami (rejestr wygrywa z anty-AI, patrz rejestr.md).
export const GENRES = {
  doc: { maxLen: 25, ktoryThreshold: 2, skip: [] },
  ui: { maxLen: 12, ktoryThreshold: 1, skip: [] },
  legal: {
    maxLen: 40, ktoryThreshold: 4,
    skip: ["PERYFRAZA-analityczna", "OTWARCIE/ZAMKNIECIE-AI", "PRZYMIOTNIK-wata", "KONTRAST-binarny"],
  },
  science: { maxLen: 30, ktoryThreshold: 3, skip: ["OTWARCIE/ZAMKNIECIE-AI", "PERYFRAZA-analityczna"] },
};

// wzorce leksykalne/typograficzne: [regex, id, klasa]; każde trafienie w linii to osobny kandydat
const PAT = [
  [re("[А-яЁё]"), "CYRYLICA", "BŁĄD-HARD"],
  [re("—"), "EM-DASH", "TYPO"],
  [re("\\s–\\s|[^\\d\\s]–[^\\d\\s]"), "EN-DASH-jako-mysl", "TYPO"],
  [re("[“”]|(^|[\\s(])\"|\"($|[\\s).,;:])"), "CUDZYSLOW-ang", "TYPO"],
  [re("  +"), "PODWOJNA-SPACJA", "TYPO"],
  [word(`w oparciu o|na dzień dzisiejszy|na chwilę obecną|w chwili obecnej|z uwagi na fakt|pomimo faktu|celem(?= ${L}+nia)|posiada${L}*|dedykowan${L}+|adresować|zaadresować|dostarczać wartość|na koniec dnia|w kontekście|na poziomie`), "KALKA/wata", "STYL"],
  [word(`warto (zauważyć|podkreślić)|należy (zauważyć|podkreślić)|kluczow${L}+ (element|rol)${L}*|w dzisiejszym|w dobie|w erze|nie ulega wątpliwości|podsumowując|reasumując|w tym artykule`), "OTWARCIE/ZAMKNIECIE-AI", "STYL"],
  [word(`kompleksow${L}+|holistyczn${L}+|synergiczn${L}+|rewolucyjn${L}+|innowacyjn${L}+|wszechstronn${L}+|nowoczesn${L}+|przełomow${L}+`), "PRZYMIOTNIK-wata", "STYL"],
  [word(`rewolucjoniz${L}+|zmiana reguł gry|tajn${L}+ broń|supermoc${L}*|wynieść na wyższy poziom|wystrzelić w górę|głębokie zanurzenie|metryki próżności|na światowym poziomie|najnowocześniejsz${L}+`), "HYPE/marketing-slop", "STYL"],
  [word(`A (co by było, )?gdyby|czy zastanawiał${L}+ się kiedyś`), "PYTANIE-retoryczne", "STYL"],
  [re("[→⇒➔]|(^|\\s)->(\\s|$)"), "STRZALKA-w-tekscie", "STYL"],
  [word(`dokonać|przeprowadz${L}+|podjąć decyzj${L}*|udzielić|ulec ${L}+|składać (podpis|wniosek)`), "PERYFRAZA-analityczna", "STYL"],
  [re(`^\\s*Oto${B1}|${B0}(?:mam nadzieję, że to pomoże|świetne pytanie|masz (całkowitą )?rację)${B1}`, "giu"), "ARTEFAKT-asystenta", "STYL"],
  [re(`${B0}to nie ${L}+,? to\\s|${B0}nie tylko${B1}.*${B0}ale${B1}`, "giu"), "KONTRAST-binarny", "STYL"],
  [word(`pod kątem|co przekłada się na|dlaczego warto|upewnij się, że|świadczy o`), "MANIERA-bielika", "STYL"],
  [word(`okres czasu|cofać się do tyłu|w pełni kompletn${L}*|najbardziej optymaln${L}*|potencjalna możliwość|w miesiącu ${L}+u`), "PLEONAZM", "STYL"],
];

const TITLE_WORD = re(`${B0}[A-ZŁŚŻŹĆĄĘÓŃ][a-ząćęłńóśźż]+${B1}`, "gu");
const KTORY = re(`${B0}któr[a-ząćęłńóśźż]+${B1}`, "giu");

export function lint(text, genre = "doc") {
  const g = GENRES[genre];
  if (!g) throw new Error(`Nieznany gatunek "${genre}". Dozwolone: ${Object.keys(GENRES).join(", ")}`);
  const hits = [];
  const push = (line, id, cls, frag) => hits.push({ line, id, cls, frag: frag.slice(0, 80) });
  const lines = text.split(/\r?\n/);

  lines.forEach((ln, i) => {
    for (const [rx, id, cls] of PAT) {
      if (g.skip.includes(id)) continue;
      for (const m of ln.matchAll(rx)) push(i + 1, id, cls, m[0]);
    }
    // Title Case w nagłówku markdown (2+ słowa z wielkiej)
    if (/^#{1,6}\s/.test(ln) && (ln.replace(/^#{1,6}\s/, "").match(TITLE_WORD) || []).length >= 2)
      push(i + 1, "TITLE-CASE-naglowek", "STYL", ln.trim());
  });

  // zdania: długość + gęstość "który"
  const sentences = text.replace(/\n/g, " ").split(/(?<=[.!?])\s+/).filter(s => s.trim());
  let words = 0, ktory = 0;
  for (const s of sentences) {
    const w = (s.match(/\p{L}+/gu) || []).length; words += w;
    ktory += (s.match(KTORY) || []).length;
    if (w > g.maxLen) push("~", "ZDANIE-za-dlugie(" + w + "w)", "STYL", s.trim());
  }
  const bold = (text.match(/\*\*[^*]+\*\*/g) || []).length;

  // akapity: rozrzut długości (współczynnik zmienności = odchylenie / średnia).
  // Akapit = blok między pustymi liniami; pomijamy nagłówki, listy, tabele i bloki < 3 słów.
  // TYLKO INFORMACJA, bez flagi: w teście na parze tekstów (2026-10-12) tekst ludzki miał
  // CV niższe niż wygenerowany, więc nie ma progu, który by je rozdzielał. Ocenia redaktor
  // według anty-ai.md, pkt 7b; w instrukcjach, FAQ i prostym języku równe akapity są normą.
  const lengths = text.split(/\r?\n\s*\r?\n/)
    .map(p => p.trim())
    .filter(p => p && !/^(#{1,6}\s|[-*+]\s|\d+[.)]\s|\|)/.test(p))
    .map(p => (p.match(/\p{L}+/gu) || []).length)
    .filter(n => n >= 3);
  let paragraphs = null;
  if (lengths.length >= 5) {
    const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    const sd = Math.sqrt(lengths.reduce((a, b) => a + (b - mean) ** 2, 0) / lengths.length);
    paragraphs = { count: lengths.length, lengths, mean, cv: sd / mean };
  }
  const ktoryPer100 = words ? (ktory / words) * 100 : 0;
  const byClass = hits.reduce((a, h) => ((a[h.cls] = (a[h.cls] || 0) + 1), a), {});

  return {
    genre,
    hits,
    metrics: { sentences: sentences.length, words, ktoryPer100, ktoryThreshold: g.ktoryThreshold, bold, paragraphs },
    byClass,
  };
}

export function report(r) {
  const out = [];
  const m = r.metrics;
  out.push(`# lint-pl (gatunek: ${r.genre}): ${r.hits.length} kandydatów, ${m.sentences} zdań, ${m.words} słów`);
  for (const h of r.hits) out.push(`${String(h.line).padStart(4)}  [${h.cls}] ${h.id}: „${h.frag}”`);
  out.push("---");
  out.push(`metryki: "który" ${m.ktoryPer100.toFixed(1)}/100 (próg ${m.ktoryThreshold}), pogrubień ${m.bold}`);
  if (m.paragraphs)
    out.push(`akapity: ${m.paragraphs.count}, długości w słowach: ${m.paragraphs.lengths.join(" ")}; średnio ${m.paragraphs.mean.toFixed(0)}, rozrzut CV ${m.paragraphs.cv.toFixed(2)} (informacyjnie, bez progu)`);
  out.push("klasy: " + JSON.stringify(r.byClass));
  out.push("UWAGA: to kandydaci, nie werdykty. Oceń każdy wg references/ (BŁĄD/WARIANT/STYL/fałszywy alarm).");
  return out.join("\n");
}

function main(argv) {
  let text = "", genre = "doc", json = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--text") text = argv[++i] ?? "";
    else if (argv[i] === "--genre") genre = argv[++i] ?? "doc";
    else if (argv[i] === "--json") json = true;
    else if (!argv[i].startsWith("--")) {
      try { text = readFileSync(argv[i], "utf8"); }
      catch { console.error("Nie mogę odczytać:", argv[i]); process.exit(1); }
    }
  }
  if (!text) { console.error("Podaj plik albo --text \"...\""); process.exit(1); }
  let r;
  try { r = lint(text, genre); }
  catch (e) { console.error(e.message); process.exit(1); }
  console.log(json ? JSON.stringify(r) : report(r));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main(process.argv.slice(2));
