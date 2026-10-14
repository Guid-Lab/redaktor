#!/usr/bin/env node
// validate-skill.mjs: sprawdza frontmatter SKILL.md i linki do plikow. Zero zaleznosci.
// Uzycie: node scripts/validate-skill.mjs [katalog-skilla]
import { readFileSync, existsSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillDir = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), ".."));
const skillFile = join(skillDir, "SKILL.md");
const errors = [];

if (!existsSync(skillFile)) {
  console.error(`Brak pliku: ${skillFile}`);
  process.exit(1);
}
const raw = readFileSync(skillFile, "utf8");

const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
if (!fm) {
  console.error("SKILL.md: brak frontmatter YAML (blok --- ... ---) na poczatku pliku");
  process.exit(1);
}

// Prosty parser: klucze skalarne, bloki ">-" / ">" / "|", zagniezdzone mapy (jako obiekt).
function parseFrontmatter(src) {
  const out = {};
  const lines = src.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith("#")) { i++; continue; }
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) { errors.push(`frontmatter linia ${i + 1}: nie rozumiem "${line}"`); i++; continue; }
    const [, key, rest] = m;
    if (/^[>|]-?$/.test(rest.trim())) {
      const block = [];
      i++;
      while (i < lines.length && (/^\s+\S/.test(lines[i]) || !lines[i].trim())) { block.push(lines[i].trim()); i++; }
      const folded = rest.trim().startsWith(">");
      out[key] = folded ? block.join(" ").replace(/\s+/g, " ").trim() : block.join("\n").trim();
    } else if (rest.trim() === "") {
      const nested = {};
      i++;
      while (i < lines.length && /^\s+\S/.test(lines[i])) {
        const nm = lines[i].trim().match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (nm) nested[nm[1]] = nm[2].replace(/^["']|["']$/g, "");
        i++;
      }
      out[key] = nested;
    } else {
      out[key] = rest.trim().replace(/^["']|["']$/g, "");
      i++;
    }
  }
  return out;
}

const data = parseFrontmatter(fm[1]);
const allowed = ["name", "description", "license", "allowed-tools", "metadata", "compatibility"];

for (const key of Object.keys(data)) {
  if (!allowed.includes(key)) errors.push(`frontmatter: niedozwolony klucz "${key}" (dozwolone: ${allowed.join(", ")})`);
}

if (!data.name) errors.push("frontmatter: brak pola name");
else {
  if (!/^[a-z0-9-]+$/.test(data.name)) errors.push(`name "${data.name}": dozwolone tylko [a-z0-9-]`);
  if (data.name.length > 64) errors.push(`name: ${data.name.length} znakow, maksimum 64`);
  const dir = basename(skillDir);
  if (data.name !== dir) errors.push(`name "${data.name}" rozni sie od nazwy katalogu "${dir}"`);
}

if (!data.description) errors.push("frontmatter: brak pola description");
else if (typeof data.description !== "string") errors.push("description: musi byc tekstem");
else if (data.description.length < 1 || data.description.length > 1024)
  errors.push(`description: ${data.description.length} znakow, dozwolone 1..1024`);

// Linki do plikow: [..](references/x.md), [..](scripts/x) oraz wzmianki `scripts/x.ext` w tresci.
const body = raw.slice(fm[0].length);
const targets = new Set();
for (const m of body.matchAll(/\]\(((?:references|scripts|assets)\/[^)#\s]+)\)/g)) targets.add(m[1]);
for (const m of body.matchAll(/`((?:references|scripts|assets)\/[A-Za-z0-9_./-]+\.[A-Za-z0-9]+)`/g)) targets.add(m[1]);
for (const m of body.matchAll(/(?:^|\s)((?:scripts)\/[A-Za-z0-9_./-]+\.(?:mjs|js|py|sh))(?=[\s`<)]|$)/gm)) targets.add(m[1]);
for (const t of targets) {
  if (!existsSync(join(skillDir, t))) errors.push(`SKILL.md: link do nieistniejacego pliku "${t}"`);
}

const bodyLines = body.split(/\r?\n/).length;
if (bodyLines > 500) errors.push(`SKILL.md: ${bodyLines} linii tresci, zalecane maksimum 500`);

if (errors.length) {
  console.error(`SKILL.md: ${errors.length} problem(ow):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`SKILL.md OK (name=${data.name}, description=${data.description.length} zn., linki=${targets.size}, linie=${bodyLines})`);
