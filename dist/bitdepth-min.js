/*
 bitdepth
 Change the bit depth of audio samples to and from 8, 16, 24, 32, 32 IEEE & 64-bit.
 Copyright (c) 2017 Rafael da Silva Rocha. MIT License.
 https://github.com/rochars/bitdepth

*/
(function(f){function c(a){if(d[a])return d[a].a;var b=d[a]={m:a,f:!1,a:{}};f[a].call(b.a,b,b.a,c);b.f=!0;return b.a}var d={};c.l=f;c.h=d;c.b=function(a,b){c.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:b})};c.i=function(a){var b=a&&a.g?function(){return a["default"]}:function(){return a};c.b(b,b);return b};c.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};c.j="";return c(c.o=0)})([function(){var f={8:256,16:65536,24:16777216,32:4294967296};window.toBitDepth=
function(c,d,a){if(d!=a){var b="8 16 24 32 32f 64".split(" ");if(-1==b.indexOf(d)||-1==b.indexOf(a))throw Error("Invalid bit depth.");b=c.length;for(var h=0;h<b;h++){var e=c[h];"8"==d&&(e-=128);if("32f"==a||"64"==a){var g=parseInt(f[d]/2,10);"32f"!=d&&"64"!=d&&(e=0<e?e/(g-1):e/g)}else{g=parseInt(f[d]/2,10);var k=parseInt(f[a]/2,10);e="32f"==d||"64"==d?0<e?e*(k-1):e*k:0<e?parseInt(e/(g-1)*k-1,10):parseInt(e/g*k,10);"8"==a&&(e+=128)}c[h]=e}}};window.BitDepthMaxValues=f}]);
