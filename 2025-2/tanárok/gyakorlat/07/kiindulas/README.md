# Évfolyam zh

## Nyilatkozat

<Hallgató neve>
<Hallgató Neptun kódja>

Ezt a megoldást a fent nevezett hallgató küldte be és készítette a Webprogramozás kurzus Évfolyam ZH számonkéréséhez.

Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé. Nem használtam mesterséges intelligencia által generált kódot, kódrészletet. Az ELTE HKR 377/A. § értelmében, ha nem megengedett segédeszközt veszek igénybe, vagy más hallgatónak nem megengedett segítséget nyújtok, a tantárgyat nem teljesíthetem.

ELTE Hallgatói Követelményrendszer, IK kari különös rész, 377/A. §: "Az a hallgató, aki olyan tanulmányi teljesítménymérés (vizsga, zárthelyi, beadandó feladat) során, amelynek keretében számítógépes program vagy programmodul elkészítése a feladat, az oktató által meghatározottakon kívül más segédeszközt vesz igénybe, illetve más hallgatónak meg nem engedett segítséget nyújt, tanulmányi szabálytalanságot követ el, ezért az adott félévben a tantárgyat nem teljesítheti és a tantárgy kreditjét nem szerezheti meg."

## Tudnivalók

- A zárthelyi megoldására **100 perc** áll rendelkezésre, amely **magába foglalja** a kezdőcsomagban található `README.md` fájl kitöltésére, a feladatok elolvasására, az anyagok letöltésére, összecsomagolására és feltöltésére szánt időt is.
- A feladatokat a Canvas rendszeren keresztül kell beadni. **A rendszer pontban 17:40-kor lezár, ezután nincs lehetőség beadásra**.
- A feladatok megoldásához az általatok gyűjtött statikus anyagok, bármilyen statikus weboldal használata engedélyezett, kifejezetten a [JavaScript dokumentáció](https://developer.mozilla.org/en-US/). **A zárthelyi időtartamában emberi segítség** (szinkron, aszinkron, chat, fórum, stb) **és mesterséges intelligencia** (ChatGPT, Bing AI, GitHub Copilot, stb.) **igénybe vétele tilos!** Ezek elfogadásáról nyilatkoztok a kezdőcsomagban található `README.md` fájlban, amelyben egyben tudomásul is veszitek az esetleges következményeket.
- A feladatok nem épülnek egymásra, **tetszőleges sorrendben** megoldhatók.
- A feladatok megoldásához először ??? [töltsd le az általunk készített keretprogramot](???). Ebben minden feladat külön könyvtárban helyezkedik el. Minden könyvtárban előkészítettük a HTML, CSS, JavaScript állományokat. Ezekben dolgozz! A kliensoldali feladatokban általában csak a `.js` fájlhoz kell hozzányúlni, de ha kell, akkor a HTML is módosítható, sőt több `.js` fájlra is szétoszthatod a megoldásodat, de ez egyáltalán nem elvárás.
- A letöltött keretprogramban lévő `README.hun.md` fájlban töltsétek ki a nevetek és a Neptun azonosítótokat (a <> jeleket nem kell beleírni)! A megoldott feladatrész mellé lentebb tegyél egy x-et, amiben nem vagy biztos, hogy megoldottad-e, "?" karaktert tegyél!

- [x] 0. Példa a megoldott feladatrészre

- [?] 00. Példa arra a feladatrészre, amivel foglalkoztál, de nem vagy benne biztos, hogy jó.

**A megfelelően kitöltött `README.md` állomány nélküli megoldásokat nem értékeljük!**

## 1. feladat: Naprendszer(1-planets, 10 pont)
- [  ] a. (2 pont) Az alábbi adatokat tudjuk a következő feladat elkészítéséhez. Tárold el a megfelelő adatszerkezetben a script js-ben!
    - Nap
        - x pozíció: Canvas vízszintes közepe
        - y pozíció: Canvas függőleges közepe
        - szín: "yellow"
        - méret: 40
    -Bolygók:
        - Merkúr: sugár: 70, méret: 8, szín: "gray", sebesség: 2
        - Vénusz: sugár: 100, méret: 10, szín: "orange", sebesség: 1.5
        - Föld: sugár: 140, méret: 12, szín: "blue", sebesség: 1
        - Mars: sugár: 180, méret: 10, szín: "red", sebesség: 0.8
- [  ] b. (1 pont) Rajzold ki a napot a `Nap` változó adatai alapján a képernyő közepére!
- [  ] c. (2 pont) Rajzold ki a bolygók pályáit! A bolygók pályáinak közepe megegyezik a Nap koordinátáival, így azokat használd hozzá! A bolygókhoz szükséges sugarat a `bolygok` tömbben találod.
- [  ] d. (3 pont) Ahhoz, hogy a bolygók x és y pozícióját ki tudd számolni, szögfüggvényekre lesz szükséged. A bolygók éppen aktuális pozícióját a következő képlettel tudod kiszámolni: 

```js
    const x = Nap.x + bolygo.radius * Math.cos(angle * bolygo.speed);
    const y = Nap.y + bolygo.radius * Math.sin(angle * bolygo.speed);
```
    A fentebbi pozíciók alapján rajzold ki a bolygókat! 
- [  ] e. (2 pont) Készíts animációsciklust a megfelelő módon! Hozz létre az oldal betöltésekor egy angle változót 0 értékkel. Ahhoz, hogy a bolygók mozogjanak, az angle változó értékét kell növelni minden frissítés végén 0.02-vel!

## 2. feladat: Hoki (2-hockey, 10 pont)

A hokiban félpályás gólt szeretnél szerezni, de a védők folyamatosan fel-alá csúszkálnak. Elég ügyes vagy ehhez? Készíts hozzá játékot Canvas használatával!

- [  ] a. (1 pont) Rajzodl ki a hátteret a pályára! A "Start" gombra kattintva indítsd el az animációs ciklust, és rajzold ki a labdát a `ball` változó adatai alapján! A képét a `ballImage` változóban tároljuk!
- [  ] b. (1 pont) Rajzold ki a kaput is. Ez egy félig átlátszó szürke téglalap legyen, az adatok a `gate` változóban találhatók.
- [  ] c. (1 pont) Bármelyik gomb megnyomásával lökd meg a labdát! Ehhez adj neki vízszintes sebességet pl.: `ball.vx = 300;`!
- [  ] d. (1 pont) Mozgás közben a labda finoman lassuljon! Ehhez lökéskor adjál negatív vízszintes irányú gyorsulást ` ball.ax = -50;`.
- [  ] e. (1 pont) Ha a labda teljes egészében a kapu vonalán belül van, állítsd le az animációs ciklust. Nyertél!
- [  ] f. (2 pont) Induláskor adj hozzá 1 védőt a pályához. A védő ugyancsak téglalap, képe a `defenderImage` változóban van. Vízszintesen fix helyre, függőlegesen véletlen helyre kerül lerakásra, véletlen iránnyal és véletlen sebességgel (pl. 150 és 250 px/s között). Az `y` pozícióját kiszámolhatod az alábbi módon: `def.y += def.dir * def.vy * dt;`
A véletlen számokhoz elő van készítve egy `random(a, b)` függvény!
- [  ] g. (2 pont) Mozgasd a védőt a pályán az alsó és a felső széle között!
- [  ] h. (1 pont) Ha a labda a védőhöz ér, akkor is érjen véget a játék! Ehhez használhatod az `isCollision(box1, box2)` függvényt, ami két téglalap átfedését vizsgálja.

??? [Hockey](./2-hockey/2-hockey.gif)