# NetacademiaHTML5 programoz�s tanfolyam

https://netacademia.hu/Tanfolyam/html5-programozas


## HTML-elemek, HTML5-�r�sm�d
Bemeleg�t�sk�nt v�gigszaladunk egy HTML-dokumentum fel�p�t�s�n. Megn�zz�k, mik azok a HTML-elemek, �s val�j�ban mit jelentenek. B�r nem fogunk minden egyes elemet megr�gni - mivel szinte mindenki l�tott m�r HTML-t - az�rt a k�z�s indul�si pont kijel�l�s�hez fontos ez a l�p�s. �s hogy el ne felejts�k: az 5-�s HTML saj�t elemei ill. a r�gi elemek �t�rtelmez�se sok embernek �jdons�g lesz.

## Adatok bek�r�se, ellen�rz�s �rlapokkal, adatbek�r� vez�rl�kkel(form)
Egy valamire val� webalkalmaz�s kommunik�l a felhaszn�l�val. M�sk�nt sz�lva adatokat szerez t�le. Ennek eszk�ze a form �s a form belsej�ben haszn�lhat� adatbeviteli vez�rl�k. Megn�zz�k hogy m�k�dik, milyen prob�m�k mer�lhetnek fel �s azokat hogyan oldhatjuk meg. �gy azt�n fogunk v�zjelezni, adatot ellen�rizni (magyarul: valid�l�s) �s megk�zd�nk p�r b�ng�sz� inkompatibilit�si probl�m�val.

## Sz�p sz�nes �br�k v�szonra vet�se (canvas)
Ceruz�val egyszer� rajzolni. Photoshoppal is. Na de JavaScripttel? Ennek is megvan a maga b�ja. S�t a haszna is. A dinamikusan, helyzethez ill�en megrajzolt k�p tudja t�kr�zni az aktu�lis �llapotot vagy ak�r egy eg�sz j�t�kprogramnak is helyet adhat. Megsz�nezz�k, �sszemaszatoljuk a v�sznat. K�peket manupil�lunk, vagy �pp a felhaszn�l�i fel�letet eg�sz�tj�k ki sz�nes apr�s�gokkal. K�s�bb a vide�kn�l m�g visszat�r�nk a v�szonra festett mozg�k�ppre is.

## M�g t�bb sz�nes �bra, ez�ttal kicsit m�sk�nt (svg)
A v�szonra rajzolt dolgok fix m�ret� pixeles �br�k. Egy m�sik API-val megn�zz�k, hogy a JavaScript mell�z�s�vel HTML-szer�en is alkothatunk k�peket. Ezek �n. vektoros k�pek, melyek min�s�groml�s n�lk�l tudnak igazodni a kicsi �s a hatalmas monitorokhoz egyar�nt. Emelett a let�ltend� adatmennyis�g�k nagys�grendekkel kevesebben, mint a pixeles k�pek�. A rajtuk, benn�k megjelen�tett sz�vegek kiv�laszthat�k, s�t keres�motorok �ltal �rtelmezhet�k.

## Zen�k �s vide�k a weblapon (audio, video)
H�t hajoljunk meg a t�megek ig�nyei el�tt, legyen vide� a HTML-ben is. Egyszer�en �rjuk be a HTML-be, hogy video. H�t ennyire az�rt nem r�zsasz�n a helyzet. Megn�zz�k, milyen form�tumokat lehet illetve �rdemes haszn�lni. Megtanuljuk vez�relni a lej�tsz�st az audio �s video elemekhez tartoz� API seg�ts�g�vel.

## Eger�sz t�rsadalmunk kiszolg�l�sa a Drag and Drop API-val
A drag drop-ot nem kell magyar�zni senkinek. A megval�s�t�sa azonban hat�rozott t�mogat�s n�lk�l sokkal bonyolultabb, mint azt els�re b�rki is gondoln�. Szerencs�re m�r a HTML API-ja is t�mogat�st ny�jt. Megn�zz�k, hogyan tudjuk ezt kihaszn�lni.

## Kommunik�ci� a webszerverrel ill. weblapokkal
XmlHttpRequest Level 2 �s postMessage API
Megismerked�nk az AJAX alapj�t is k�pez� XmlHttpRequest objektummal, annak is a felokos�tott v�ltozat�val. �gy leht�s�g�nk lesz hazasz�lni a szerver�nknek ha kifogytunk az adatokb�l, vagy �pp a felgy�lemlett terhet szeretn�nk n�la lepakolni. Gyakran lehet sz�ks�g olyan adatcser�re, ami nem az otthoni szerver�nkkel t�rt�nik, esetleg m�s megnyitott weblapokkal szeretn�nk �sszedolgozni. Eddig ez a szoros biztons�g miatt szinte lehetetlen volt (legal�bbis a HTML keretein bel�l maradva). Most azonban a postMessage API seg�teni fog.

## Probl�m�s nap
Session, postMessage, JQuery.Ajax
Profi h�l�zati kommunik�ci� (Web Sockets)
A weblapok protokollja a HTTP. Ez sajnos t�rt�nelmi alapon egy kapcsolatmentes, szenilis csatorna. K�rted, kaptad, felejts�nk st�lusban. A k�zelm�ltban gyakran keser�tette meg �let�nket. De most itt a TCP alap�, szer� �j kommunik�ci�s csatorna, a Web Sockets. K�tir�ny� �lland� csatorna ki�p�t�s�vel eml�kezni k�pes, emiatt (nagyon) kev�s adattal is �rtelmesen kommunik�l�, gyorsan reag�l� megold�shoz juthatunk. B�r ez a technol�gia rengeteg lehet�s�get hordoz mag�ban, a leggyakoribb probl�ma, amit mi is k�rbe fogunk j�rni, a chat.

## A b�ng�sz� f�ldrajzi hely�nek meg�llap�t�sa (Geolocation)
Ma m�r az emberek a zseb�kben hurcolj�k magukkal a webb�ng�sz�t. Ide�lis lehet�s�g, hogy helyzet�rz�keny funkci�kkal vad�tsuk meg a webalkalmaz�sunkat. J�, de hol vagyunk?
GPS? Ak�r, de nem felt�tlen�l. Ahogy az emberek is rengeteg egym�st�l f�ggetlen adat alapj�n meg tudj�k hat�rozni saj�t hely�ket (utcat�bla, csillagok �ll�sa vagy hol is ittam az utols� poh�rral) �gy a h�l�zaton l�g� sz�m�t�g�pek is t�bb forr�sb�l t�pl�lkozhatnak. Ott van mindj�rt az IP-c�m. Amivel ak�r v�rosszintig is elmehet�nk. Wifi hotspotok, GSM-ad�tornyok vagy ak�r GPS-vev�. Ezekre mindre tud t�maszkodni a Geolocation API, meynek seg�ts�g�vel helyzet�rz�keny szolg�ltat�skat adhatunk, vehet�nk ig�nybe vagy �pp csak kirajzolhatjuk, hogy a b�ng�sz�nk szerint holl vagyunk a t�rk�pen.

## Weblapokat �t�vel� adatt�rol�s a b�ng�sz�ben (Storage API)
A webalkalmaz�s szem�lyre, szitu�ci�ra szabott m�k�d�s�hez gyakran van sz�ks�g�nk adatokra az el�z� lapon vagy lapokon tett t�nyked�sekr�l. Esetleg tegnapr�l. A Cookie seg�tett ebben eddig is. Enn�l azonban sokkal robosztusabb, hat�konyabb megold�s a Storage API. Annyira, hogy ak�r SQL-szer� m�k�d�st is meg lehet vele val�s�tani a b�ng�sz�ben. Ennek az API-nak n�zz�k meg az alapjait �s pr�b�ljuk ki, mi mindent b�zhatunk a felhaszn�l� b�ng�sz�j�re meg�rz�s c�lj�b�l.

## Offline haszn�lhat� weblap, web alkalmaz�s
Ha m�r tudunk a b�ng�sz�ben �tmenetileg adatokat t�rolni, a HTML-t dinamikusan v�ltoztatgatni, akkor mi�rt is zavarna minket, hogy nem adatott meg az �r�k �let� folyamatos Internetel�r�s? Megn�zz�k azt a p�r apr� dolgot, amivel koordin�lni tudjuk azokat az eseteket, amikor valaki kih�zza az alkalmaz�sunk al�l a talajt (meg az utp madzagot a falb�l). Ha a Windows 8-ra �runk HTML5-progit, b�tran sz�m�thatunk arra, hogy a futtat� masina nem l�t ki a webre, mert p�ld�ul k�lf�ld�n van a tablet, kir�ndul, �s nincs ingyenes WiFi a k�zelben.

## JavaScript t�bb processzorra kompon�lva, azaz sz�lkezel�s JavaScripttel (Web Worker API)
A c�m mag��rt besz�l. Most a processzormagok szaporod�s�nak id�szaka van. Hogy ezt alaposan ki tudjuk haszn�lni, �rten�nk kell a p�rhuzamosan, azaz egyid�ben egyszerre v�grehajthat� funkci�k �r�s�hoz. Ezzel nemcsak a kellemetlen lefagy�s�rz�st tudjuk elker�lni bizonyos id�ig�nyes feladatokn�l hanem konkr�tan fel is tudjuk gyors�tani azok m�k�d�s�t. A sz�lkezel�s komoly t�mak�r, de itt hozz�simulva a JavaScript egyszer�s�g�hez, megfelel�en visszafogott API-val hatalmas eredm�nyeket produk�lhatunk.

## Optimaliz�l�s mobil eszk�z�kre
Az a h�r j�rja, hogy a mobileszk�z�k �tveszik a hatalmat a hagyom�nyos sz�m�t�g�pekt�l. Nos, mi�ta l�teznek mobileszk�z�k, mindig is k�l�n t�rt�net volt azok webalap� t�mogat�sa. A kezdetek �ta sokat egyszer�s�d�tt a helyzet, hiszen p�ld�ul egy tabletet a mi szempontunkb�l nem is kell felt�tlen k�l�n kateg�riak�nt kezelni. B�r vannak saj�toss�gai, mint a k�l�nf�le be�p�tett �rz�kel�k, vagy az eg�r hi�nya. A telefonokn�l akadnak tov�bbi saj�toss�gok, p�ld�ul a telefon�l�si k�pess�g! B�r err�l egyre gyakrabban megfeledkez�nk. No meg az apr� k�perny�. Ezeknek a saj�toss�goknak a kezel�s�r�l sz�l ez a nap.

## Desktop alkalmaz�s HTML-b�l?
A kapukon d�nget� Windows 8 egyik f� fejleszt�i platformja is a HTML5. Betekint�st nyerhet�nk, milyen az, amikor nem weblapot fejleszt�nk HTML-lel �s JavaScripttel, hanem egy webt�l elrugaszkodott, igazi Windowsos alkalmaz�st alkotunk meg.