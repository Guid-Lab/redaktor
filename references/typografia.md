# Typografia polska

## Myślniki: trzy znaki, trzy role
- **Dywiz** `-` (U+002D): tylko łączy wyrazy (biało-czerwony, ZUS-em, e-mail). Nigdy jako myślnik.
- **Półpauza** `–` (U+2013): zakresy BEZ spacji (2020–2024, 9.00–17.00, s. 10–12).
  W zakresach liczb i dat PWN dopuszcza TAKŻE dywiz (2020-2024), byle bez spacji —
  półpauza jest tylko formą preferowaną typograficznie, dywiz w zakresie to nie błąd.
- **Pauza** `—` (U+2014): wtrącenia, ze spacjami.

**Preferencja domyślna skilla: bez długich myślników** (patrz „Preferencje domyślne" w
SKILL.md; użytkownik może ją wyłączyć zdaniem w prompcie). Pauza jest poprawną polską
typografią, więc jej użycie to nigdy [BŁĄD]; usuwasz ją z powodu stylu. Usuwaj `—`
(i spacjowane ` – ` użyte jako myślnik), zastępując, z grubsza w kolejności: kropka,
przecinek, dwukropek, nawias, przebudowa zdania. Półpauzę `–` zostaw wyłącznie w
zakresach. Empiria: nadużycie myślnika to top-sygnał AI; tell Bielika to zwykle en-dash,
nie em-dash. Skanuj końcowy tekst pod `—` i `–` przed oddaniem.

## Cudzysłowy
- Proza: polskie „ " (U+201E … U+201D). Angielskie " ", proste `"` lub zdeformowane
  „ „ to sygnał AI/błąd.
- Cudzysłów drugiego stopnia (zagnieżdżony): »…« lub «…».
- Plain-text / kod / terminal / pliki, gdzie znaki Unicode się psują: ASCII `"`.

## Wielkie litery i wyróżnienia
- Bez Title Case w nagłówkach (to kalka angielska): wielka tylko pierwszy wyraz i nazwy
  własne. Dotyczy też CamelCase w hashtagach.
- Bez zdań WERSALIKAMI. Diakrytyki także w wersalikach (ŚWIĘTO, nie SWIETO).
- Bez mechanicznego pogrubiania (markdown bold co drugie zdanie). W plain-text/mailu/
  formularzu bez markdownu `**` (renderuje się dosłownie). Bez „eyebrow microcaps"
  (małe wersaliki jako etykieta nad nagłówkiem).
- Emoji: nie w tekście biznesowym/naukowym, nie w nagłówkach i punktach list.

## Liczby, jednostki, spacje
- Separator dziesiętny: przecinek (1,5 mln; 3,14).
- Tysiące: spacja nierozdzielająca (10 000; 1 500 000).
- Jednostka ze spacją (10 kg, 5 m², 25 EUR/h). Procent: tradycyjnie/typograficznie bez
  spacji (80%); norma metrologiczna z 2020 (GUM, SI) przy wielkościach fizycznych wymaga
  spacji (80 %). Oba poprawne — NIE flaguj żadnego jako błąd; co najwyżej ujednolić w obrębie tekstu.
- Spacja nierozdzielająca (NBSP) po jednoliterowych spójnikach i przyimkach: a, i, o,
  u, w, z (żeby nie zostały na końcu wiersza) — wszędzie, też na slajdach i w grafice.
- Liczebniki porządkowe z kropką: „w 3. kwartale", „5. miejsce".
- Zakresy BEZ spacji: 1939–1945 (półpauza preferowana; dywiz 1939-1945 też
  dopuszczalny wg PWN). BŁĄD = spacje (1939 – 1945) lub „od 1939–1945".
- Wielokropek jako jeden znak … (U+2026), nie trzy kropki.
- Po dwukropku punkt listy małą literą (chyba że to pełne zdanie lub nazwa własna).

## Strzałki (→, ->, ⇒) [STYL/SYGNAŁ, nie błąd normy]
- Schematy i technika: strzałka OK (diagramy, tabele, „wejście → wyjście", przepływy UI,
  zapis reakcji). Nie ruszać.
- Proza/tekst ciągły: strzałka brzmi notatkowo i jak AI/LinkedIn. Zamień na słowa wg sensu:
  skutek/wynik „→" → „prowadzi do / daje / w efekcie / zatem"; przejście/zmiana „→" →
  „zmienia się w / staje się"; „przed → po" → „z … na …" albo opis.
- ASCII `->` zawsze podmieniaj: w prozie na słowa, w kontekście technicznym na „→".
