/*
 bitdepth
 Change the bit depth of samples to and from 8, 16, 24, 32 & 64-bit.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/bitdepth

*/
var k="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,a){b!=Array.prototype&&b!=Object.prototype&&(b[c]=a.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(b,c){if(c){var a=m;b=b.split(".");for(var d=0;d<b.length-1;d++){var f=b[d];f in a||(a[f]={});a=a[f]}b=b[b.length-1];d=a[b];c=c(d);c!=d&&null!=c&&k(a,b,{configurable:!0,writable:!0,value:c})}}
n("Object.is",function(b){return b?b:function(c,a){return c===a?0!==c||1/c===1/a:c!==c&&a!==a}});n("Array.prototype.includes",function(b){return b?b:function(c,a){var d=this;d instanceof String&&(d=String(d));var b=d.length;for(a=a||0;a<b;a++)if(d[a]==c||Object.is(d[a],c))return!0;return!1}});
(function(b){function c(d){if(a[d])return a[d].a;var f=a[d]={m:d,f:!1,a:{}};b[d].call(f.a,f,f.a,c);f.f=!0;return f.a}var a={};c.l=b;c.h=a;c.b=function(a,b){c.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:b})};c.i=function(a){var b=a&&a.g?function(){return a["default"]}:function(){return a};c.b(b,b);return b};c.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};c.j="";return c(c.o=0)})([function(){var b={8:256,16:65536,24:16777216,32:4294967296};window.toBitDepth=
function(c,a,d){var f="8 16 24 32 32f 64".split(" ");if(-1==f.indexOf(a)||-1==f.indexOf(d))throw Error("Invalid bit depth.");f=c.length;for(var h=0;h<f;h++){var e=c[h];"8"==a&&(e-=128);if(["32f","64"].includes(d)){var g=parseInt(b[a]/2,10);"32f"!=a&&"64"!=a&&(e=0<e?e/(g-1):e/g)}else{g=e;e=parseInt(b[d]/2,10);if("32f"==a||"64"==a)e=0<g?g*(e-1):g*e;else{var l=parseInt(b[a]/2,10);e=g=0<g?parseInt(g/(l-1)*e-1,10):parseInt(g/l*e,10)}e=g=e;"8"==d&&(e+=128)}c[h]=e}};window.BitDepthMaxValues=b}]);
