// ==UserScript==
// @name         skriv_ikke_ut_lenkeadresser
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  lenkeadresser vises ikke ved utskrift av side
// @author       sven.haao@usn.no
// @match        https://*.instructure.com/courses/*/pages/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

 !function(){

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '@media print {a:link:after, a:visited:after {content:""; }}';
document.getElementsByTagName('head')[0].appendChild(style);

}();

})();
