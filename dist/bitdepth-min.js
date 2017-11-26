/*
 bitdepth
 Change the bit depth of audio samples to and from 8, 16, 24, 32, 32 IEEE & 64-bit.
 Copyright (c) 2017 Rafael da Silva Rocha. MIT License.
 https://github.com/rochars/bitdepth

*/
(function(f){function b(a){if(e[a])return e[a].a;var d=e[a]={m:a,f:!1,a:{}};f[a].call(d.a,d,d.a,b);d.f=!0;return d.a}var e={};b.l=f;b.h=e;b.b=function(a,d){b.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:d})};b.i=function(a){var d=a&&a.g?function(){return a["default"]}:function(){return a};b.b(d,d);return d};b.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};b.j="";return b(b.o=0)})([function(){var f={8:256,16:65536,24:16777216,32:4294967296};window.toBitDepth=
function(b,e,a){if(e!=a){var d="8 16 24 32 32f 64".split(" ");if(-1==d.indexOf(e)||-1==d.indexOf(a))throw Error("Invalid bit depth.");d=b.length;for(var g=0;g<d;g++){var c=b[g];"8"==e&&(c-=128);b[g]=c;if("32f"==a||"64"==a){c=b[g];var h=parseInt(f[e]/2,10);"32f"!=e&&"64"!=e&&(c=0<c?c/(h-1):c/h)}else{c=b[g];h=parseInt(f[e]/2,10);var k=parseInt(f[a]/2,10);c="32f"==e||"64"==e?0<c?c*(k-1):c*k:0<c?parseInt(c/(h-1)*k-1,10):parseInt(c/h*k,10);"8"==a&&(c+=128)}b[g]=c}}};window.BitDepthMaxValues=f}]);
