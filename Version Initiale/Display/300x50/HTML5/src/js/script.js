'use strict';
// window.Bezier = require('./vendor/bezier').Bezier; // not working in ie11
// window.Warp = require('./vendor/warp.js'); // not working in ie11
/*
 * DECLARATION DES PLUGINS
 *
 * EaselPlugin :          EaselPlugin.min.js
 * CSSRulePlugin :        CSSRulePlugin.min.js
 * MotionPathPlugin :     MotionPathPlugin.min.js
 * PixiPlugin :           PixiPlugin.min.js
 * ScrollToPlugin :       ScrollToPlugin.min.js
 * TextPlugin :           TextPlugin.min.js
 * Draggable :            Draggable.min.js
 * DrawSVGPlugin :        DrawSVGPlugin.min.js
 * Physics2DPlugin :      Physics2DPlugin.min.js
 * PhysicsPropsPlugin :   PhysicsPropsPlugin.min.js
 * InertiaPlugin :        InertiaPlugin.min.js
 * MorphSVGPlugin :       MorphSVGPlugin.min.js
 * ScrollTrigger :        ScrollTrigge.min.js
 * Flip :                 Flip.js
 * InertiaPlugin          InertiaPlugin.js
 * ScrambleTestPlugin :   ScrambleTestPlugin.js
 * ScrollTrigger :        ScrollTrigger.js
 * SplitText :            SplitText.js
 *
 *
 * CustomEase : CustomEase.min.js
 *    -> CustomBounce : CustomBounce.min.js
 *    -> CustomWiggle : CustomWiggle.min.js
 *
 * Extra Eases : EasePack.js
 *    --> RoughEase : import { RoughEase } from '@plugins/EasePack';
 *    --> ExpoScaleEase : import { ExpoScaleEase } from "@plugins/EasePack";
 *    --> import { SlowMo } from "@plugins/EasePack";
 *
 * TL.registerPlugin(RoughEase); // etc...
 *
 * https://greensock.com/docs/v3/Plugins/SplitTextPlugin
 *
 **/
// import core gsap + TL (REQUIRED) ------------------------
// gsap -> TL.GSAP
import TL2 from '@core/TL2';
const TL = new TL2();

// plugin BLUR
// require('@modules/blurplugingsap.js')(TL);

// polyfill path2D
// require('@polyfills/path2dpolyfills.js');

// EFFECTS -------------------------------------------------
// import rainSVG from '@effects/rainSVG';
// const rainSVG1 = new rainSVG(TL);

// ---------------------------------------------------------

// OPTIONAL ------------------------------------------------
// pour l'ajout de la compatibilité ie11 classlist sur les élements SVG, décommenter la ligne d'import dans vendor/gsapcore/cssClass.js)
// import method CSS.addClass & CSS.removeClass
// ajoute ou supprime une class css sur un élément
// import CSS from '@core/cssClass';

// ---------------------------------------------------------

// IMPORTER LES PLUGINS / MODULES ICI: ---------------------
import DrawSVGPlugin from '@plugins/DrawSVGPlugin';
// import Bezier from '@modules/Bezier';

// ENREGISTRER LES PLUGINS ICI : ---------------------------
TL.registerPlugin(DrawSVGPlugin);

// APPELER ICI les Class custom
// import myClass from './customclass/myClass';
// const myclass = new myClass();

// gsap ----------------------------------------------------
// gsap s'appelle avec TL.GSAP

// Méthodes disponibles de l'objet TL :

// .call(CSS.addClass, ['#CTA', 'invert'], TL.setCurTime('screen1', 1)) : ajoute une classe css sur un élément
// .call(CSS.removeClass, ['#CTA', 'invert'], TL.setCurTime('screen1', 1)) : supprime une classe css sur un élément

// .call(TL.playTimeLine.bind(TL), ['test'], TL.setCurTime('screen1', 1)) : joue une timeline
// .call(TL.pauseTimeLine.bind(TL), ['main'], TL.setCurTime('screen3', 1)) : pause une timeline
// .call(TL.jumpTo.bind(TL), ['main', 'screen3', 0], TL.setCurTime('screen0', 1)) : saute à l'intérieur d'une timeline sur un index temporel d'un écran spécifique

// .call(TL.testLoop.bind(TL), ['main', 2, true], TL.setCurTime('screen4', 2)) : x boucles jusqu'à ce test et continue jusqu'au dernier écran
// .call(TL.testLoopEnd.bind(TL), ['main', 2, true], TL.setCurTime('screen4', 2)) :  : x boucles de la durée totale de l'animation et arrêt à ce test
// .call(TL.testEnd.bind(TL), ['main', true, null, null], TL.setCurTime('screen5', 4)); x boucles de la totalité de l'animation

// CustomEase.create('hop', 'M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0');

document.addEventListener('loaded', (e) => {
  TL.addTimeLine('mask', 1, false);
  TL.addTimeLine('main', 3, false);
  TL.setMaskDuration(0.3);

  TL.timelines.mask.to('#maskintro', { duration: TL.maskDuration, autoAlpha: 0 }, TL.setCurTime('mask', 0)); // fondu du masque
  TL.timelines.main
    /**
     * ecran 1
     */
    .from('#logo', { duration: 0.8, opacity: 0, y: 80, ease: 'power4.out' }, TL.setCurTime('screen1', 0))
    // .from('#CTA', { duration: 1, blur: 20 }, TL.setCurTime('screen1', 1))
    /**
     * ecran 2
     */
    .from('#ecran2', { duration: 0.3, opacity: 0 }, TL.setCurTime('screen2', 1.5))
    .from('#border', { duration: 1, drawSVG: 0, ease: 'power3.out' }, TL.setCurTime('screen2', 0))
    .from('#texte path', { duration: 0.1, scale: 0, transformOrigin: '0% 50%', ease: 'power2.inOut', stagger: 0.05 }, TL.setCurTime('screen2', 0.5))
    .to('#stars path', { duration: 2.5, rotate: 360, ease: 'none', transformOrigin: '50% 50%' }, TL.setCurTime('screen2', 0))
    .from('#stars', { duration: 1.5, scale: 0, ease: 'power4.out', svgOrigin: '150px 26px' }, TL.setCurTime('screen2', 0.6))
    .to('#border', { duration: 0.1, fill: '#ff7900', repeat: 6, yoyo: true, ease: 'none' }, TL.setCurTime('screen2', 1))
    /**
     * ecran 3
     */
    .from('#ecran3', { duration: 0.3, opacity: 0 }, TL.setCurTime('screen3', 4))
    .to('#stars path', { duration: 0.4, scale: 3, opacity: 0, svgOrigin: '150px 26px', ease: 'none' }, TL.setCurTime('screen3', 0))
    .to('#button', { duration: 0.4, x: -125, y: -18, scale: 0.523, transformOrigin: '50% 50%', ease: 'power3.out' }, TL.setCurTime('screen3', 0))
    .from('#date', { duration: 0.4, opacity: 0, x: 50, ease: 'power3.out' }, TL.setCurTime('screen3', 0.2))
    .from('.claims', { duration: 0.8, opacity: 0, x: 50, ease: 'power3.out', stagger: 0.2 }, TL.setCurTime('screen3', 0.4))
    .from('#iphone', { duration: 2, opacity: 0, y: 50, ease: 'power4.out' }, TL.setCurTime('screen3', 0.6))
    .from('#CTA', { duration: 0.6, opacity: 0, y: -20, ease: 'power2.out' }, TL.setCurTime('screen3', 1.8))
    /**
     * ecran 4
     */
    .from('#ecran4', { duration: 0.3, opacity: 0 }, TL.setCurTime('screen4', 6.5))
    .to('#iphone', { duration: 0.6, scale: 0.625, x: -21, y: 5, ease: 'power4.out' }, TL.setCurTime('screen4', 0))
    .from('.argus', { duration: 0.6, opacity: 0, y: 20, ease: 'power3.inOut', stagger: 0.15 }, TL.setCurTime('screen4', 0.2))
    // .call(TL.testLoopEnd.bind(TL), ['main', 2, true], TL.setCurTime('screen4', 2))
    /**
     * Timeline name
     * display time in console true/false
     * callback
     * callback param
     * boolean : false execute callback when nbLoop >= maxLoop / true execute every testEnd
     *
     */
    .call(TL.testEnd.bind(TL), ['main', false, null, null, true], TL.setCurTime('screen4', 3.3));
});
