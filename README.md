# NetacademiaHTML5 programozás tanfolyam

https://netacademia.hu/Tanfolyam/html5-programozas


## HTML-elemek, HTML5-írásmód
Bemelegítésként végigszaladunk egy HTML-dokumentum felépítésén. Megnézzük, mik azok a HTML-elemek, és valójában mit jelentenek. Bár nem fogunk minden egyes elemet megrágni - mivel szinte mindenki látott már HTML-t - azért a közös indulási pont kijelöléséhez fontos ez a lépés. És hogy el ne felejtsük: az 5-ös HTML saját elemei ill. a régi elemek átértelmezése sok embernek újdonság lesz.

## Adatok bekérése, ellenõrzés ûrlapokkal, adatbekérõ vezérlõkkel(form)
Egy valamire való webalkalmazás kommunikál a felhasználóval. Másként szólva adatokat szerez tõle. Ennek eszköze a form és a form belsejében használható adatbeviteli vezérlõk. Megnézzük hogy mûködik, milyen probémák merülhetnek fel és azokat hogyan oldhatjuk meg. Így aztán fogunk vízjelezni, adatot ellenõrizni (magyarul: validálás) és megküzdünk pár böngészõ inkompatibilitási problémával.

## Szép színes ábrák vászonra vetése (canvas)
Ceruzával egyszerû rajzolni. Photoshoppal is. Na de JavaScripttel? Ennek is megvan a maga bája. Sõt a haszna is. A dinamikusan, helyzethez illõen megrajzolt kép tudja tükrözni az aktuális állapotot vagy akár egy egész játékprogramnak is helyet adhat. Megszínezzük, összemaszatoljuk a vásznat. Képeket manupilálunk, vagy épp a felhasználói felületet egészítjük ki színes apróságokkal. Késõbb a videóknál még visszatérünk a vászonra festett mozgóképpre is.

## Még több színes ábra, ezúttal kicsit másként (svg)
A vászonra rajzolt dolgok fix méretû pixeles ábrák. Egy másik API-val megnézzük, hogy a JavaScript mellõzésével HTML-szerûen is alkothatunk képeket. Ezek ún. vektoros képek, melyek minõségromlás nélkül tudnak igazodni a kicsi és a hatalmas monitorokhoz egyaránt. Emelett a letöltendõ adatmennyiségük nagyságrendekkel kevesebben, mint a pixeles képeké. A rajtuk, bennük megjelenített szövegek kiválaszthatók, sõt keresõmotorok által értelmezhetõk.

## Zenék és videók a weblapon (audio, video)
Hát hajoljunk meg a tömegek igényei elõtt, legyen videó a HTML-ben is. Egyszerûen írjuk be a HTML-be, hogy video. Hát ennyire azért nem rózsaszín a helyzet. Megnézzük, milyen formátumokat lehet illetve érdemes használni. Megtanuljuk vezérelni a lejátszást az audio és video elemekhez tartozó API segítségével.

## Egerész társadalmunk kiszolgálása a Drag and Drop API-val
A drag drop-ot nem kell magyarázni senkinek. A megvalósítása azonban határozott támogatás nélkül sokkal bonyolultabb, mint azt elsõre bárki is gondolná. Szerencsére már a HTML API-ja is támogatást nyújt. Megnézzük, hogyan tudjuk ezt kihasználni.

## Kommunikáció a webszerverrel ill. weblapokkal
XmlHttpRequest Level 2 és postMessage API
Megismerkedünk az AJAX alapját is képezõ XmlHttpRequest objektummal, annak is a felokosított változatával. Így lehtõségünk lesz hazaszólni a szerverünknek ha kifogytunk az adatokból, vagy épp a felgyülemlett terhet szeretnénk nála lepakolni. Gyakran lehet szükség olyan adatcserére, ami nem az otthoni szerverünkkel történik, esetleg más megnyitott weblapokkal szeretnénk összedolgozni. Eddig ez a szoros biztonság miatt szinte lehetetlen volt (legalábbis a HTML keretein belül maradva). Most azonban a postMessage API segíteni fog.

## Problémás nap
Session, postMessage, JQuery.Ajax
Profi hálózati kommunikáció (Web Sockets)
A weblapok protokollja a HTTP. Ez sajnos történelmi alapon egy kapcsolatmentes, szenilis csatorna. Kérted, kaptad, felejtsünk stílusban. A közelmúltban gyakran keserítette meg életünket. De most itt a TCP alapú, szerû új kommunikációs csatorna, a Web Sockets. Kétirányú állandó csatorna kiépítésével emlékezni képes, emiatt (nagyon) kevés adattal is értelmesen kommunikáló, gyorsan reagáló megoldáshoz juthatunk. Bár ez a technológia rengeteg lehetõséget hordoz magában, a leggyakoribb probléma, amit mi is körbe fogunk járni, a chat.

## A böngészõ földrajzi helyének megállapítása (Geolocation)
Ma már az emberek a zsebükben hurcolják magukkal a webböngészõt. Ideális lehetõség, hogy helyzetérzékeny funkciókkal vadítsuk meg a webalkalmazásunkat. Jó, de hol vagyunk?
GPS? Akár, de nem feltétlenül. Ahogy az emberek is rengeteg egymástól független adat alapján meg tudják határozni saját helyüket (utcatábla, csillagok állása vagy hol is ittam az utolsó pohárral) úgy a hálózaton lógó számítógépek is több forrásból táplálkozhatnak. Ott van mindjárt az IP-cím. Amivel akár városszintig is elmehetünk. Wifi hotspotok, GSM-adótornyok vagy akár GPS-vevõ. Ezekre mindre tud támaszkodni a Geolocation API, meynek segítségével helyzetérzékeny szolgáltatáskat adhatunk, vehetünk igénybe vagy épp csak kirajzolhatjuk, hogy a böngészõnk szerint holl vagyunk a térképen.

## Weblapokat átívelõ adattárolás a böngészõben (Storage API)
A webalkalmazás személyre, szituációra szabott mûködéséhez gyakran van szükségünk adatokra az elõzõ lapon vagy lapokon tett ténykedésekrõl. Esetleg tegnapról. A Cookie segített ebben eddig is. Ennél azonban sokkal robosztusabb, hatékonyabb megoldás a Storage API. Annyira, hogy akár SQL-szerû mûködést is meg lehet vele valósítani a böngészõben. Ennek az API-nak nézzük meg az alapjait és próbáljuk ki, mi mindent bízhatunk a felhasználó böngészõjére megõrzés céljából.

## Offline használható weblap, web alkalmazás
Ha már tudunk a böngészõben átmenetileg adatokat tárolni, a HTML-t dinamikusan változtatgatni, akkor miért is zavarna minket, hogy nem adatott meg az örök életû folyamatos Internetelérés? Megnézzük azt a pár apró dolgot, amivel koordinálni tudjuk azokat az eseteket, amikor valaki kihúzza az alkalmazásunk alól a talajt (meg az utp madzagot a falból). Ha a Windows 8-ra írunk HTML5-progit, bátran számíthatunk arra, hogy a futtató masina nem lát ki a webre, mert például külföldön van a tablet, kirándul, és nincs ingyenes WiFi a közelben.

## JavaScript több processzorra komponálva, azaz szálkezelés JavaScripttel (Web Worker API)
A cím magáért beszél. Most a processzormagok szaporodásának idõszaka van. Hogy ezt alaposan ki tudjuk használni, értenünk kell a párhuzamosan, azaz egyidõben egyszerre végrehajtható funkciók írásához. Ezzel nemcsak a kellemetlen lefagyásérzést tudjuk elkerülni bizonyos idõigényes feladatoknál hanem konkrétan fel is tudjuk gyorsítani azok mûködését. A szálkezelés komoly témakör, de itt hozzásimulva a JavaScript egyszerûségéhez, megfelelõen visszafogott API-val hatalmas eredményeket produkálhatunk.

## Optimalizálás mobil eszközökre
Az a hír járja, hogy a mobileszközök átveszik a hatalmat a hagyományos számítógépektõl. Nos, mióta léteznek mobileszközök, mindig is külön történet volt azok webalapú támogatása. A kezdetek óta sokat egyszerûsödött a helyzet, hiszen például egy tabletet a mi szempontunkból nem is kell feltétlen külön kategóriaként kezelni. Bár vannak sajátosságai, mint a különféle beépített érzékelõk, vagy az egér hiánya. A telefonoknál akadnak további sajátosságok, például a telefonálási képesség! Bár errõl egyre gyakrabban megfeledkezünk. No meg az apró képernyõ. Ezeknek a sajátosságoknak a kezelésérõl szól ez a nap.

## Desktop alkalmazás HTML-bõl?
A kapukon döngetõ Windows 8 egyik fõ fejlesztõi platformja is a HTML5. Betekintést nyerhetünk, milyen az, amikor nem weblapot fejlesztünk HTML-lel és JavaScripttel, hanem egy webtõl elrugaszkodott, igazi Windowsos alkalmazást alkotunk meg.