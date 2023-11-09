# Webqam - Base de projet bannières

---

[Contenu du projet](#user-content-contenu-du-projet-de-base)

[Script d'exports Photoshop](#user-content-utilisation-des-scripts-dautomatisation-des-exports)

[Les Plugins GSAP](#user-content-utilisation-des-plugins-gsap)

[Les fichiers javascript](#user-content-le-répertoire-srcjs)

[Structure HTML](#user-content-structure-du-fichier-html)

[Les CSS](#user-content-les-scss)

[Exemples de codes GSAP](#user-content-exemples-de-codes-gsap) / [Test de boucles](#user-content-exemple-du-test-de-nombre-de-boucles)

[Eases](#user-content-easings)

[SVG](#user-content-svg)

[Utility Methods](#user-content-utility-methods)

---

[ > sheat sheet](https://greensock.com/cheatsheet/)

---

https://css-irl.info/optimising-svgs-for-the-web/

https://danielcwilson.com/blog/2020/02/motion-path-transforms/

https://tympanus.net/codrops/2020/06/17/making-stagger-reveal-animations-for-text/

https://codersblock.com/blog/the-surprising-things-that-css-can-animate/

https://cloudfour.com/thinks/transitioning-hidden-elements/

- repeatRefresh sur les tween repeat et timeline repeat (ne pas utiliser sur 'main' et 'mask')
- anim 'mask' en intro sur une timeline différent (timeline 'mask')
- la timeline 'main' peut boucler indéfiniement (repeat: -1)
- la durée totale de l'anim est calculée plus précisément
- dans GSAP la def des loop commence à 0 (0 = une boucle, -1 = boucle infinie). Dans l'object TL elle commence à 1: 1= 1 boucle, 0 = boucle infinie

- dans le cas des animations en 2/3 (2 boucles + une boucle de fin) c'est la durée totale de l'animation qui s'affiche au test de loop

---

## Contenu du projet de base

### Le répertoire **vendor**

**<span style="color:red">Ce répertoire doit être inclus avec dans la campagne en cours</span>**

- Il contient :

  - gsapcore/
    - gsap.js (greensock core)
    - TL2.js (appel à gsap & gestion de la timeline)
    - cssClass.js (class static pour gestion class css dans la timelline)
  - plugins/
    - [liste des plugins]
  - modules/
    - [liste des modules]
  - effects/

    - [liste des effets]

      Les effets sont des scripts customs ajoutant des functions (identiques aus tweens from / to) à la timeline
      (pour des exemples d'effets voir Animation Asset : https://wiew.webqam.fr/#/campaign/wq-ads-template-animation/detail)

---

### Le répertoire **types**

**(optionel / pour l'auto-completion des méthodes / propriétés de l'objet gsap)**

Inclure le répertoire types (contenant les définitions typescript)

---

### Le répertoire **/OPTIONAL**

### Ne pas l'inclure dans la production

#### il contient :

- le script Photoshop webqam.atn à faire glisser dans le panneau ACTIONS (s'il n'est pas déjà présent)
- les fontes Orange et Sosh

---

### Les tâches Gulp

les options de dossier / sous-dossier / format (version, subfolder, format) sont définies par défaut dans gulpfile.babel.js (line 65)

- gulp ou gulp watch : ciblera le dossier défini par défaut

- gulp watch --vers "Version X" --subfolder "Display X" --format "160x600" ciblera : ./version X/Display X/160x600
  on peut mettre n'importe lequel des paramètres :
  gulp watch --format "160x600"
  gulp watch --vers "XX" --format "160x600"
  gulp watch --subfolder "Display X" --format "160x600"
  etc...

* gulp build = compresse tous les assets (html, js, css,img) contenus dans le format courant défini dans gulpfile.babel.js ou gulp build --format "300x250" pour un format spécifique en param

* gulp buildall = compresse tous les formats contenus dans Version Initiale/Display ... (ou n'importe quel nom de subfolder)

* le contenu du dossier dst/img est vidé avant chaque recompression/compilation

---

### **Utilisation des scripts d'automatisation des exports**

3 scripts disponibles :

- Maj+F2 : enregistrement+rognage-droite-gauche
  recadre le format sur le visuel à gauche et à droite

- Maj+F3 : enregistrementImage_taille_banniere
  enregistre au format du document + ajoute du débord sur les images qui dépassent

- Maj+F4 : enregistrement_rognage_haut_bas

Pour chaque format il faut modifier le chemin d'export :

- Supprimer la ligne Exportation
- cliquer sur le rond &#9679; (enregistrer)
- exporter pour le web ctrl+Maj+Alt+S en choisissant le dossier de destination (src/img) du format
- cliquer sur le carré &#9647; (stop enregistrement)

ou modifier le répertoire de destination sur un endroit commun à tous les formats (par ex.: user/xxx/Documents/) et déplacer les exports dans le répertoire cible du format

Pour les exports de groupes de calques, sélectionner le groupe FERMÉ

Après toutes modifications, enregistrer le script ( > Menu panneau Actions / Enregistrer les actions...)

---

### **Utilisation des Plugins GSAP**

Liste des plugins externes requérant une inscription préalable :

- EaselPlugin : EaselPlugin.min.js
- CSSRulePlugin : CSSRulePlugin.min.js
- MotionPathPlugin : MotionPathPlugin.min.js
- PixiPlugin : PixiPlugin.min.js
- ScrollToPlugin : ScrollToPlugin.min.js
- TextPlugin : TextPlugin.min.js
- Draggable : Draggable.min.js
- DrawSVGPlugin : DrawSVGPlugin.min.js
- Physics2DPlugin : Physics2DPlugin.min.js
- PhysicsPropsPlugin : PhysicsPropsPlugin.min.js
- InertiaPlugin : InertiaPlugin.min.js
- MorphSVGPlugin : MorphSVGPlugin.min.js
- ScrollTrigger : ScrollTrigge.min.js
- Flip : Flip.js
- InertiaPlugin InertiaPlugin.js
- ScrambleTestPlugin : ScrambleTestPlugin.js
- ScrollTrigger : ScrollTrigger.js
- SplitText : SplitText.js

Utilisation :

`import MotionPathPlugin from '@plugins/MotionPathPlugin'`

`TL.registerPlugin(MotionPathPlugin)`

Liste des plugins externes sans inscription :

    - rough(), slow(), expoScale() : EasePack.min.js
    - CustomEase : CustomEase.min.js
        -> CustomBounce : CustomBounce.min.js (dépend de CustomEase)
        -> CustomWiggle : CustomWiggle.min.js (dépend de CustomEase)

Les plugins suivants sont inclus de base dans GSAP

    - attr
    - css
    - endArray
    - modifiers
    - snap

Les fichiers \*.min.js des plugins sont à mettre dans le répertoire /src/js/ du format

[ > Documentation plugins GSAP](https://greensock.com/docs/v3/Plugins/SplitTextPlugin)

---

## **Les Répertoires / fichiers de travail**

### **Le répertoire /src/js**

#### Contient les scripts JS de base et les plugins (optionnels)

Au final tous les fichiers js présents sont compilés dans un seul fichier JS

### **Fichiers js obligatoires :**

    - gsap.min.js (core gsap)
    - script-common.js (gestion de la timeline)
    - script.js (fichier de la timeline et des animations = fichier de travail)

**Aperçu rapide du fichier /src/js/script.js**

Ajout d'une timeline principale avec 3 boucles :

```javascript
TL.addTimeLine('main', 3);
```

```javascript
TL.addTimeLine('main', 0); // boucle infinie
```

Script d'animations :

```javascript
    TL.timelines.main.to(...).from(...)
```

Test de fin d'animation (<span style="color:red">**< 30 secondes, <= 3 boucles**</span>)
<br/>

```javascript
    /**
     * Timeline name
     * display time in console true/false
     * callback
     * callback param
     * boolean : false execute callback when nbLoop >= maxLoop / true execute every testEnd
     *
     */
    .call(TL.testEnd.bind(TL), ['main', false, null, null, true], TL.setCurTime('screen5', 4));
```

`false` : n'affiche PAS les infos de durée dans la console
<br/>
`true` : affiche les infos de durée dans la console

Si les ID `#mentions-link` et `#mentions-back` sont présents dans le fichier HTML, l'affichage des mentions légales est géré

---

### **Structure du fichier HTML**

**<span style="color:red">Mettre la taille de la balise META ad.size à la taille du format :</span>**
<br/>

```html
<meta name="ad.size" content="width=300,height=600" />
```

**Structure des éléments du body :**
<br/>
Commenter les lignes en référence aux mentions si pas de mentions
<br/>
(Le fichier final est 'minifié' : retrait des espaces/lignes vides et des commentaires)

```html
<body>
  <div id="wrapper">
    <div id="ecrans" class="ecran">
      <div id="ecran0" class="ecran ecran0">
        [...]
      </div>

      <div id="ecran1" class="ecran ecran1">
        [...]
      </div>

      <div id="ecran2" class="ecran ecran2">
        [...]
      </div>
    </div>

    <div id="mentions-link" class="mentions-link"></div>

    <div id="mentions">
      <img
        src="img/mentions-text.png"
        id="mentions-text"
        width="300"
        height="600"
      />
      <img src="img/back.png" id="mentions-back" alt="Flèche de retour" />
    </div>

    <a
      href="javascript:window.open(window.clickTag,' _blank');void(0);"
      id="clickTag"
    >
      <span id="CTA" class="cta">En profiter</span>
      <img src="data:image/png;base64,iVBORwAAA[...]AA5CYII=" />
    </a>
  </div>

  <div id="mask"></div>
  <script src="scripts.min.js"></script>
</body>
```

Les éléments étant positionnés en absolu, ne pas hésiter à changer l'ordre dans le DOM si nécessaire (éviter les z-index en css, sauf cas particuliers de 'swaping' d'éléments)

---

### **Les SCSS**

Il y a 2 fichiers SCSS à éditer :

- css/sass/base/\_var.scss (contient les variables sass notamment la couleur et épaisseur de la bordure ainsi que <span style="color:red">**la taille du format à modifier**</span>)
- css/sass/content.scss (contient les styles à ajouter / personnaliser)

**/src/sass/base/\_var.scss**

```scss
$wrapper_border: #000000;
$wrapper_mask: #000000;
$borderWidth: 1px;

$width: 300px;
$height: 600px;
```

**/src/sass/content.scss**
C'est dans ce fichier qu'on viendra ajouter les styles propres au format

```scss
@import 'base/vars';
@import 'base/reset';
@import 'base/base';
@import 'helpers/mixins';
@import 'helpers/utils';

// Insérer vos propres styles ici.
.ecran {
  .footer {
    position: absolute;
    width: 100%;
    height: 203px;
    bottom: 0;
    left: 0;
    background: $color2;
    transform-origin: bottom center;
  }
}

.mentions-link {
  width: 83px;
  height: 11px;
  left: 43px;
  bottom: 8px;
  border: 1px solid red;
}

.cta {
  bottom: 28px;
  left: 50%;
  background: #de2554;
  transform: translateX(-50%);
  width: 261px;
  height: 49px;
  line-height: 49px;
  text-align: center;
  font-size: 23px;
  color: #fff;
  border-radius: 4px;
  background-color: $color2;

  &:hover {
    color: $color2;
    background: #000000;
  }
}

.cta.invert {
  color: $color2;
  background-color: $color1;
  &:hover {
    color: $color1;
    background-color: #000000;
  }
}
```

Les styles par défaut sont définis dans **/src/sass/base/\_base.scss** :

- application de la taille des écrans définie dans \_var.scss
- positionnement aboslu des images / cta / mentions, etc...

---

### **Exemples de codes GSAP**

**Transition en Y** et **réduction W/H** par rapport à la **position absolue** et **taille réelle** :
Dans cet exemple si la taille du logo a été définie à scale(0.4) en css, le logo grossira pendant l'animation. (un 'scale' négatif ne réduira pas le logo mais fera un 'flip' en XY) :

```javascript
    .to('#logo', { duration: 0.3, y: -156, scale: 0.59 }, TL.setCurTime('screen2', 0))
```

**Transitions relatives**. Dans cet exemple le logo se réduira pendant l'animation quelles que soient les transformations d'échelle appliquées précédemment. La transition en Y sera différente de l'exemple précédent seulement si une transition en Y a été déjà appliquée :

```javascript
    .to('#logo', { duration: 0.3, y: '-=156', scale: '-=0.59' }, TL.setCurTime('screen2', 0))
```

<br/>

**fromTo()**. La durée (duration) d'animation se met dans le deuxième bloc de paramètres

```javascript
    .fromTo(
        '#vente',
        { scale: 2.22, x: -200, y: 35, transformOrigin: '50% 0%' },
        { duration: 0.9, x: -20, transformOrigin: '50% 0%', ease: 'none' },
        TL.setCurTime('screen1', 0)
        )
```

**keyframes** :

```javascript
    .to(
        '#logo',
        {
            keyframes: [ { duration: 0.2, x: '-=50' },
            { duration: 0.5, y: -100 },
            { duration: 0.3, scale: 0.59 } ]
        },
        TL.setCurTime('screen2', 0)
        )
```

Le mouvement sera décomposé en 3 étapes successives : X - Y - scale

**Repeat**

```javascript
    .to(
        '#logo',
        {
            keyframes: [ { duration: 0.2, x: '-=50' },
            { duration: 0.5, y: -100 },
            { duration: 0.3, scale: 0.59 } ],
            repeat: 3
        },
        TL.setCurTime('screen2', 0)
        )
```

L'animation sera répétée 4 fois (1 + 3)

**Repeat / YOYO**

```javascript
    .to(
        '#logo',
        {
            keyframes: [ { duration: 0.2, x: '-=50' },
            { duration: 0.5, y: -100 },
            { duration: 0.3, scale: 0.59 } ],
            repeat: 3, yoyo: true
        },
        TL.setCurTime('screen2', 0)
        )
```

L'animation sera répétée 4 fois (1 + 3) donc le logo reviendra à sa position de départ. Les animations aller et retour sont comprises dans le YOYO (2 allers - 2 retours dans ce cas).

### Gestion de la durée / des boucles

```javascript
  .call(TL.testEnd.bind(TL), ['main', true, null, null, true], TL.setCurTime('screen5', 4));
```

🠉 À mettre en toute fin d'animation. Arrête toutes les timelines enregistrées (avec TL.addTimeline), teste le nombre de boucles et redémarre la boucle principale si le nombre de boucles max. (définie avec TL.addTimeLine) n'est pas atteint.

```javascript
.call(TL.testLoop.bind(TL), ["main", 2, true], TL.setCurTime("screen4", 3));
```

🠉 Boucle custom. Permet de faire boucler une animation avant la fin. Le nombre de boucles défini avec TL.addTimeLine n'est plus utilisé. Le temps restant entre la boucle custom et la fin de l'animation est comptabilisé dans les logs de la console.

```javascript
.call(TL.testLoopEnd.bind(TL), ['main', 2, true], TL.setCurTime('screen4', 2))
```

🠉 2 boucles de la durée totale de l'animation et arrêt à ce test
<br/><br/>

#### Les appels de functions / timeline enfants :

```javascript
.add()
```

🠉 Cette fonction permet dajouter une nouvelle timeline (enfant) indépendante de la timeline principale (main)
Les paramètres sont passés en arguments (comme dans une fonction standard)

```javascript
    /**
    *
    * @param {*} n : timeline name
    * @param {*} id : element id
    */
    function rotateNeel(n, id) {
        if (!TL.isTimeLinePresent(n)) TL.addTimeLine(n, 1);
        TL.timeLines[n].to(id, 3, { rotation: 360, transformOrigin: '50%x 63px' }, 0);
        return TL.timeLines[n];
    }
    [...]
    .add(rotateNeel('neel', '#aiguille'), TL.setCurTime('screen1', 0))
```

```javascript
.call()
```

🠉 Cette fonction permet un appel externe
Les paramètres sont passés dans un tableau

```javascript
    /**
     *
     * @param {*} tl timeline name
     * @param {*} tm start time
     */
    function startWalk(tl, tm) {
        TL.timeLines[tl].play(tm, true);
    }
    [...]
    .call(startWalk, [ 'walk1', 0.3 ], this, TL.setCurTime('screen1', 0.2))
```

**Exemple du test du nombre de boucles**

```javascript
    [...]
    .to('#josh,#foot', 2.6, { x: 530, ease: 'none' }, TL.setCurTime('screen3', 9))
    .from('#ecran3', 2.2, { width: '0px', ease: 'none' }, TL.setCurTime('screen3', 0.2))
    .to('#ecran2', 2.2, { width: '0px', ease: 'none' }, TL.setCurTime('screen3', 0.2)
    // boucle 2 fois avant de continuer
    .call(TL.testLoop.bind(TL), ['main', 2, true],  TL.setCurTime('screen3', 5))
    /**
    *  ecran 4
    */
    .from('#ecran4', 0.4, { opacity: 0 }, TL.setCurTime('screen4', 14))
    .to('#ecran3', 0.3, { opacity: 0 }, TL.setCurTime('screen4', 0))
    // test fin --------------------------------------------------------------
    .call(TL.testEnd.bind(TL), ['main', true, null, null, true], TL.setCurTime('screen4', 2));
```

### PLAY / PAUSE / JUMP

```javascript
    .call(TL.playTimeLine.bind(TL), ['test'], TL.setCurTime('screen1', 1))
```

🠉 Joue une timeline

```javascript
    .call(TL.pauseTimeLine.bind(TL), ['main'], TL.setCurTime('screen3', 1)
```

🠉 Pause une timeline

```javascript
    .call(TL.jumpTo.bind(TL), ['main', 'screen3', 0], TL.setCurTime('screen0', 1))
```

🠉 Saute au temps spécifié (0 seconde du repère screen3) sur une timeline

---

## **Easings**

les fonctions disponibles dans GSAP (sans ajout de plugin) :

- none
- power1
- power2
- power3
- power4
- back (params)
- elastic (params)
- bounce
- steps (params) 'SteppedEase'
- circ
- expo
- sine

[ > Documentation Eases](https://greensock.com/docs/v3/Eases)

```javascript
    .from('#pup1', { duration: 0.6, x: 300, ease: 'back.in(0.8)' }, TL.setCurTime('screen1', 0.3))
    .from('#pup1', { duration: 0.6, x: 300, ease: 'back.out(0.8)' }, TL.setCurTime('screen1', 0.3))
    .from('#pup1', { duration: 0.6, x: 300, ease: 'back.inOut(0.8)' }, TL.setCurTime('screen1', 0.3))
```

`back.in(o)` où o = 1 correspond +/- à 1/10eme de la trajectoire (si on a affaire à une transition sur les axes)

### CustomEase

CustomBounce (CustomBounce.min.js) et CustomWiggle (CustomWiggle.min.js) dépendent de CustomEase

[ > Documentation CustomEase et Ease Visualizer](https://greensock.com/docs/v3/Eases/CustomEase)

```javascript
    // définition du CustomEase avec Ease Visualizer
    var bouncing1 =
    'M0,0,C0,0,0.049,0.675,0.085,1.115,0.122,1.498,0.156,1.34,0.16,1.322,0.189,1.193,0.203,1.111,0.23,0.978,0.262,0.818,0.303,0.876,0.307,0.882,0.335,0.925,0.349,0.965,0.38,1.006,0.43,1.088,0.484,1.022,0.53,0.997,0.58,0.964,0.667,1.002,0.725,1.004,0.829,1.008,1,1,1,1';
    CustomEase.create('xbounce', bouncing1);

    // application du CustomEase
    [...]
    .from('#pup1', { duration: 0.6, y: 500, ease:"xbounce" }, TL.setCurTime('screen0', 0))
```

<br/>

**Les autres Eases optionnelles non-incluses de base :**

Pour les fonctions suivantes inclure le fichier EasePack.min.js

- ExpoScaleEase [docs](https://greensock.com/docs/v3/Eases/ExpoScaleEase)
- RoughEase [docs](https://greensock.com/docs/v3/Eases/RoughEase)
- SlowMo [docs](https://greensock.com/docs/v3/Eases/SlowMo)

**Visualisation des Eases**

Permet de visualiser un Easing

```svg
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="600" viewBox="0 0 300 600">
        <path id="ease" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px"/>
    </svg>
```

```javascript
//create a CustomEase with an ID of "hop"
CustomEase.create(
  'hop',
  'M0,0 C0,0 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0'
);
//draw the ease visually in the SVG  that has an ID of "ease" at 300px by 600px:
CustomEase.getSVGData('hop', { width: 300, height: 600, path: '#ease' });
```

---

## **SVG**

L'animation des styles (couleurs du fond/contour, épaisseur contour) est possible. (même sans contour ou couleur de fond définie dans le SVG)

```javascript
    .to('#vente path', { duration: 0.08, fill: 'none', stroke: '#ffffff', strokeWidth: '1px', repeat: 5, yoyo: true }, TL.setCurTime('screen3', 1))
```

NB : si les propriétés de couleur sont comprises dans les tweens, la propriétés strokeWidth n'est pas animée (simple changement d'état à la fin de l'animation). le changement d'épaisseur du contour s'effectuera à la fin des 2 seccondes

```javascript
    .to('#vente path', { duration: 2, fill: '#ff0000',stroke: '#000000', strokeWidth: '2px' }, TL.setCurTime('screen3', 2))
```

---

## **Utility methods**

Récupérer tous les `<path>` d'un svg (id:#formes) particulier :

```javascript
var targets = TL.GSAP.utils.toArray('#formes path');
[...]
.fromTo(
      targets,
      { y: -200, x: -300, rotation: '-=300', transformOrigin: '50% 50%', duration: 2, stagger: 0.05 },
      { y: 100, x: 300, rotation: '+=300', transformOrigin: '50% 50%', duration: 2, stagger: 0.05 },
      TL.setCurTime('screen1', 1.6)
    )
```
