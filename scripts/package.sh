#!/usr/bin/env sh
# Buduje paczkę skilla do "Add skills" w claude.ai i do rozpakowania w ~/.claude/skills/.
# Użycie: scripts/package.sh [katalog_wyjściowy]   (domyślnie dist/)
# Wynik: <out>/redaktor-<wersja>.skill oraz <out>/redaktor-<wersja>.zip (ta sama zawartość).
set -eu
ROOT=$(cd "$(dirname "$0")/.." && pwd)
OUT=${1:-"$ROOT/dist"}
mkdir -p "$OUT"
OUT=$(cd "$OUT" && pwd)
NAME=$(sed -n 's/^name: *//p' "$ROOT/SKILL.md" | head -1)
VERSION=$(sed -n 's/^  version: *"\{0,1\}\([^"]*\)"\{0,1\}$/\1/p' "$ROOT/SKILL.md" | head -1)
[ -n "$NAME" ] && [ -n "$VERSION" ] || { echo "Brak name lub metadata.version w SKILL.md" >&2; exit 1; }
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT
mkdir -p "$STAGE/$NAME" "$OUT"
cp "$ROOT/SKILL.md" "$ROOT/LICENSE" "$ROOT/NOTICE.md" "$ROOT/README.md" "$ROOT/CHANGELOG.md" "$STAGE/$NAME/"
cp -r "$ROOT/references" "$STAGE/$NAME/references"
mkdir -p "$STAGE/$NAME/scripts"
cp "$ROOT/scripts/lint-pl.mjs" "$STAGE/$NAME/scripts/"
BASE="$OUT/$NAME-$VERSION"
rm -f "$BASE.skill" "$BASE.zip"
(cd "$STAGE" && zip -qr -X "$BASE.zip" "$NAME")
cp "$BASE.zip" "$BASE.skill"
(cd "$OUT" && sha256sum "$NAME-$VERSION.skill" "$NAME-$VERSION.zip" > "$NAME-$VERSION.sha256")
echo "$BASE.skill"
echo "$BASE.zip"
