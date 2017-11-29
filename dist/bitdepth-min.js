/*
 bitdepth
 Change the bit depth of samples to and from 8, 16, 24, 32 & 64-bit..
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/bitdepth

*/
(function(g){function d(a){if(e[a])return e[a].a;var c=e[a]={m:a,f:!1,a:{}};g[a].call(c.a,c,c.a,d);c.f=!0;return c.a}var e={};d.l=g;d.h=e;d.b=function(a,c){d.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:c})};d.i=function(a){var c=a&&a.g?function(){return a["default"]}:function(){return a};d.b(c,c);return c};d.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};d.j="";return d(d.o=0)})([function(){var g={8:256,16:65536,24:16777216,32:4294967296};window.toBitDepth=
function(d,e,a){var c="8 16 24 32 32f 64".split(" ");if(-1==c.indexOf(e)||-1==c.indexOf(a))throw Error("Invalid bit depth.");c=d.length;for(var h=0;h<c;h++){var b=d[h];"8"==e&&(b-=128);if("32f"==a||"64"==a){var f=parseInt(g[e]/2,10);"32f"!=e&&"64"!=e&&(b=0<b?b/(f-1):b/f)}else{f=b;b=parseInt(g[a]/2,10);if("32f"==e||"64"==e)b=0<f?f*(b-1):f*b;else{var k=parseInt(g[e]/2,10);b=f=0<f?parseInt(f/(k-1)*b-1,10):parseInt(f/k*b,10)}b=f=b;"8"==a&&(b+=128)}d[h]=b}};window.BitDepthMaxValues=g}]);
