# Rejestr i architektura tekstu

Rejestr to twarde ograniczenie, nie sugestia. Reguły prostoty i anty-AI USTĘPUJĄ
wymogom gatunku. „Humanizuj wszystko" jest błędne.

## Tabela KEEP / CUT per gatunek
Linter: `--genre doc|ui|legal|science` ustawia próg długości zdania i gęstości „który"
oraz wycisza klasy, które dany rejestr każe zostawić (tabela GENRES w scripts/lint-pl.mjs).
Prawniczy/naukowy = `legal`/`science`; UI/microcopy = `ui`; reszta = `doc`.

- **Dokument / spec / README**: 3. osoba lub bezosobowo, ale AKTYWNIE. KEEP: terminy,
  spójne nazewnictwo. CUT: wata wstępów, inflacja przymiotników, kalki, puste ramy.
- **UI / microcopy**: tryb rozkazujący (Dodaj zlecenie, Wybierz kategorię), bez
  grzecznościowej waty. Zdania krótsze (flaguj >12 słów).
- **E-mail / powiadomienie**: najważniejsza informacja w pierwszym zdaniu; usługa mówi
  „my" (Wysłaliśmy). CUT: formuły otwierające typu „Mam nadzieję, że…".
- **B2B / oferta**: „Państwo" lub bezosobowo; „Ty" tylko jeśli taki głos marki. KEEP:
  konkret produktu, CTA. CUT: superlatywy, sztuczna pilność, reguła trójki.
- **Blog / marketing**: bezpośrednie „ty", pytania; emoji wyjątkowo. Korzyść musi
  wynikać z cechy (nie zmyślaj); oceny zastępuj dowodem (liczba/warunek/przykład).
- **Naukowy**: KEEP hedging, strona bierna w metodach, terminologia. CUT: wata wstępów,
  inflacja przymiotników, kalki.
- **Prawniczy / urzędowy**: patrz niżej — osobny tryb.

## Wyjątek prawniczy / urzędowy (NIE stosuj tu reguł anty-AI)
KEEP: strona bierna i bezosobowe -no/-to (naturalne), IDENTYCZNE powtarzanie terminów
zdefiniowanych (żadnych synonimów „Oprogramowania"), wielowarunkowe zdania bez dzielenia,
podstawy prawne i wymagane formuły, precyzja ponad elegancję.
Zasady: czas teraźniejszy + strona czynna + jawny podmiot, gdzie to możliwe; jedno
postanowienie = jedna myśl; terminy nieostre zastąp miarą (niezwłocznie → konkretny
termin; odpowiedni → mierzalny; „rozsądny termin" → liczba dni; „najlepsze starania" →
należyta staranność, art. 355 KC); w umowach liczby słownie i cyfrą; hierarchia §/ust./
pkt/lit./tiret. Archaizmy do wymiany: albowiem→bo, aczkolwiek→choć, atoli→jednak,
iż→że, niniejszym→(wytnij), przedmiotowy→(wytnij), tudzież→i, zaś→a/natomiast.

## Architektura (prosty język, dla tekstów użytkowych)
- **BLUF**: wniosek/najważniejsze w pierwszym zdaniu lub akapicie.
- **Just-in-Time context**: tylko tyle kontekstu, ile trzeba do następnego kroku.
  Test akapitu: „czy czytelnik mógłby go pominąć i nadal wykonać zadanie?".
- **Most z góry na dół (znane→nowe)**: zaczynaj od tego, co czytelnik zna; nigdy dwie
  niewiadome w jednym zdaniu; w zdaniu znane na początku, nowe na końcu (end-focus —
  najmocniejsza pozycja to koniec zdania; polski ma swobodny szyk, wykorzystaj to).
- Jeden akapit = jeden wątek; zdanie tematyczne otwiera akapit.
- **Zdania ≤20 słów**; przy 25+ znajdź najbliższy spójnik i postaw kropkę. RÓŻNICUJ
  długość (trzy zdania tej samej długości = metronom).
- **Paralelizm** członów list, kroków, nagłówków, kolumn tabel.
- **Konkret ponad ocenę**: „wzrost o 12%", nie „znaczący wzrost". Przymiotnik oceniający
  bez liczby obok → usuń albo znajdź liczbę.
- **Osobny przebieg cięcia**: celuj w 15-20% krócej; wynik nie dłuższy niż wejście.
- **Twierdząco zamiast przecząco** (zapłać w terminie, nie: nie spóźnij się); osoba
  (my/ja; Pan/Pani lub ty) spójnie w całym tekście; wytnij zbędne „ja/my".
- Narzędzia pomocnicze do czytelności: jasnopis.pl, logios.pl (FOG-PL). To wskazówka,
  nie wyrocznia.

## Pisanie użytkowe / copy (zasady ogólne)
Dla tekstów sprzedażowych, ofert, opisów produktu, postów. W tekstach prawniczych/
naukowych stosuj z umiarem (patrz wyżej).
- **Cecha → korzyść**: nie opisuj mechanizmu, opisz, co z tego ma odbiorca. Źle:
  „algorytmy AI optymalizują przetwarzanie". Dobrze: „dzięki AI obniżamy koszty
  przetwarzania i przyspieszamy decyzje".
- **Fakty zamiast ogólników**: liczby, daty, konkret zamiast deklaracji. Zamiast
  „mamy duże doświadczenie" → „zrealizowaliśmy 300 projektów w bankowości".
- **Bez sloganów**: jeśli zdanie brzmi jak reklama, przebuduj; jeśli opiera się na
  faktach, zostaw.
- **Nie obiecuj ponad miarę**: żadnych gwarancji i superlatyw bez pokrycia.
- **Nie mieszaj stylów** w jednym tekście (raz oficjalnie, raz na luzie).
- **Żargon tylko z wyjaśnieniem**: termin techniczny wprowadzaj raz z krótkim
  objaśnieniem, potem używaj konsekwentnie.
- **Oceny zastępuj dowodem**: przymiotnik oceniający bez liczby/warunku/przykładu obok
  → usuń albo podeprzyj (patrz „konkret ponad ocenę" wyżej).
