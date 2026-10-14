# Interpunkcja polska: reguły uźródłowione (korekta i fałszywe alarmy)

Moduł do oceny przecinka i pozostałych znaków. Nastawiony dwustronnie: łapać realne
błędy ORAZ nie generować fałszywych alarmów (nadgorliwy przecinek to też błąd).

**Priorytet źródeł**: 1) Zasady pisowni i interpunkcji PWN (sjp.pwn.pl/zasady),
2) Poradnia Językowa PWN (sjp.pwn.pl/poradnia). Każda reguła ma DOSŁOWNY cytat + URL.
Gdzie podaję treść bez cudzysłowu, to parafraza z adnotacją „(parafraza; pełny tekst
pod URL)” — NIE traktuj jej jak cytatu.

**Mapowanie na werdykty skilla**:
- naruszenie reguły z sekcji A (TWARDE) → **[BŁĄD]** (interpunkcja jest składniowa, nie „na słuch”);
- rozbieżność w sekcji B (ZALEŻNE) → najwyżej **[STYL]** lub „zostawiam, sprawdź” — bez
  znajomości struktury/intencji NIE stawiaj [BŁĄD];
- punkty z sekcji MITY → nigdy nie zgłaszaj jako błędu; to typowe fałszywe alarmy.

**Zasada ogólna**: polska interpunkcja jest składniowa (zależy od budowy zdania, nie od
oddechu). Pisarz ma pewną swobodę, ale: „Należy jednak zaznaczyć, iż korzystanie z tego
prawa powinno być poprzedzone głębszym namysłem”.
https://sjp.pwn.pl/zasady/99-interpunkcja-polska--podsumowanie;629884.html

## Spis treści
- [A. TWARDE REGUŁY (potwierdzone normą; brak → [BŁĄD])](#a-twarde-reguły-potwierdzone-normą-brak-błąd)
  - [A1. Zdanie podrzędne oddziela się przecinkiem (że, aby/żeby, bo, ponieważ, gdy, jeśli, choć, który)](#a1-zdanie-podrzędne-oddziela-się-przecinkiem-że-abyżeby-bo-ponieważ-gdy-jeśli-choć-który)
  - [A2. Spójniki zestawione: przecinek PRZED całością („cofanie przecinka”)](#a2-spójniki-zestawione-przecinek-przed-całością-cofanie-przecinka)
  - [A3. Brak przecinka przed POJEDYNCZYM i / oraz / lub / albo / bądź / ani / ni / czy](#a3-brak-przecinka-przed-pojedynczym-i-oraz-lub-albo-bądź-ani-ni-czy)
  - [A4. Przecinek PRZED powtórzonym spójnikiem o identycznej funkcji (i…i, ani…ani, lub…lub, to…to, bądź…bądź)](#a4-przecinek-przed-powtórzonym-spójnikiem-o-identycznej-funkcji-ii-aniani-lublub-toto-bądźbądź)
  - [A5. Zbieg „i że / oraz że / i który / albo że” — bez przecinka przed drugim członem](#a5-zbieg-i-że-oraz-że-i-który-albo-że-bez-przecinka-przed-drugim-członem)
  - [A6. Przecinek PRZED spójnikami przeciwstawnymi (a, ale, lecz, tylko) i synonimicznymi (czyli, to znaczy, to jest)](#a6-przecinek-przed-spójnikami-przeciwstawnymi-a-ale-lecz-tylko-i-synonimicznymi-czyli-to-znaczy-to-jest)
  - [A7. Imiesłów przysłówkowy (-ąc, -łszy, -wszy) oddzielany przecinkiem](#a7-imiesłów-przysłówkowy--ąc--łszy--wszy-oddzielany-przecinkiem)
  - [A8. Wyrażenia wprowadzające wyjaśnienia i wyliczenia (czyli, to jest, to znaczy) — przecinek z OBU stron](#a8-wyrażenia-wprowadzające-wyjaśnienia-i-wyliczenia-czyli-to-jest-to-znaczy-przecinek-z-obu-stron)
  - [A9. Wtrącenie wydzielane z OBU stron (znak otwierający wymaga domykającego)](#a9-wtrącenie-wydzielane-z-obu-stron-znak-otwierający-wymaga-domykającego)
  - [A10. „to” jako łącznik orzeczenia imiennego — BEZ przecinka](#a10-to-jako-łącznik-orzeczenia-imiennego-bez-przecinka)
- [B. REGUŁY ZALEŻNE OD STRUKTURY / INTENCJI (nie stawiaj [BŁĄD] bez analizy)](#b-reguły-zależne-od-struktury-intencji-nie-stawiaj-błąd-bez-analizy)
  - [B1. „jak”: przecinek TYLKO gdy wprowadza zdanie (z orzeczeniem); zwykłe porównanie — BEZ](#b1-jak-przecinek-tylko-gdy-wprowadza-zdanie-z-orzeczeniem-zwykłe-porównanie-bez)
  - [B2. „niż”: przecinek gdy po nim orzeczenie (zdanie); porównanie niezdaniowe — BEZ](#b2-niż-przecinek-gdy-po-nim-orzeczenie-zdanie-porównanie-niezdaniowe-bez)
  - [B3. Przydawka imiesłowowa: dopowiadająca — przecinek; integralna — bez. („który" to NIE to samo — patrz niżej)](#b3-przydawka-imiesłowowa-dopowiadająca-przecinek-integralna-bez-który-to-nie-to-samo-patrz-niżej)
  - [B4. Dopowiedzenie wprowadzane spójnikiem łącznym („i to”) — przecinek](#b4-dopowiedzenie-wprowadzane-spójnikiem-łącznym-i-to-przecinek)
  - [B5. Spójnik „a”: łączny (= „i”) — przecinek niekonieczny; przeciwstawny — przecinek obowiązkowy](#b5-spójnik-a-łączny-i-przecinek-niekonieczny-przeciwstawny-przecinek-obowiązkowy)
  - [B6. Powtórzony spójnik — tylko na tym samym poziomie składniowym](#b6-powtórzony-spójnik-tylko-na-tym-samym-poziomie-składniowym)
  - [B7. Dwukropek vs myślnik — oba dopuszczalne, wybór konsekwentny](#b7-dwukropek-vs-myślnik-oba-dopuszczalne-wybór-konsekwentny)
  - [B8. Średnik — rozdziela w miarę samodzielne, równorzędne części](#b8-średnik-rozdziela-w-miarę-samodzielne-równorzędne-części)
  - [B9. Nawias i myślnik — siła i funkcja wydzielenia](#b9-nawias-i-myślnik-siła-i-funkcja-wydzielenia)
  - [B10. „np.”, „m.in.” — same w sobie bez przecinka; decyduje konstrukcja zdania](#b10-np-min-same-w-sobie-bez-przecinka-decyduje-konstrukcja-zdania)
- [MITY INTERPUNKCYJNE (częste fałszywe alarmy — NIGDY nie zgłaszaj jako błędu)](#mity-interpunkcyjne-częste-fałszywe-alarmy-nigdy-nie-zgłaszaj-jako-błędu)
- [Checklista operacyjna dla przecinka](#checklista-operacyjna-dla-przecinka)

---

## A. TWARDE REGUŁY (potwierdzone normą; brak → [BŁĄD])

### A1. Zdanie podrzędne oddziela się przecinkiem (że, aby/żeby, bo, ponieważ, gdy, jeśli, choć, który)
- Reguła: zdanie podrzędne wprowadzane spójnikiem podrzędnym lub zaimkiem względnym
  oddziela się przecinkiem od nadrzędnego (po stronie początku podrzędnego).
- Źle: „Myślę że masz rację.” / „To firma która działa od lat.” / „Zadzwoń jeśli zdążysz.”
- Dobrze: „Myślę, że masz rację.” / „To firma, która działa od lat.” / „Zadzwoń, jeśli zdążysz.”
- Cytat: „Spójnik że wprowadza różne wypowiedzenia podrzędne i w takich wypadkach
  zasadniczo stawia się przed nim przecinek.” (dr hab. A. Wolański, 20.01.2016)
  https://sjp.pwn.pl/poradnia/haslo/Przecinek-przed-ze;16504.html
- Pełna lista wyrazów wprowadzających zdanie podrzędne (aby, acz, bo, czy, gdy, jak,
  jeśli, ponieważ, który, że, żeby i in.): reguła [363].
  https://sjp.pwn.pl/zasady/363-90-A-2-Wyrazy-wprowadzajace-zdanie-podrzedne;629774.html

### A2. Spójniki zestawione: przecinek PRZED całością („cofanie przecinka”)
- Reguła: w połączeniach typu „mimo że”, „chyba że”, „dlatego że”, „tak że”, „jako że”,
  „podczas gdy”, „zwłaszcza że”, „tym bardziej że”, „tyle że” NIE wstawia się przecinka
  w środku; przecinek stoi PRZED całym wyrażeniem.
- Źle: „Przyszedł, mimo że był chory.” zapisane jako „Przyszedł mimo, że był chory.”
- Dobrze: „Przyszedł, mimo że był chory.” / „Nie zdążę, chyba że mi pomożesz.”
- Cytat: „Nie rozdziela się przecinkiem połączeń partykuł, spójników i przysłówków ze
  spójnikami.” oraz przykład „Nie chciał się położyć, pomimo że był śpiący.” (reguła [364])
  https://sjp.pwn.pl/zasady/Polaczenia-partykul-spojnikow-przyslowkow-ze-spojnikami;629776.html
- Cytat uzupełniający (lista zestawień i rzadkość pominięcia): „Wypadki, kiedy przecinek
  przed że się pomija, są niezwykle rzadkie.” oraz „tzw. cofania przecinka (por. tak że,
  dlatego że, jako że, za to że, zwłaszcza że, tylko że, tym bardziej że)”. (A. Wolański)
  https://sjp.pwn.pl/poradnia/haslo/Przecinek-przed-ze;16504.html
- UWAGA: najczęstszy błąd to „mimo, że”, „pomimo, że”, „chyba, że”, „dlatego, że” — to [BŁĄD].

### A3. Brak przecinka przed POJEDYNCZYM i / oraz / lub / albo / bądź / ani / ni / czy
- Reguła: przed pojedynczym spójnikiem łącznym, rozłącznym lub wyłączającym przecinka NIE ma.
- Źle: „Kupił chleb, i mleko.” / „Pojadę w góry, albo nad morze.” / „Nie znam Paryża, ani Marsylii.”
- Dobrze: „Kupił chleb i mleko.” / „Pojadę w góry albo nad morze.” / „Nie znam Paryża ani Marsylii.”
- Cytat: „Nie stawiamy przecinka przed spójnikami: i, a (= i), oraz, tudzież, lub, albo,
  bądź, czy, ani, ni, np.” z przykładami „Nie widziałem Paryża ani Marsylii.” (reguła [376])
  https://sjp.pwn.pl/zasady/376-90-g1-przecinek-a-spojniki-i-a-i-oraz-tudziez-lub-albo-badz-czy-ani-ni;629793.html
- Cytat (poziom zdań): „Nie rozdzielamy przecinkiem zdań złożonych współrzędnie połączonych
  następującymi spójnikami:” z przykładem „Pojadę na Mazury albo wybiorę się w Bieszczady.”
  (reguła [371]) https://sjp.pwn.pl/zasady/371-90-D-2-Zdania-wspolrzedne-polaczone-spojnikami-lacznymi-rozlacznymi-wylaczajacymi;629785.html
- Wyjątek (dopowiedzenie, patrz też B4 i A9): „Jeśli człon wprowadzany przez jeden z wymienionych
  spójników ma charakter dopowiedzenia, przed nim stawiamy przecinek: Uważam go za szaleńca, i to
  od dawna. Jest człowiekiem rozmownym, albo raczej gadułą.” (reguła [376] lit. b, URL jak wyżej)

### A4. Przecinek PRZED powtórzonym spójnikiem o identycznej funkcji (i…i, ani…ani, lub…lub, to…to, bądź…bądź)
- Reguła: gdy spójnik się powtarza i pełni tę samą funkcję, przed każdym kolejnym wystąpieniem
  stoi przecinek (przed pierwszym nie).
- Źle: „Zwiedzili i zamek i muzeum.” / „Nie znam ani jego ani jego brata.”
- Dobrze: „Zwiedzili i zamek, i muzeum.” / „Nie znam ani jego, ani jego brata.”
- Cytat: „Przecinek stawiamy przed spójnikami powtórzonymi, które pełnią identyczną funkcję:”
  z przykładami „Zwiedzili i zamek, i muzeum.”, „Nerwowo poprawiała to obrus, to sztućce,
  to serwetki.” (reguła [378])
  https://sjp.pwn.pl/zasady/378-90-G-3-Przecinek-przed-spojnikami-powtorzonymi-pelniacymi-identyczna-funkcje;629795.html
- Granica (patrz też B6): dotyczy spójników na tym samym poziomie składniowym; nie stosuj
  mechanicznie (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/interpunkcja-a-powtorzone-spojniki;12135.html

### A5. Zbieg „i że / oraz że / i który / albo że” — bez przecinka przed drugim członem
- Reguła: przy dwóch współrzędnych zdaniach podrzędnych połączonych spójnikiem łącznym/
  rozłącznym/wyłącznym przecinek stoi tylko przed PIERWSZYM; przed powtórzonym „że”/„który”
  przecinka NIE ma (spójnik łączny „wygrywa” z upodrzędniającym).
- Źle: „Powiedział, że wyjedzie, i że wróci później.”
- Dobrze: „Powiedział, że wyjedzie i że wróci później.” / „Znałam chłopca, który zbierał
  płyty CD i który miał ich już prawie sześćset.”
- Cytat: „przecinek stawiamy jedynie przed pierwszym zdaniem podrzędnym” z przykładem
  „Powiedział jej, że musi przemyśleć pewne sprawy i że w takim razie wyjedzie z miasta
  na około tydzień.” (dr hab. A. Wolański, 14.01.2020)
  https://sjp.pwn.pl/poradnia/haslo/Polaczenia-i-ze-albo-ze-i-jak-i-ktory-bez-przecinka;19902.html

### A6. Przecinek PRZED spójnikami przeciwstawnymi (a, ale, lecz, tylko) i synonimicznymi (czyli, to znaczy, to jest)
- Reguła: przed tymi spójnikami przecinek jest obowiązkowy.
- Źle: „Mogłem tam pójść ale po co?” / „Jestem globtroterem czyli zamiłowanym podróżnikiem.”
- Dobrze: „Mogłem tam pójść, ale po co?” / „Jestem zamiłowanym podróżnikiem, czyli globtroterem.”
- Cytat: „Przed spójnikami przeciwstawnymi a, ale, lecz, tylko oraz synonimicznymi
  (czyli, to znaczy, to jest, innymi słowy) stawiamy [przecinek]” z przykładami „Mogłem
  tam pójść, ale po co?”, „Prawda zwyciężyła, a nie fałsz.” (reguła [377])
  https://sjp.pwn.pl/zasady/377-90-g2-przecinek-przed-spojnikami-przeciwstawnymi-a-ale-lecz-tylko;629794.html

### A7. Imiesłów przysłówkowy (-ąc, -łszy, -wszy) oddzielany przecinkiem
- Reguła: imiesłowowy równoważnik zdania oddziela się przecinkiem; wg aktualnej normy
  także pojedynczy, nierozwinięty imiesłów. (Warunek poprawności zdania: ten sam podmiot
  i jednoczesność/uprzedniość czynności — patrz norma.md pkt 6.)
- Źle: „Wracając do domu spotkał sąsiada.” / „Usiadłszy sięgnął po gazetę.”
- Dobrze: „Wracając do domu, spotkał sąsiada.” / „Usiadłszy, sięgnął po gazetę.”
- Cytat: „Tak, w opisanych wypadkach należy postawić przecinek.” oraz „Oddziela on bowiem
  imiesłowowy równoważnik zdania” (prof. K. Kłosińska, 14.09.2021)
  https://sjp.pwn.pl/poradnia/haslo/przecinek-po-imieslowie-na-ac;21317.html
- Wyjątek (zbieg ze spójnikiem wymagającym przecinka): można pominąć jeden przecinek, by
  nie zamykać spójnika obustronnie, np. „Zawahał się, ale spojrzawszy w niebo, poszedł
  dalej” (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/interpunkcja-imieslowowych-rownowaznikow-zdan;13184.html

### A8. Wyrażenia wprowadzające wyjaśnienia i wyliczenia (czyli, to jest, to znaczy) — przecinek z OBU stron
- Reguła: wplecione w zdanie, domyka się je przecinkiem również z drugiej strony (na końcu
  zdania drugi przecinek zastępuje kropka).
- Źle: „Znam go od dawna to znaczy od dwudziestu lat i bardzo cenię.”
- Dobrze: „Znam go od dawna, to znaczy od dwudziestu lat, i ogromnie go cenię.”
- Cytat: „Z obu stron należy oddzielać przecinkami wyrażenia wprowadzające wyjaśnienia i
  wyliczenia, które rozpoczynają się najczęściej od czyli, to jest, to znaczy.” z przykładem
  „Odwiedzę kraje południowej Europy, to jest Włochy, Albanię i Grecję.” (reguła [385])
  https://sjp.pwn.pl/zasady/Przecinek-w-wyrazeniach-wprowadzajacych-wyjasnienia-i-wyliczenia;629805.html

### A9. Wtrącenie wydzielane z OBU stron (znak otwierający wymaga domykającego)
- Reguła: wtrącenie oddziela się od reszty zdania z dwóch stron — przecinkami, myślnikami
  albo nawiasem (siła wydzielenia rośnie w tej kolejności, patrz B9). Brak domknięcia = błąd.
- Źle: „Nowy projekt, moim zdaniem wart uwagi ruszy w maju.”
- Dobrze: „Nowy projekt, moim zdaniem wart uwagi, ruszy w maju.”
- Cytat: „Jeśli mamy do czynienia z wtrąceniem, to wówczas obowiązuje nas interpunkcja
  właściwa dla tego rodzaju konstrukcji.” oraz „podwojone przecinki (słaby efekt
  wydzielenia), myślniki (efekt mocniejszy) i nawiasy (efekt najmocniejszy)” (A. Wolański, 17.06.2016)
  https://sjp.pwn.pl/poradnia/haslo/Interpunkcja-wtracenia;16978.html
- Domknięcie w środku zdania. Cytat: „dopowiedzenie występujące wewnątrz zdania wydzielamy za
  pomocą przecinków z obu stron, np. Lubi jazz, zwłaszcza tradycyjny, choć ceni też muzykę
  poważną.” (reguła [386]) https://sjp.pwn.pl/zasady/386-90-J-2-Wyrazenia-typu-chyba-ewentualnie;629806.html
  oraz „po wtrąceniu otwartym za pomocą przecinka jest wymagany zamykający przecinek.”
  (prof. M. Bańko, 22.05.2010) https://sjp.pwn.pl/poradnia/haslo/wtracenia-a-interpunkcja;11221.html
- To samo w druku: E. Polański, Zasady interpunkcji, w: Polszczyzna na co dzień, red.
  M. Bańko, PWN, s. 494 (reguła 8.J.2: opuszczalność i wydzielanie z obu stron w jednym
  akapicie). Zgoda orzeczenia: „Jeżeli podmiot jest uzupełniony przez dopowiedzenie
  (rozwijające jego treść), formę orzeczenia uzgadnia się z samym podmiotem, np. Mała
  Konstytucja, główny akt prawny ostatnich lat, nie rozstrzygnęła wszystkich kwestii
  ustrojowych (nie: nie rozstrzygnął).” oraz „Liczba pojedyncza jest jedyną dopuszczalną
  formą orzeczenia, kiedy składniki podmiotu są rozbite, np. Książę udał się, podobnie jak
  jego świta, na spacer po Starym Mieście.” (ABC gramatyki, tamże, s. 148, pkt 1.2.5–1.2.6)
- Kryterium opuszczalności (wskazówka z PWN, w zasadach RJP 2026 jej nie ma; w skillu stosuj
  jako HEURYSTYKĘ przed zaleceniem „domknij przecinkiem”). Cytat: „O tym, że mamy do czynienia
  z dopowiedzeniem, możemy się przekonać wówczas, gdy opuścimy ten składnik zdania bez większej
  szkody dla budowy całego wypowiedzenia.” (dr hab. A. Wolański, 18.09.2019)
  https://sjp.pwn.pl/poradnia/haslo/interpunkcja-dopowiedzen;19627.html
  Jeśli po opuszczeniu budowa zdania się rozpada, dostawienie przecinka niczego nie naprawia.
- Przypadek „czy nawet” (wniosek ze złożenia reguł; żadne źródło nie omawia tego zdania wprost):
  „Jeden, czy nawet dwa etaty nie sprawią” ma samotny przecinek, który nie pasuje do żadnego
  odczytania. Jako zwykły spójnik „czy nawet” przecinka nie dostaje: „jeśli czy pełni funkcję
  spójnika […], nie stawiamy przed nim przecinka […]. Podobnie się dzieje, jeśli towarzyszy mu
  partykuła (czy też, czy nawet).” (prof. K. Kłosińska, 16.05.2021)
  https://sjp.pwn.pl/poradnia/haslo/Przecinek-przed-czy;21112.html
  Jako dopowiedzenie w środku zdania wymagałoby domknięcia, ale „Jeden, czy nawet dwa etaty,
  nie sprawią” odpada: po opuszczeniu zostaje „Jeden nie sprawią”, a orzeczenie ma się zgadzać
  z członem spoza wtrącenia (prof. M. Bańko, 1.06.2006)
  https://sjp.pwn.pl/poradnia/haslo/orzeczenie-przy-tzw-podmiocie-szeregowym;7300.html
- Naprawy: domyślnie usuń przecinek („Jeden czy nawet dwa etaty nie sprawią”). Jeśli autor chce
  dopowiedzenia, przebuduj: „Jeden etat, czy nawet dwa, nie sprawi” (Bańko woli tu nawias lub
  myślniki, bo przecinek przed „lub/czy” „może budzić obiekcje czytelników”; przy włączonej
  preferencji „bez długich myślników": przecinki albo nawias).
- NIE uogólniaj: dopowiedzenie na KOŃCU zdania z jednym przecinkiem jest poprawne („Wystarczy
  jeden etat, czy nawet dwa.”), a granica między zwykłym członem a dopowiedzeniem jest nieostra
  (dr A. Hącia, 2.12.2015), więc wybór należy do autora.

### A10. „to” jako łącznik orzeczenia imiennego — BEZ przecinka
- Reguła: w „Warszawa to stolica Polski” wyraz „to” jest łącznikiem (= „to jest”/„jest”),
  więc przecinka przed nim NIE ma. Przecinek stawia się, tylko gdy „to” jest spójnikiem
  wprowadzającym zdanie współrzędne (np. „Nie wiesz, to siedź cicho”).
- Źle: „Błędy ortograficzne, to rzadkość.” / „Jan, to mój brat.”
- Dobrze: „Błędy ortograficzne to rzadkość.” / „Jan to mój brat.” / „Nie wiesz, to siedź cicho.”
- Cytat: „Nie postawimy więc przecinka w zdaniach »Błędy ortograficzne to rzadkość«”
  oraz „Przecinkiem musimy go poprzedzić tylko wtedy, gdy pełni funkcję spójnika, a więc
  wprowadza zdanie współrzędne” (dr J. Grzenia, 2.11.2009)
  https://sjp.pwn.pl/poradnia/haslo/przecinek-przed-to;10598.html
- Test: jeśli „to” można zastąpić przez „to jest” lub „jest” — bez przecinka.

---

## B. REGUŁY ZALEŻNE OD STRUKTURY / INTENCJI (nie stawiaj [BŁĄD] bez analizy)

### B1. „jak”: przecinek TYLKO gdy wprowadza zdanie (z orzeczeniem); zwykłe porównanie — BEZ
- To najczęstszy fałszywy alarm: nie każde „jak” wymaga przecinka.
- BEZ przecinka (porównanie bez orzeczenia): „Był wysoki jak dąb.” / „Silny jak koń.” /
  „Biały jak śnieg.”
- Z przecinkiem (jest orzeczenie, czyli to zdanie): „Ubranie na nim leży, jak leżałoby na
  modelu.” / „Zrobił to tak, jak go nauczono.”
- Cytat: „nie stawiamy przecinka przed jak” (porównanie), a po dodaniu orzeczenia
  „konieczny stanie się przecinek przed jak” (dr A. Hącia, 10.11.2015)
  https://sjp.pwn.pl/poradnia/haslo/przecinek-przed-jak;16291.html
- „taki… jak…”, „tacy badacze jak…”: zwykle bez przecinka, gdy to wyliczenie przykładów,
  nie zdanie (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/tacy-badacze-jak;14830.html

### B2. „niż”: przecinek gdy po nim orzeczenie (zdanie); porównanie niezdaniowe — BEZ
- BEZ przecinka: „Wolę pójść z Kasią na randkę niż do kina.” (porównanie rzeczowników/bezokoliczników)
- Z przecinkiem: „Wolę pójść z Kasią na randkę, niż odrabiać lekcje.” (człon porównawczy ma czasownik)
- Cytat: „porównań niebędących zdaniami nie oddziela się przecinkami”; w zdaniu złożonym
  „przecinek przed niż musi się pojawić”; „W zdaniach porównawczych złożonych stawiamy
  przecinek przed członami porównującymi” (M. Malinowski, 12.04.2019)
  https://sjp.pwn.pl/poradnia/haslo/Przecinek-przed-niz-w-zdaniach-porownawczych-zlozonych;19386.html

### B3. Przydawka imiesłowowa: dopowiadająca — przecinek; integralna — bez. („który" to NIE to samo — patrz niżej)
Dotyczy TYLKO przydawek imiesłowowych (np. „bawiące się na podwórku"), NIE zdań z „który".
- Kryterium: czy określenie wskazuje obiekt (integralne → bez przecinka), czy to komentarz
  uboczny (dopowiadane → przecinek).
- Bez przecinka (integralne): „Dzieci bawiące się na podwórku to sąsiedzi."
- Z przecinkiem (dopowiadane): „Moja córka, bawiąca się właśnie na podwórku, ma pięć lat."
- Cytat: „Przydawek integralnych nie oddziela się przecinkiem od reszty wypowiedzenia";
  „Natomiast przydawki dopowiadane wymagają oddzielenia interpunkcyjnego od reszty zdania"
  (dr hab. A. Wolański, 21.07.2009)
  https://sjp.pwn.pl/poradnia/haslo/przecinek-a-imieslowy-przymiotnikowe;10407.html

**UWAGA — to twarda reguła, nie B:** NIE przenoś rozróżnienia restrykcyjne/nierestrykcyjne
na zdania z „który". W polszczyźnie przed „który" wprowadzającym zdanie podrzędne przecinek
jest OBOWIĄZKOWY (nie ma angielskiego wyjątku dla zdań restrykcyjnych). Brak przecinka przed
„który" = [BŁĄD]. Patrz sekcja A (zdania podrzędne). Zweryfikowane: strona PWN wcześniej tu
cytowana (23696) dotyczy tylko przydawek imiesłowowych i NIE mówi nic o „który".

### B4. Dopowiedzenie wprowadzane spójnikiem łącznym („i to”) — przecinek
- Gdy człon po „i” ma charakter dopowiedzenia (nie jest zwykłym elementem wyliczenia),
  przecinek się pojawia.
- Przykład: „Uważam go za szaleńca, i to od dawna.”
- Cytat: przykład „Uważam go za szaleńca, i to od dawna.” przy regule [376].
  https://sjp.pwn.pl/zasady/376-90-g1-przecinek-a-spojniki-i-a-i-oraz-tudziez-lub-albo-badz-czy-ani-ni;629793.html

### B5. Spójnik „a”: łączny (= „i”) — przecinek niekonieczny; przeciwstawny — przecinek obowiązkowy
- „a” łączne (można zastąpić przez „i”): przecinek fakultatywny lub brak.
- „a” przeciwstawne: przecinek obowiązkowy (patrz A6) — „Prawda zwyciężyła, a nie fałsz.”
- Źródło: reguły [376] (funkcja łączna) i [377] (funkcja przeciwstawna).
  https://sjp.pwn.pl/zasady/376-90-g1-przecinek-a-spojniki-i-a-i-oraz-tudziez-lub-albo-badz-czy-ani-ni;629793.html ,
  https://sjp.pwn.pl/zasady/377-90-g2-przecinek-przed-spojnikami-przeciwstawnymi-a-ale-lecz-tylko;629794.html

### B6. Powtórzony spójnik — tylko na tym samym poziomie składniowym
- Reguła z A4 obowiązuje, ale nie mechanicznie: „i” rozpoczynające nowe, niezależne zdanie
  nie jest „powtórzeniem” poprzedniego „i” wewnątrz wyliczenia.
- Treść: reguły nie stosuje się mechanicznie; liczy się poziom składniowy (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/interpunkcja-a-powtorzone-spojniki;12135.html

### B7. Dwukropek vs myślnik — oba dopuszczalne, wybór konsekwentny
- Dwukropek wprowadza wyodrębnioną partię (wyliczenie, cytat, uzasadnienie, wyjaśnienie).
- Cytat: „Główną funkcją dwukropka jest wprowadzanie jakiejś wyodrębnionej partii tekstu”
  https://sjp.pwn.pl/zasady/Dwukropek;629850.html
- W wielu kontekstach zamiast dwukropka wolno użyć myślnika; oba rozwiązania dopuszczalne,
  ale trzeba trzymać się jednego (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/dwukropek-czy-b-myslnik-b;14098.html

### B8. Średnik — rozdziela w miarę samodzielne, równorzędne części
- Cytat: „Średnik jest znakiem rozdzielającym słabszym od kropki i służy do oddzielania
  w miarę samodzielnych części wypowiedzenia.” https://sjp.pwn.pl/zasady/Srednik;629765.html
- W wyliczeniach: przecinek przy członach krótkich, średnik przy dłuższych (zawierających już
  przecinki), kropka gdy człony są pełnymi zdaniami (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/Interpunkcja-wyliczen;18273.html

### B9. Nawias i myślnik — siła i funkcja wydzielenia
- Nawias wydziela partie poboczne (najsilniej ze znaków wydzielających).
- Cytat (nawias): „Za pomocą nawiasu możemy wskazywać, które partie tekstu w stosunku do
  tekstu głównego mają charakter poboczny” https://sjp.pwn.pl/zasady/Nawias;629858.html
- Znaki przy nawiasie: „? ! …” przed nawiasem zamykającym, a „, ; — .” po nim (reguła [437]).
  https://sjp.pwn.pl/zasady/Nawias-obok-innego-znaku-interpunkcyjnego;629865.html
- Myślnik wtrącenia/dopowiedzenia. Cytat: „Myślnik sygnalizuje tu dodatkowe informacje,
  dopowiedzenie do treści pierwszej części zdania” (dr E. Kołodziejek, 28.03.2026)
  https://sjp.pwn.pl/poradnia/haslo/myslnik;24743.html
- Myślnik zamiast łącznika w zdaniach bez czasownika/„to”. Cytat: „Myślnik jest oczywiście
  pożądany w wypowiedzeniach, w których nie ma ani czasownika łącznikowego, ani zastępującego
  go słówka to, np. »Warszawa – stolica Polski«” (prof. M. Bańko)
  https://sjp.pwn.pl/poradnia/haslo/warszawa-stolica-polski;14711.html
- Myślnik w funkcji przecinka lub kropki jest dopuszczalny (nie błąd), ale nadużywany świadczy
  o słabym podziale tekstu (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/Myslnik-w-funkcji-przecinka-lub-kropki;18440.html
- Zapis techniczny myślnika/pauzy, półpauzy, dialogu i zakresów: patrz typografia.md i zrodla.md.

### B10. „np.”, „m.in.” — same w sobie bez przecinka; decyduje konstrukcja zdania
- Skróty „np.”/„m.in.” nie wymuszają przecinka, ale może go wymusić budowa zdania: wtrącenie
  domyka się z obu stron; samodzielna lista przykładów bywa poprzedzona przecinkiem.
- Przykłady: „Lubię owoce, np. jabłka i gruszki.” (lista) / „Niektóre owoce (np. cytrusy)
  są kwaśne.” (wtrącenie w nawiasie).
- Treść: skróty same nie wymagają przecinka, ale „otwierając samodzielną składniowo listę
  przykładów, należy je poprzedzić przecinkiem” (parafraza; pełny tekst pod URL).
  https://sjp.pwn.pl/poradnia/haslo/np-m-in;7803.html
- „to znaczy”/„tzn.” w funkcji „czyli” lub autokorekty: przecinek przed (patrz A8).
  https://sjp.pwn.pl/poradnia/haslo/to-znaczy;11682.html
- Zapis bez spacji wewnętrznej (m.in., tzn., itd., np., tj.): patrz typografia.md / zrodla.md.

---

## MITY INTERPUNKCYJNE (częste fałszywe alarmy — NIGDY nie zgłaszaj jako błędu)

- „Przecinek przed KAŻDYM »jak«.” FAŁSZ. Porównanie bez orzeczenia nie ma przecinka:
  „silny jak koń”, „biały jak śnieg”. Przecinek dopiero, gdy po „jak” jest zdanie z orzeczeniem.
  https://sjp.pwn.pl/poradnia/haslo/przecinek-przed-jak;16291.html
- „Przecinek przed KAŻDYM »że«.” FAŁSZ. W zestawieniach działa cofanie przecinka: „mimo że”,
  „dlatego że”, „tak że” — przecinek PRZED całością, nie przed samym „że”.
  https://sjp.pwn.pl/poradnia/haslo/Przecinek-przed-ze;16504.html
- „Przecinek przed KAŻDYM »i«.” FAŁSZ. Przed pojedynczym „i” przecinka nie ma; jest dopiero
  przy powtórzeniu („i…, i…”) lub przy dopowiedzeniu („…, i to…”).
  https://sjp.pwn.pl/zasady/376-90-g1-przecinek-a-spojniki-i-a-i-oraz-tudziez-lub-albo-badz-czy-ani-ni;629793.html
- „Przecinek przed »który« zawsze.” NIEPRAWDA jako reguła bezwyjątkowa. Przy przydawce
  integralnej (restrykcyjnej) przecinka się nie stawia; zależy od wyznaczoności rzeczownika.
  https://sjp.pwn.pl/poradnia/haslo/przecinek-a-imieslowy-przymiotnikowe;10407.html
- „»Warszawa, to stolica« z przecinkiem.” FAŁSZ. „to” jest tu łącznikiem, przecinka nie ma.
  https://sjp.pwn.pl/poradnia/haslo/przecinek-przed-to;10598.html
- „Myślnik zamiast przecinka to błąd.” FAŁSZ. Jest dopuszczalny (choć nadużywany bywa
  sygnałem słabego podziału tekstu).
  https://sjp.pwn.pl/poradnia/haslo/Myslnik-w-funkcji-przecinka-lub-kropki;18440.html
- „Przecinek przed »niż« zawsze.” FAŁSZ. Porównania niezdaniowe („wyżej niż on”, „niż do
  kina”) są bez przecinka.
  https://sjp.pwn.pl/poradnia/haslo/Przecinek-przed-niz-w-zdaniach-porownawczych-zlozonych;19386.html
- „Przecinek po »i« na początku zdania (po »I, …«).” FAŁSZ. „I” rozpoczynające zdanie nie
  jest wtrąceniem i nie wymaga przecinka po sobie.

---

## Checklista operacyjna dla przecinka

1. Czy to granica zdania składowego (podrzędne / współrzędne)? → tak: patrz A1–A6.
2. Czy spójnik to zestawienie (mimo że, dlatego że…)? → przecinek PRZED całością (A2).
3. Pojedynczy i/oraz/lub/albo/ani/czy? → bez przecinka (A3). Powtórzony? → przecinek (A4).
4. Zbieg „i że / i który”? → bez przecinka przed drugim (A5).
5. Imiesłów -ąc/-łszy/-wszy? → przecinek (A7) + sprawdź poprawność (ten sam podmiot).
6. Wtrącenie/dopowiedzenie/wyjaśnienie? → wydziel z OBU stron (A8, A9). Zanim zalecisz
   domknięcie, zrób test opuszczenia (A9); jeśli reszta zdania się sypie, usuń przecinek
   otwierający albo przebuduj zdanie.
7. „to” między podmiotem a orzecznikiem? → bez przecinka (A10).
8. „jak”/„niż” — jest po nim orzeczenie? → tak: przecinek; nie: bez (B1, B2). NAJPIERW to sprawdź,
   zanim zgłosisz brak przecinka jako błąd.
9. „który” — restrykcyjne czy dopowiadające? → bez analizy nie stawiaj [BŁĄD] (B3).
