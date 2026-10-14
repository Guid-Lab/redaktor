# Changelog

Format według [Keep a Changelog](https://keepachangelog.com/pl/1.1.0/). Wersjonowanie semantyczne.

## [1.0.1] - 2026-10-14

### Added
- Publikacja na GitHubie (Guid-Lab/redaktor) z workflow CI i release (plik `.skill` jako asset releasu).

## [1.0.0] - 2026-10-13

Pierwsza publiczna wersja.

### Added
- README, LICENSE (MIT), NOTICE z atrybucją źródeł, CHANGELOG.
- CI: testy lintera, walidacja frontmatter i linków w SKILL.md; na tagu `v*` release z plikami `redaktor-<wersja>.skill` i `.zip` do „Add skills” w claude.ai i do rozpakowania w `~/.claude/skills/`.
- `scripts/package.sh`: buduje paczkę `.skill`/`.zip` lokalnie.
- `scripts/validate-skill.mjs`: walidator SKILL.md bez zależności.
- Testy lintera (`node --test scripts/`).
- Linter: gatunki `legal` i `science` oraz wyjście `--json`.
- `evals/evals.json` z pięcioma przypadkami testowymi i plikami wejściowymi, `evals/trigger-eval.json` z zapytaniami do testu wyzwalania.
- Spis treści w `references/interpunkcja.md` i `references/wielkie-litery.md`.

### Changed
- Preferencje stylu (myślniki, cudzysłowy, diakrytyki) opisane jako konfigurowalne ustawienia domyślne, nie reguły twarde.
- Ujednolicony werdykt dla „tak długo, jak”: forma poprawna według PWN, „dopóki” to tylko oszczędniejsza alternatywa.

### Fixed
- Linter: granice słów dla polskich liter. Wzorce kończące się na ą, ć, ę, ł, ń, ó, ś, ź, ż nie trafiały, bo `\b` w JavaScript zna tylko ASCII.

### Removed
- Niestandardowe pole `when_to_use` z frontmatter SKILL.md (treść jest w `description`).
