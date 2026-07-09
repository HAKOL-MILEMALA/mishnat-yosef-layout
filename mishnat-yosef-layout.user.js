// ==UserScript==
// @name         משנת יוסף - תיקון תצוגת פריטים
// @namespace    https://github.com/HAKOL-MILEMALA/
// @version      1.0
// @description  תיקון עיצוב לתצוגת הפריטים באתר משנת יוסף - מציג טקסט מלא ומאזן רווחים
// @author       Anonymous
// @match        https://*.mishnatyosef.org/*
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/HAKOL-MILEMALA/mishnat-yosef-tweaks/main/mishnat-yosef-layout.user.js
// @downloadURL  https://raw.githubusercontent.com/HAKOL-MILEMALA/mishnat-yosef-tweaks/main/mishnat-yosef-layout.user.js
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        .item div.flex-1 > div.flex-col:first-child {
            flex-grow: 1 !important;
        }
        .item p.truncate {
            max-width: none !important;
            width: auto !important;
            white-space: normal !important;
        }
    `;

    GM_addStyle(css);
})();
