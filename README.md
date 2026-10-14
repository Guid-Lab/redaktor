# redaktor

> **English summary.** `redaktor` is an [Agent Skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills) for Claude Code and claude.ai that proofreads and copy-edits Polish text. It works in five modes (proofreading, copy-editing, audit, translation, writing from an outline), grades every remark as BŁĄD / WARIANT / STYL, runs a meaning-preservation audit after every edit, and relies on a bundled rule base with verbatim quotes and URLs from PWN and the Polish Language Council, including the 2026 spelling reform. A zero-dependency Node linter (`scripts/lint-pl.mjs`) gives a quick pre-scan. Everything below is in Polish.

Skill do korekty i redakcji polskich tekstów dla Claude Code i claude.ai. Poprawia to, co jest błędem, upraszcza to, co da się uprościć, i usuwa maniery „języka AI”, nie zmieniając sensu ani głosu autora.

## Co robi

- **Pięć trybów**: korekta (tylko błędy normy), redakcja (poprawność, jasność, usunięcie manier), audyt (lista uwag bez zmiany tekstu), tłumaczenie (ma czytać się jak napisane po polsku) i pisanie z zarysu (nowy tekst z listą „Dopowiedzenia do akceptacji”).
- **Werdykt dla każdej uwagi**: `[BŁĄD]` (niezgodne z normą), `[WARIANT]` (dopuszczalne potocznie, nietrafione w normie wzorcowej), `[STYL]` (poprawne, zmiana z innego powodu). Bez źródła normatywnego nigdy nie pada `[BŁĄD]`.
- **Audyt semantyczny** po każdej redakcji: tabela twierdzeń, liczb, warunków i nazw przed i po. Wierność jest ważniejsza niż czystość.
- **Rejestr wygrywa z prostotą**: tekst prawniczy zachowuje stronę bierną i powtarzane terminy, tekst naukowy zachowuje hedging.
- **Baza reguł z cytatami i URL**: Poradnia Językowa PWN, Zasady pisowni PWN, komunikat Rady Języka Polskiego, w tym blok „Zmiany 2026” (mieszkańcy miast wielką literą, egzemplarze marek, pisownia „nie” z imiesłowami i inne).
- **Lista „nie poprawiać”**: formy poprawne, które automaty i nadgorliwi redaktorzy błędnie flagują („tak długo, jak”, „pani dyrektor”, zdanie od „ale”).

## Instalacja

**Z releasu (najprościej).** Każdy release ma plik `redaktor-<wersja>.skill` (ten sam plik jako `.zip` i suma SHA-256 obok).

- **claude.ai**: Ustawienia, sekcja Skills, przycisk „Add skills”, wskaż pobrany plik `.skill`.
- **Claude Code**: rozpakuj do katalogu skilli, globalnie albo w projekcie:

```bash
unzip redaktor-<wersja>.skill -d ~/.claude/skills/
# albo tylko w jednym projekcie:
unzip redaktor-<wersja>.skill -d .claude/skills/
```

**Z repozytorium (wersja rozwojowa):**

```bash
git clone https://github.com/Guid-Lab/redaktor.git ~/.claude/skills/redaktor
```

Zgłoszenia i pull requesty są mile widziane.

Paczkę można też zbudować lokalnie: `scripts/package.sh` tworzy `dist/redaktor-<wersja>.skill` i `.zip`.

**Plugin:** katalog można też dołączyć do własnego pluginu Claude Code jako `skills/redaktor/`. Nie wymaga to żadnych zmian w plikach.

## Użycie

Skill włącza się sam, gdy prosisz o pracę nad polskim tekstem. Przykłady:

- „Zrób korektę tego maila do klienta.”
- „Audyt językowy pliku `docs/oferta.md`, nie zmieniaj tekstu, tylko wypisz uwagi.”
- „OdAI-uj ten tekst, ma brzmieć jak napisany przez człowieka.”
- „Przetłumacz ten fragment README na polski tak, żeby nie brzmiał jak przekład.”
- „Napisz artykuł z tego zarysu, w moim głosie, bez dopisywania faktów.”

Domyślny tryb to redakcja z audytem semantycznym. Tryb możesz wskazać w prompcie („tylko korekta”, „tylko audyt”).

### Linter

Szybki pre-skan tekstu. Zwraca **kandydatów do oceny, nie werdykty**. Ostateczną decyzję podejmuje redaktor, czytając `references/`.

```bash
node scripts/lint-pl.mjs plik.md
node scripts/lint-pl.mjs --text "Warto zauważyć, że posiadamy dedykowany zespół."
node scripts/lint-pl.mjs plik.md --genre ui
node scripts/lint-pl.mjs plik.md --json
```

Gatunki (`--genre`): `doc` (domyślny), `ui` (krótsze zdania), `legal` i `science` (wyłączają klasy stylistyczne, które w tych rejestrach są normą). `--json` daje wynik do dalszego przetwarzania.

Uruchomiony na własnych plikach `references/` linter zgłasza setki trafień. To nie błąd: te pliki są listami złych zwrotów.

## Struktura

```
redaktor/
├── SKILL.md                 instrukcje główne (ładowane po włączeniu skilla)
├── references/              baza reguł, czytana na żądanie per kategoria
│   ├── norma.md             twarde błędy, fleksja, rekcja, ortografia 2026
│   ├── interpunkcja.md      przecinek, spójniki, wtrącenia, mity
│   ├── wielkie-litery.md    wielka i mała litera, blok „Zmiany 2026”
│   ├── kalki.md             kalki składniowe, anglicyzmy, kolokacje widmo
│   ├── anty-ai.md           maniery leksykalne i strukturalne, czego nie flagować
│   ├── typografia.md        myślniki, cudzysłowy, liczby, NBSP
│   ├── rejestr.md           tabela KEEP/CUT per gatunek, wyjątek prawniczy
│   └── zrodla.md            baza uźródłowiona z wagami i listą „nie poprawiać”
├── scripts/
│   ├── lint-pl.mjs          pre-skan, zero zależności
│   ├── lint-pl.test.mjs     testy lintera
│   ├── validate-skill.mjs   walidacja frontmatter i linków w SKILL.md
│   └── package.sh           buduje paczkę .skill/.zip do dist/
├── evals/                   przypadki testowe skilla i zapytania do testu wyzwalania
├── .gitlab-ci.yml           testy na każdym pushu, release na tagu v* (CI)
└── .github/workflows/       to samo dla GitHub Actions
```

## Preferencje domyślne

Skill ma kilka ustawień stylu, które stosuje, jeśli nie powiesz inaczej:

- bez długich myślników (`—`); półpauza `–` tylko w zakresach bez spacji (1939–1945),
- polskie cudzysłowy „ ” w prozie, proste `"` w kodzie i plain-text,
- zawsze diakrytyki, także w wersalikach.

Każdą z nich wyłączysz jednym zdaniem w prompcie, np. „zostaw myślniki” albo „cudzysłowy ASCII”.

## Testy

```bash
node --test scripts/
node scripts/validate-skill.mjs
```

W `evals/evals.json` jest pięć przypadków testowych w schemacie [skill-creatora](https://github.com/anthropics/skills) (mail z błędami normy, audyt tekstu AI, tryb prawniczy, pisanie z zarysu, fałszywe alarmy). Pliki wejściowe leżą w `evals/files/`. W `evals/trigger-eval.json` jest 20 zapytań do sprawdzenia, kiedy skill powinien się włączać, a kiedy nie.

## Źródła i licencja

Kod i instrukcje: licencja MIT (plik `LICENSE`). Cytaty normatywne pochodzą z PWN, Rady Języka Polskiego i NCK i są przytaczane w ramach prawa cytatu z podaniem adresu. Pełna lista źródeł i inspiracji: [NOTICE.md](NOTICE.md).

## Współpraca

Zgłaszaj błędne werdykty jako issue z tekstem, oczekiwanym werdyktem i źródłem (najlepiej URL do PWN lub RJP). Nowa reguła bez źródła normatywnego może dostać najwyżej wagę `[STYL]`. Przed PR uruchom `node --test scripts/` i `node scripts/validate-skill.mjs`.
