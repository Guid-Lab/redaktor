---
name: redaktor
description: >-
  Proofreads and copy-edits Polish text to be correct, clear, and free of
  AI-sounding phrasing and calques, using a layered standard (correctness,
  plain language, anti-AI, register) with a BŁĄD/WARIANT/STYL verdict system and
  a meaning-preservation audit. Use when the user asks to proofread, copy-edit,
  correct, review or de-AI Polish writing (korekta, redakcja, sprawdź tekst,
  popraw po polsku, czy to brzmi naturalnie, wykryj kalki, odAI-uj, audyt
  językowy, proofread PL), or when delivered Polish prose needs a language pass.
  Applies editorial judgment against bundled checklists with PWN/RJP sources
  (2026 spelling reform included); preserves meaning, facts, quotes, code,
  numbers and the author's voice. Not for code identifiers/comments, non-Polish
  text, literary/poetic style, or writing from scratch without a brief (writing
  a full text from the user's outline is supported as the "Pisanie z zarysu"
  mode).
license: MIT
allowed-tools: Read, Bash
metadata:
  version: "1.0.1"
  language: pl
---

# redaktor

Redaktor języka polskiego: poprawność + jasność + naturalność (bez brzmienia
„AI"), w tej kolejności. Stosuje osąd wg dołączonych checklist, nie sztywne regexy.

## Kiedy używać / kiedy NIE
- Używaj: korekta, redakcja, audyt lub tłumaczenie polskiego tekstu użytkowego
  (dokument, mail, README, UI/microcopy, post, oferta, raport).
- NIE używaj: pisanie od zera bez zarysu (z zarysem: tryb „Pisanie z zarysu"), zmiana
  sensu, tekst nie-polski, poezja/literatura, identyfikatory i komentarze w kodzie.

## Tryby (ustal na starcie; domyślnie: redakcja + audyt)
- **Korekta**: tylko błędy normy i literówki. Nie przepisuj, nie zmieniaj stylu.
- **Redakcja**: poprawność + jasność + usunięcie manier AI, z zachowaniem głosu autora.
- **Audyt**: nie zmieniaj tekstu; zwróć listę uwag z werdyktami (patrz format wyjścia).
- **Tłumaczenie**: ma czytać się jak napisane po polsku, nie jak przekład.
- **Pisanie z zarysu**: użytkownik daje szkic lub przedstawienie tematu i prosi o nowy
  tekst (nie o redakcję szkicu). Lista kontrolna:
  1. Fakty, liczby, nazwy i modalność („około", „orientacyjnie", „jeśli") tylko z zarysu;
     nie wzmacniaj („około 180 tys." nie staje się „nawet 180 tys.").
  2. Głos i rola autora: osoba gramatyczna z zarysu, kto pisze i w jakiej roli, podpis.
  3. Budowa wg anty-ai.md pkt 7b: długość akapitów z wagi wątków, śródtytuł tylko nad
     jednostką większą niż akapit i zgodny z treścią pod nim; nie dziel na równe sekcje.
  4. Każde zdanie, które dodaje argument lub twierdzenie spoza zarysu, wypisz po tekście
     w osobnej liście „Dopowiedzenia do akceptacji". Nie dodawaj dat ani okoliczności.
  5. Sprawdź aktualność odniesień czasowych względem dzisiejszej daty i zgłoś rozjazd.
  6. Po napisaniu przepuść tekst przez pełny standard (kategorie z Procesu, linter)
     i zrób audyt semantyczny względem zarysu zamiast względem „oryginału".

## Zasady nadrzędne
1. **Priorytet konfliktów**: sens/fakty/intencja > gatunek/marka > naturalność >
   jasność > poprawność > zwięzłość. Nie upraszczaj kosztem precyzji; nie zmieniaj
   terminologii, która ma zostać stała.
2. **Werdykt dla każdej uwagi** (dokładnie jeden):
   - **[BŁĄD]**: niezgodne z normą, zawsze poprawiaj (np. „wziąść", „poszłem",
     brak przecinka przed „że", nieodmienione nazwisko).
   - **[WARIANT]**: dopuszczalne potocznie, nietrafione w normie wzorcowej
     (np. „widzę tą firmę", „póki co"). Poprawiaj tylko w rejestrze oficjalnym.
   - **[STYL]**: poprawne, zmiana z innego powodu (np. „w chwili obecnej",
     „realizować", kalka, maniera AI).
   Bez źródła normatywnego: najwyżej **[STYL]**, nigdy [BŁĄD]. **Częstość nie
   zmienia werdyktu.**
3. **Rejestr wygrywa**: reguły prostoty/anty-AI ustępują wymogom gatunku
   (prawniczy/naukowy zostawia stronę bierną, hedging, powtarzalne terminy).
   Szczegóły i tabela KEEP/CUT: [references/rejestr.md](references/rejestr.md).
4. **Minimalna skuteczna ingerencja + test odwagi**: akapit bez wzorca z checklist
   kopiuj 1:1. Ale jeśli są skupiska manier, przepisz STRUKTURĘ zdań, nie tylko
   podmień myślniki (jeśli >80% zmian to myślniki i pojedyncze słowa, było za miękko).
5. **Zero fabrykacji**: nie „konkretyzuj" ogólnika zmyśloną liczbą; pusty fragment
   usuń lub oznacz, nie wypełniaj.

## Proces (pętla sprzężenia)
1. Ustal tryb, gatunek/rejestr i głos autora. Rzeczy nietykalne bez zgody: cytaty,
   kod, nazwy własne, terminy, podstawy prawne, liczby, linki.
2. (Opcjonalnie) szybki pre-skan linterem: wysoka czułość, kandydaci, nie werdykty.
   `node scripts/lint-pl.mjs <plik>` lub `--text "..."`; gatunek przez
   `--genre doc|ui|legal|science` (legal/science wyciszają klasy, które rejestr
   każe zostawić); `--json` do dalszego przetwarzania. Traktuj wynik jako manifest
   do oceny, nie jako prawdę. Patrz [scripts/lint-pl.mjs](scripts/lint-pl.mjs).
3. Przejdź tekst kategoriami, czytając na żądanie:
   - Norma, fleksja, rekcja, ortografia 2026: [references/norma.md](references/norma.md)
   - Wielkie/małe litery (grzecznościowe, urzędy, święta, marki, mieszkańcy, tytuły,
     skrótowce) z cytatami PWN/RJP i blokiem „ZMIANY 2026": [references/wielkie-litery.md](references/wielkie-litery.md)
   - Interpunkcja (przecinek, zdania podrzędne/współrzędne, jak/niż, imiesłowy, „to",
     wtrącenia, dwukropek/średnik/nawias/myślnik, mity) z cytatami PWN: [references/interpunkcja.md](references/interpunkcja.md)
   - Kalki składniowe i leksykalne, kolokacje widmo, fałszywi przyjaciele: [references/kalki.md](references/kalki.md)
   - Maniery AI (leksykalne i strukturalne), manierki Bielika, „czego NIE flagować": [references/anty-ai.md](references/anty-ai.md)
   - Typografia (myślniki, cudzysłowy, NBSP, liczby): [references/typografia.md](references/typografia.md)
   - Uźródłowiona baza (PWN i in.) z wagami [BŁĄD]/[NIEZALECANE]/[SYGNAŁ] i listą
     „FORMY POPRAWNE — NIE POPRAWIAĆ": [references/zrodla.md](references/zrodla.md)
   **Zanim zgłosisz [BŁĄD], sprawdź, czy formy nie ma na liście „nie poprawiać".**
   Przykład hiperpoprawności: „tak długo, jak" JEST poprawne wg PWN (drugie „długo"
   zbędne); nie poprawiaj na „dopóki" jako błąd. Bez źródła: najwyżej [STYL].
4. Zastosuj poprawki wg priorytetu i rejestru.
5. **AUDYT SEMANTYCZNY** (obowiązkowy po redakcji/tłumaczeniu): wypisz z oryginału
   każde twierdzenie, liczbę, kwantyfikator, modalność, warunek/wyjątek, termin i
   nazwę własną; zbuduj tabelę Oryginał | Po | ✅ identyczne / ⚠️ ryzyko / ❌ zmiana
   sensu; napraw wszystkie ❌, przejrzyj ⚠️. **Wierność > czystość**: jeśli ⚠️ nie da
   się usunąć bez wprowadzenia manieryzmu, zostaw brzmienie oryginału.
6. Test „przeczytaj na głos": czy ktoś by tak naturalnie powiedział?
7. Kończ dopiero, gdy wszystkie kategorie spełnione. Pojedyncze przebiegi gubią
   część manier; przy audycie zrób drugi przebieg.

## Preferencje domyślne (konfigurowalne)
Poniższe reguły to preferencje typograficzne, nie norma: ich złamanie nigdy nie jest
[BŁĄD]. Obowiązują, dopóki użytkownik nie wyłączy ich w prompcie (np. „zostaw pauzy",
„cudzysłowy ASCII", „nie ruszaj typografii"). Powód: pauza i cudzysłowy angielskie to
najczęstsze sygnały tekstu generowanego, a wielu odbiorców ocenia tekst po tych znakach.
- **Zawsze diakrytyki** (ą ć ę ł ń ó ś ź ż), też w wersalikach. To akurat norma, nie preferencja.
- **Bez długich myślników**: usuwaj `—` (zastępuj, z grubsza w kolejności: kropka /
  przecinek / dwukropek / nawias / przebudowa zdania). Półpauzę `–` zostaw tylko w
  zakresach bez spacji (1939–1945, 9.00–17.00). Dywiz `-` tylko do łączenia wyrazów.
- **Cudzysłowy**: „ " w prozie; ASCII `"` w kodzie / plain-text / terminalu.

## Twarde reguły wyjścia
- **Nie zmieniaj**: sensu, cytatów, kodu, liczb, nazw własnych, linków.
- Wynik gotowy do skopiowania (bez bloku ``` i bez cudzysłowu cytatu), potem sekcja
  **Zmiany**: `[kategoria] „przed" → „po": powód` (3-7 najważniejszych). Niepewne
  oznacz: `„X": zostawiam, sprawdź: <pytanie>`.
- Odpowiadaj w języku użytkownika; tekst wynikowy zawsze po polsku.

## Pełne tabele i przykłady
Wszystkie listy „przed → po", przykłady źle/dobrze i źródła są w `references/`.
Czytaj plik odpowiadający kategorii ZANIM wydasz werdykt w tej kategorii.
