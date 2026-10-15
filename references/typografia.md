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
  To preferencja składu, nie norma: złamanie nigdy nie jest [BŁĄD] (prof. Bańko:
  „przepisy ortograficzne tego nie zabraniają, ale w składzie unika się"). Rygor zależny
  od miejsca:
  - **Tytuły, śródtytuły, nagłówki**: bezwzględnie — jednoliterowy wyraz zawsze przenieś
    (wiąż NBSP). Dotyczy to też przyimków/spójników WIELOLITEROWYCH (od, do, we, za, na,
    lub, oraz): w tytułach idą do wiersza razem z wyrazem, z którym się łączą
    („rozwierszowywanie tytułu", Wolański, PWN).
  - **Tekst ciągły justowany**: wiąż tylko JEDNOLITEROWE (a, i, o, u, w, z), i to głównie
    w wierszach dłuższych niż 40 znaków. Wieloliterowych (od, do, we, za, na, że, lub)
    NIE wiąż — Wolański: „nie ma takiej konieczności w wyrównanym obustronnie tekście
    głównym", wymóg „utrudniałby łamanie i czyniłby kolumnę nieestetyczną". W wąskich
    łamach nawet jednoliterowy może zostać (SJP, zasada 204).
  - **Partykuła „nie" i krótkie zaimki** (mi, ci, go, mu, się): brak typograficznej
    reguły łamania — to proklityki/enklityki (wymowa, akcent), nie skład. NIE wiąż,
    chyba że autor wprost chce. Zostawienie na końcu wiersza nie jest błędem.
  - Wyjątek dla młodszych dzieci / osób z niepełnosprawnością intelektualną: trzymaj
    CAŁE wyrażenie przyimkowe (też wieloliterowy przyimek) z rzeczownikiem (Wolański).
  - Dzielenie (przenoszenie) wyrazów robi silnik składu (`hyphens: auto` + język `pl`)
    wg zasady 204: po sylabach, bez zostawiania/przenoszenia pojedynczej litery. Ręcznie
    nie dziel. Nie rozdzielaj też: „1945 r.", „XX w.", „100 €", „rozdz. 9", „nr 4".
  - Techniczna uwaga: NBSP wstawiaj w TREŚCI (U+00A0), nie w CSS — to treść steruje
    łamaniem w PDF (WeasyPrint/LaTeX); pomijaj kod, URL-e i tokeny. Właściwość
    `text-justify` jest w WeasyPrincie nieobsługiwana — justuj samym `text-align: justify`.
  - Źródła: [sieroty — PWN](https://sjp.pwn.pl/poradnia/haslo/sieroty-na-koncu-wiersza;8893.html),
    [wieloliterowe przyimki — PWN](https://sjp.pwn.pl/poradnia/haslo/Nieprzenoszenie-wieloliterowych-przyimkow;17392.html),
    [zasada 204 — SJP PWN](https://sjp.pwn.pl/zasady/Inne-uwagi-dotyczace-przenoszenia-wyrazow;629563.html).
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
