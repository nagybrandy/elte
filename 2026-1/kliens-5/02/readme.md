<p>Az al&aacute;bbi feladatok mindegyik&eacute;n&eacute;l az a c&eacute;l, hogy egy megl&eacute;vő funkci&oacute;t JavaScript seg&iacute;ts&eacute;g&eacute;vel felfejlessz&uuml;nk. A fejleszt&eacute;s v&eacute;g&eacute;n pr&oacute;b&aacute;ljuk ki, hogy kikapcsolt JavaScript mellett az eredeti funkcionalit&aacute;s m&eacute;g mindig j&oacute;l műk&ouml;dik-e!</p>
<h3 id="landing-page">Landing page</h3>
<p>Az al&aacute;bbi feladatokat a <code>landing_page.html</code> oldalon oldd meg! A feladatokat nat&iacute;van is meg lehet oldani, illetve lehet tal&aacute;lni r&aacute; valamilyen k&eacute;sz megold&aacute;st &eacute;s azt alkalmazni. A k&uuml;lső k&ouml;nyvt&aacute;rakat CDN-ről h&uacute;zz&aacute;tok be, aj&aacute;nlom a jsdelvr-t haszn&aacute;latra. Opcion&aacute;lisan jQuery is haszn&aacute;lhat&oacute;!</p>
<ol type="1">
<li>
<p><strong>Landing page &ndash; belső linkek</strong> A landing page oldalon a navig&aacute;ci&oacute;s fejl&eacute;cben l&eacute;vő belső linkekre kattintva az oldal g&ouml;rd&uuml;lve menjen az adott helyre.</p>
</li>
<li>
<p><strong>Landing page &ndash; navig&aacute;ci&oacute; r&ouml;gz&iacute;t&eacute;se</strong> Ha elg&ouml;rd&uuml;lt az oldal 200px-nyit, akkor alkalmazzuk a <code>navbar-scrolled</code> st&iacute;lusoszt&aacute;lyt a <code>nav</code> elemen. &Uuml;gyelj arra, hogy a scroll esem&eacute;ny nagyon sokszor h&iacute;v&oacute;dik meg!</p>
</li>
<li>
<p><strong>Landing page &ndash; anim&aacute;ci&oacute; megjelen&eacute;skor</strong> Ha egy elem g&ouml;rd&iacute;t&eacute;s k&ouml;zben a viewportba &eacute;r, akkor valamilyen anim&aacute;ci&oacute; seg&iacute;ts&eacute;g&eacute;vel jelenjen meg! Az elemeket deklarat&iacute;van jel&ouml;lj&uuml;k meg HTML5 data attrib&uacute;tumokat haszn&aacute;lva, pl. <code>data-scroll</code>. Az anim&aacute;ci&oacute; nev&eacute;t is elt&aacute;rolhatod data attrib&uacute;tumban, pl. <code>data-scroll-animation="fadeInUp"</code>. Anim&aacute;ci&oacute;hoz haszn&aacute;lhatod az <code>animate.css</code> k&ouml;nyvt&aacute;rat. &Uuml;gyelj arra, hogy a scroll esem&eacute;ny nagyon sokszor h&iacute;v&oacute;dik meg!</p>
</li>
<li>
<p><strong>Landing page &ndash; folyamats&aacute;v</strong> Helyezz el egy olvas&aacute;si folyamats&aacute;vot az oldal tetej&eacute;n. A g&ouml;rd&iacute;t&eacute;s m&eacute;rt&eacute;ke szerint v&aacute;ltozzon 0 &eacute;s 100% k&ouml;z&ouml;tt a sz&eacute;less&eacute;ge!</p>
</li>
<li>
<p><strong>Landing page &ndash; akt&iacute;v men&uuml;pont jelz&eacute;se</strong> Az oldal g&ouml;rd&iacute;t&eacute;se k&ouml;zben jelezd a navig&aacute;ci&oacute;s sorban, hogy melyik men&uuml;pontn&aacute;l tartunk &eacute;ppen. Az adott men&uuml;pont linkj&eacute;nek st&iacute;lusoszt&aacute;lyai k&ouml;z&eacute; adjuk az <code>active</code> st&iacute;lusoszt&aacute;lyt.</p>
</li>
<li>
<p><strong>Landing page &ndash; sz&aacute;ml&aacute;l&oacute; p&ouml;rget&eacute;se</strong> Tedd lehetőv&eacute;, hogy egy sz&aacute;mot tartalmaz&oacute; elem 0-t&oacute;l felp&ouml;r&ouml;gj&ouml;n az aktu&aacute;lis &eacute;rt&eacute;k&eacute;re! Az elemet deklarat&iacute;van param&eacute;terezz&uuml;k fel data attrib&uacute;tumokon kereszt&uuml;l! Eleinte az elemre kattintva t&ouml;rt&eacute;njen meg a sz&aacute;ml&aacute;l&aacute;s, k&eacute;sőbb a viewportba &eacute;rve induljon el!</p>
</li>
<li>
<p><strong>Landing page &ndash; k&eacute;pnagy&iacute;t&aacute;s</strong> Tedd lehetőv&eacute;, hogy egy olyan elem f&ouml;l&eacute; v&iacute;ve az egeret, amely h&aacute;tt&eacute;rk&eacute;pet tartalmaz, a k&eacute;p nagyobban jelenjen meg ugyanakkora helyen, &eacute;s az egeret mozgatva az elem f&ouml;l&ouml;tt lehessen a k&eacute;p minden r&eacute;szlet&eacute;t megtekinteni.</p>
</li>
</ol>
<h3 id="jquery">jQuery</h3>
<p>Az al&aacute;bbi feladatokat a <code>recipe_list.html</code> oldalon oldd meg!</p>
<ol type="1">
<li><strong>Kiv&aacute;laszt&aacute;s</strong> &Iacute;rd ki a konzolra! (kiv&aacute;laszt&aacute;s szelektorokkal vagy jQuery met&oacute;dussal)
<ul>
<li style="list-style-type: none;">
<ol type="a">
<li>a listaelemeket (<code>li</code>)</li>
</ol>
<ol start="2" type="a">
<li>a <code>navbar-brand</code> st&iacute;lusoszt&aacute;ly&uacute; elemet</li>
</ol>
<ol start="3" type="a">
<li>a <code>row</code> st&iacute;lusoszt&aacute;ly&uacute; elemeket</li>
</ol>
<ol start="4" type="a">
<li>az &ouml;sszes <code>col-*</code> st&iacute;lusoszt&aacute;ly&uacute; elemet</li>
</ol>
<ol start="5" type="a">
<li>a <code>list-group</code> st&iacute;lusoszt&aacute;ly&uacute; list&aacute;n bel&uuml;li <code>list-group-item</code> st&iacute;lusoszt&aacute;ly&uacute; elemek k&ouml;z&uuml;l az elsőket</li>
</ol>
<ol start="6" type="a">
<li>az &ouml;sszes &eacute;telre mutat&oacute; linket</li>
</ol>
</li>
</ul>
</li>
<li><strong>Bej&aacute;r&aacute;s</strong>
<ul>
<li style="list-style-type: none;">
<ol type="a">
<li>V&aacute;lassz ki egy kateg&oacute;ri&aacute;t, &eacute;s ut&aacute;na &iacute;rd ki a konzolra az &ouml;sszes benne l&eacute;vő <code>list-group-item</code> st&iacute;lusoszt&aacute;ly&uacute; elemet!</li>
</ol>
<ol start="2" type="a">
<li>V&aacute;lassz ki egy &eacute;telhez tartoz&oacute; linket az oldalon, &eacute;s add meg a kateg&oacute;ri&aacute;ja nev&eacute;t!</li>
</ol>
<ol start="3" type="a">
<li>Konzolra &iacute;rd ki, mindegyik kateg&oacute;ri&aacute;ra, hogy h&aacute;ny &eacute;tel tartalmaz!</li>
</ol>
</li>
</ul>
</li>
<li><strong>Manipul&aacute;l&aacute;s</strong>
<ul>
<li style="list-style-type: none;">
<ol type="a">
<li>&Iacute;rd ki a kateg&oacute;ri&aacute;k mell&eacute; z&aacute;r&oacute;jelben, hogy h&aacute;ny &eacute;tel jelenik meg alattuk!</li>
</ol>
<ol start="2" type="a">
<li>A t&uacute;l r&ouml;vid nevű (&lt;5) recepteket keretezd be pirosan!</li>
</ol>
<ol start="3" type="a">
<li>A kateg&oacute;rianevekre kattintva csuk&oacute;djon &ouml;ssze a kateg&oacute;ria! &Uacute;jra r&aacute;kattintva jelenjen meg!</li>
</ol>
</li>
</ul>
</li>
<li><strong>L&eacute;trehoz&aacute;s</strong>
<ul>
<li style="list-style-type: none;">
<ol type="a">
<li>K&eacute;sz&iacute;ts egy felsorol&aacute;s az oldalon a kateg&oacute;rianevekkel!</li>
</ol>
<ol start="2" type="a">
<li>Mindegyik kateg&oacute;riafejl&eacute;cbe gener&aacute;lj egy gombot, amire kattintva az adott kateg&oacute;ria kit&ouml;lti a teljes sort (12 egys&eacute;g sz&eacute;les lesz)!</li>
</ol>
<ol start="3" type="a">
<li>Legyen az oldalon egy gomb, aminek hat&aacute;s&aacute;ra a kateg&oacute;ria dobozok eltűnnek, helyette egyetlen lista jelenik meg az &ouml;sszes &eacute;tellel, m&ouml;g&ouml;tte z&aacute;r&oacute;jelben a kateg&oacute;ria nev&eacute;vel!</li>
</ol>
</li>
</ul>
</li>
</ol>
<h3 id="komponensek-az-oldal-egyes-r&eacute;szeit-felfejlesztő-szkriptek">Az oldal egyes r&eacute;szeit felfejlesztő szkriptek</h3>
<p>Az al&aacute;bbi feladatokat pr&oacute;bak&eacute;ppen ak&aacute;r jQuery-vel is meg lehet oldani, de alapvetően a nat&iacute;v megold&aacute;s a prefer&aacute;lt!</p>
<ol type="1">
<li>
<p><strong>Rendezhető t&aacute;bl&aacute;zat</strong> Adott egy t&aacute;bl&aacute;zat az oldalon. JavaScript seg&iacute;ts&eacute;g&eacute;vel tedd lehetőv&eacute;, hogy az oszlopok fejl&eacute;c&eacute;re kattintva a t&aacute;bl&aacute;zat az adott oszlop szerint rendezve jelenjen meg!</p>
<div id="cb1" class="sourceCode">
<pre class="sourceCode html"><code class="sourceCode html"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">&lt;table&gt;</span></span>
<span id="cb1-2"><a href="#cb1-2"></a>    <span class="kw">&lt;tr&gt;</span></span>
<span id="cb1-3"><a href="#cb1-3"></a>        <span class="kw">&lt;th&gt;</span>Gy&uuml;m&ouml;lcs<span class="kw">&lt;/th&gt;</span></span>
<span id="cb1-4"><a href="#cb1-4"></a>        <span class="kw">&lt;th&gt;</span>Megye<span class="kw">&lt;/th&gt;</span></span>
<span id="cb1-5"><a href="#cb1-5"></a>    <span class="kw">&lt;/tr&gt;</span></span>
<span id="cb1-6"><a href="#cb1-6"></a>    <span class="kw">&lt;tr&gt;</span></span>
<span id="cb1-7"><a href="#cb1-7"></a>        <span class="kw">&lt;td&gt;</span>Alma<span class="kw">&lt;/td&gt;</span></span>
<span id="cb1-8"><a href="#cb1-8"></a>        <span class="kw">&lt;td&gt;</span>B&eacute;k&eacute;s<span class="kw">&lt;/td&gt;</span></span>
<span id="cb1-9"><a href="#cb1-9"></a>    <span class="kw">&lt;/tr&gt;</span></span>
<span id="cb1-10"><a href="#cb1-10"></a>    <span class="kw">&lt;tr&gt;</span></span>
<span id="cb1-11"><a href="#cb1-11"></a>        <span class="kw">&lt;td&gt;</span>Szilva<span class="kw">&lt;/td&gt;</span></span>
<span id="cb1-12"><a href="#cb1-12"></a>        <span class="kw">&lt;td&gt;</span>Hajd&uacute;-Dorog<span class="kw">&lt;/td&gt;</span></span>
<span id="cb1-13"><a href="#cb1-13"></a>    <span class="kw">&lt;/tr&gt;</span></span>
<span id="cb1-14"><a href="#cb1-14"></a>    <span class="kw">&lt;tr&gt;</span></span>
<span id="cb1-15"><a href="#cb1-15"></a>        <span class="kw">&lt;td&gt;</span>Gesztenye<span class="kw">&lt;/td&gt;</span></span>
<span id="cb1-16"><a href="#cb1-16"></a>        <span class="kw">&lt;td&gt;</span>Vas<span class="kw">&lt;/td&gt;</span></span>
<span id="cb1-17"><a href="#cb1-17"></a>    <span class="kw">&lt;/tr&gt;</span></span>
<span id="cb1-18"><a href="#cb1-18"></a><span class="kw">&lt;/table&gt;</span></span></code></pre>
</div>
</li>
<li>
<p><strong>Időintervallumok</strong> Adott egy űrlap, ahol t&ouml;bb időpontot is fel lehet venni. Minden időpontn&aacute;l meg kell adni a d&aacute;tumot &eacute;s egy t&oacute;l-ig intervallumot. Ellenőrizz&uuml;k le JavaScript seg&iacute;ts&eacute;g&eacute;vel, hogy a t&oacute;l mindig kisebb legyen az ig-n&eacute;l. Ha rossz, akkor mind a k&eacute;t mező legyen piros keretes. Legyen lehetős&eacute;g &uacute;j időpont-blokkot felvenni.</p>
<div id="cb2" class="sourceCode">
<pre class="sourceCode html"><code class="sourceCode html"><span id="cb2-1"><a href="#cb2-1"></a><span class="kw">&lt;form</span><span class="ot"> action=</span><span class="st">""</span><span class="kw">&gt;</span></span>
<span id="cb2-2"><a href="#cb2-2"></a>    <span class="kw">&lt;div</span><span class="ot"> class=</span><span class="st">"idopont"</span><span class="kw">&gt;</span></span>
<span id="cb2-3"><a href="#cb2-3"></a>        <span class="kw">&lt;input</span><span class="ot"> type=</span><span class="st">"date"</span><span class="ot"> name=</span><span class="st">"datum[]"</span><span class="kw">&gt;</span></span>
<span id="cb2-4"><a href="#cb2-4"></a>        <span class="kw">&lt;input</span><span class="ot"> type=</span><span class="st">"time"</span><span class="ot"> name=</span><span class="st">"tol[]"</span><span class="kw">&gt;</span></span>
<span id="cb2-5"><a href="#cb2-5"></a>        <span class="kw">&lt;input</span><span class="ot"> type=</span><span class="st">"time"</span><span class="ot"> name=</span><span class="st">"ig[]"</span><span class="kw">&gt;</span></span>
<span id="cb2-6"><a href="#cb2-6"></a>    <span class="kw">&lt;/div&gt;</span></span>
<span id="cb2-7"><a href="#cb2-7"></a>    <span class="kw">&lt;div</span><span class="ot"> class=</span><span class="st">"idopont"</span><span class="kw">&gt;</span></span>
<span id="cb2-8"><a href="#cb2-8"></a>        <span class="kw">&lt;input</span><span class="ot"> type=</span><span class="st">"date"</span><span class="ot"> name=</span><span class="st">"datum[]"</span><span class="kw">&gt;</span></span>
<span id="cb2-9"><a href="#cb2-9"></a>        <span class="kw">&lt;input</span><span class="ot"> type=</span><span class="st">"time"</span><span class="ot"> name=</span><span class="st">"tol[]"</span><span class="kw">&gt;</span></span>
<span id="cb2-10"><a href="#cb2-10"></a>        <span class="kw">&lt;input</span><span class="ot"> type=</span><span class="st">"time"</span><span class="ot"> name=</span><span class="st">"ig[]"</span><span class="kw">&gt;</span></span>
<span id="cb2-11"><a href="#cb2-11"></a>    <span class="kw">&lt;/div&gt;</span></span>
<span id="cb2-12"><a href="#cb2-12"></a><span class="kw">&lt;/form&gt;</span></span></code></pre>
</div>
</li>
<li>
<p><strong>Kaszk&aacute;d leg&ouml;rd&uuml;lők</strong> Adott egy leg&ouml;rd&uuml;lő men&uuml;, benne az opci&oacute;k csoportos&iacute;tva. Alak&iacute;tsd &aacute;t ezt &uacute;gy, hogy k&eacute;t leg&ouml;rd&uuml;lő legyen: az elsőben a csoportok neve, majd abb&oacute;l v&aacute;lasztva a m&aacute;sodikban a csoporton bel&uuml;li opci&oacute;k jelenjenek meg!</p>
<div id="cb3" class="sourceCode">
<pre class="sourceCode html"><code class="sourceCode html"><span id="cb3-1"><a href="#cb3-1"></a><span class="kw">&lt;label&gt;</span>Please choose one or more pets:</span>
<span id="cb3-2"><a href="#cb3-2"></a><span class="kw">&lt;select</span><span class="ot"> name=</span><span class="st">"pets"</span><span class="kw">&gt;</span></span>
<span id="cb3-3"><a href="#cb3-3"></a>    <span class="kw">&lt;optgroup</span><span class="ot"> label=</span><span class="st">"4-legged pets"</span><span class="kw">&gt;</span></span>
<span id="cb3-4"><a href="#cb3-4"></a>        <span class="kw">&lt;option</span><span class="ot"> value=</span><span class="st">"dog"</span><span class="kw">&gt;</span>Dog<span class="kw">&lt;/option&gt;</span></span>
<span id="cb3-5"><a href="#cb3-5"></a>        <span class="kw">&lt;option</span><span class="ot"> value=</span><span class="st">"cat"</span><span class="kw">&gt;</span>Cat<span class="kw">&lt;/option&gt;</span></span>
<span id="cb3-6"><a href="#cb3-6"></a>        <span class="kw">&lt;option</span><span class="ot"> value=</span><span class="st">"hamster"</span><span class="kw">&gt;</span>Hamster<span class="kw">&lt;/option&gt;</span></span>
<span id="cb3-7"><a href="#cb3-7"></a>    <span class="kw">&lt;/optgroup&gt;</span></span>
<span id="cb3-8"><a href="#cb3-8"></a>    <span class="kw">&lt;optgroup</span><span class="ot"> label=</span><span class="st">"Flying pets"</span><span class="kw">&gt;</span></span>
<span id="cb3-9"><a href="#cb3-9"></a>        <span class="kw">&lt;option</span><span class="ot"> value=</span><span class="st">"parrot"</span><span class="kw">&gt;</span>Parrot<span class="kw">&lt;/option&gt;</span></span>
<span id="cb3-10"><a href="#cb3-10"></a>        <span class="kw">&lt;option</span><span class="ot"> value=</span><span class="st">"macaw"</span><span class="kw">&gt;</span>Macaw<span class="kw">&lt;/option&gt;</span></span>
<span id="cb3-11"><a href="#cb3-11"></a>        <span class="kw">&lt;option</span><span class="ot"> value=</span><span class="st">"albatross"</span><span class="kw">&gt;</span>Albatross<span class="kw">&lt;/option&gt;</span></span>
<span id="cb3-12"><a href="#cb3-12"></a>    <span class="kw">&lt;/optgroup&gt;</span></span>
<span id="cb3-13"><a href="#cb3-13"></a><span class="kw">&lt;/select&gt;</span></span>
<span id="cb3-14"><a href="#cb3-14"></a><span class="kw">&lt;/label&gt;</span></span></code></pre>
</div>
</li>
<li>
<p><strong>Carousel</strong> Adott k&eacute;pek list&aacute;ja. Alak&iacute;tsd &aacute;t ezt &uacute;gy, hogy filmszalag-szerűen egym&aacute;s mell&eacute; rendezed a k&eacute;peket, de csak egynek hagysz helyet, hogy l&aacute;tsz&oacute;djon. A jobbra-balra billentyűkkel cs&uacute;sztasd arr&eacute;bb a filmszalagot &uacute;gy, hogy a k&ouml;vetkező k&eacute;p l&aacute;tsz&oacute;dj&eacute;k! Sablon: <code>carousel.html</code></p>
</li>
<li>
<p><strong>Hozz&aacute;val&oacute;k szerkeszt&eacute;se</strong> Adott egy űrlap, ahol receptet lehet megadni. Ezen bel&uuml;l van egy t&ouml;bbsoros sz&ouml;veges beviteli mező, amelyben a hozz&aacute;val&oacute;kat soroljuk soronk&eacute;nt. Fejleszd fel ezt az oldalt &uacute;gy, hogy minden sorhoz k&eacute;t input mezőt rendelsz: elsőben a mennyis&eacute;g, m&aacute;sodikban a hozz&aacute;val&oacute;. Legyen lehetős&eacute;g sorokat t&ouml;r&ouml;lni, &eacute;s &uacute;j sort hozz&aacute;adni. Az űrlap elk&uuml;ld&eacute;sekor az eredeti form&aacute;tumban kell az adatokat k&uuml;ldeni! Sablon: <code>new_recipe.html</code></p>
<div id="cb4" class="sourceCode">
<pre class="sourceCode html"><code class="sourceCode html"><span id="cb4-1"><a href="#cb4-1"></a><span class="kw">&lt;textarea&gt;</span>1csipet Cordon</span>
<span id="cb4-2"><a href="#cb4-2"></a>3csipet Bleu</span>
<span id="cb4-3"><a href="#cb4-3"></a>1tasak sz&aacute;r&iacute;tott burgonyap&uuml;r&eacute;&lt;/textarea&gt;</span></code></pre>
</div>
</li>
<li>
<p><strong>Fot&oacute;album</strong> K&eacute;sz&iacute;ts egy fot&oacute;albumot, ami &uacute;gy n&eacute;z ki, mintha az asztalra kisz&oacute;rtak volna sok k&eacute;pet. A k&eacute;pek egy felsorol&aacute;sban legyenek. A k&eacute;peknek ne csak a poz&iacute;ci&oacute;ja, hanem elforgat&aacute;sa is v&aacute;ltozzon. Lehessen a k&eacute;peket megtekinteni r&aacute;juk kattintva, vagy a jobbra-balra billentyűvel navig&aacute;lva. Sablon: <code>photo_album.html</code></p>
</li>
<li>
<p><strong>Sz&iacute;nes mező</strong> K&eacute;sz&iacute;ts egy olyan input mezőt, ami 0-t&oacute;l 360-ig fogad el &eacute;rt&eacute;keket, &eacute;s a be&aacute;ll&iacute;tott &eacute;rt&eacute;knek megfelelően &aacute;ll&iacute;tja be az input mező h&aacute;tt&eacute;rsz&iacute;n&eacute;t: <code>hsl(&eacute;rt&eacute;k, 50%, 50%)</code></p>
</li>
<li>
<p><strong>Textarea hosszal</strong> K&eacute;sz&iacute;ts olyan textarea mezőt, amely alatt fel van t&uuml;ntetve, hogy eddig h&aacute;ny karaktert &iacute;rtunk be.</p>
</li>
<li>
<p><strong>Olvashat&oacute; jelsz&oacute;</strong> K&eacute;sz&iacute;ts olyan jelsz&oacute; mezőt, amely mellett megjelenik egy gomb is, amelyre kattintva a jelsz&oacute; olvashat&oacute; form&aacute;ban megjelenik.</p>
</li>
<li>
<p><strong>GYIK</strong> Adott egy GYIK-gyűjtem&eacute;ny, ahol a k&eacute;rd&eacute;seket k&uuml;l&ouml;nb&ouml;ző kateg&oacute;ri&aacute;kba sorolt&aacute;k. &Iacute;rj olyan szkriptet, amely kigyűjti a kateg&oacute;ri&aacute;kat, azokat linkekk&eacute;nt a gyűjtem&eacute;ny f&ouml;l&ouml;tt megjelen&iacute;ti, &eacute;s ezekre kattintva csak az adott kateg&oacute;ri&aacute;j&uacute; elemeket jelen&iacute;ti meg!</p>
<div id="cb5" class="sourceCode">
<pre class="sourceCode html"><code class="sourceCode html"><span id="cb5-1"><a href="#cb5-1"></a><span class="kw">&lt;section&gt;</span></span>
<span id="cb5-2"><a href="#cb5-2"></a>  <span class="kw">&lt;h2&gt;</span>GYIK<span class="kw">&lt;/h2&gt;</span></span>
<span id="cb5-3"><a href="#cb5-3"></a>  <span class="kw">&lt;details&gt;</span></span>
<span id="cb5-4"><a href="#cb5-4"></a>    <span class="kw">&lt;summary&gt;</span>K&eacute;rd&eacute;s1 <span class="kw">&lt;small&gt;</span>Kateg&oacute;ria1&lt;/small&gt;<span class="kw">&lt;/summary&gt;</span></span>
<span id="cb5-5"><a href="#cb5-5"></a>    <span class="kw">&lt;p&gt;</span>V&aacute;lasz1<span class="kw">&lt;/p&gt;</span></span>
<span id="cb5-6"><a href="#cb5-6"></a>  <span class="kw">&lt;/details&gt;</span></span>
<span id="cb5-7"><a href="#cb5-7"></a>  <span class="kw">&lt;details&gt;</span></span>
<span id="cb5-8"><a href="#cb5-8"></a>    <span class="kw">&lt;summary&gt;</span>K&eacute;rd&eacute;s2 <span class="kw">&lt;small&gt;</span>Kateg&oacute;ria2&lt;/small&gt;<span class="kw">&lt;/summary&gt;</span></span>
<span id="cb5-9"><a href="#cb5-9"></a>    <span class="kw">&lt;p&gt;</span>V&aacute;lasz2<span class="kw">&lt;/p&gt;</span></span>
<span id="cb5-10"><a href="#cb5-10"></a>  <span class="kw">&lt;/details&gt;</span></span>
<span id="cb5-11"><a href="#cb5-11"></a><span class="kw">&lt;/section&gt;</span></span></code></pre>
</div>
</li>
</ol>
<h3 id="web-components" class="code-line code-line" data-line="157">Web components</h3>
<p class="code-line code-line" data-line="159">Az előző feladatcsoportba tartoz&oacute; feladatokat meg lehet oldani web komponensek defini&aacute;l&aacute;s&aacute;val is. N&eacute;h&aacute;ny tov&aacute;bbi feladat:</p>
<ol>
<li class="code-line code-line" data-line="161">
<p class="code-line code-line" data-line="161"><strong>J&oacute;v&aacute;hagy&oacute; link</strong><span>&nbsp;</span>K&eacute;sz&iacute;ts egy olyan komponenst, amely egy linket &uacute;gy fejleszt fel, hogy r&aacute;kattintva megk&eacute;rdezi, hogy biztos akarja-e k&ouml;vetni a linket!</p>
</li>
<li class="code-line code-line" data-line="163">
<p class="code-line code-line" data-line="163"><strong>&Ouml;sszecsukhat&oacute; lista</strong></p>
<ul>
<li class="code-line code-line" data-line="164">a. Egy list&aacute;t &uacute;gy fejlessz tov&aacute;bb, hogy r&aacute;kattintva &ouml;sszecs&uacute;k&oacute;dik, majd kiny&iacute;lik.</li>
<li class="code-line code-line" data-line="165">b. Műk&ouml;dj&ouml;n tetszőleges m&eacute;lys&eacute;gben egym&aacute;sba &aacute;gyazott list&aacute;kra is.</li>
</ul>
</li>
<li class="code-line code-line" data-line="167">
<p class="code-line code-line" data-line="167"><strong>Dial&oacute;gusablak</strong><span>&nbsp;</span>K&eacute;sz&iacute;ts egy komponenst, amely egy gombot gener&aacute;l, amelyre kattintva egy dial&oacute;gusablak jelenik meg. Legyen lehetős&eacute;g egyedi tartalmat a dial&oacute;gusablakba tenni.</p>
</li>
</ol>