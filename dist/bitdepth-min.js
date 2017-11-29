/*
 bitdepth
 Change the bit depth of samples to and from 8, 16, 24, 32 & 64-bit.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/bitdepth

*/
var l="function"==typeof Object.defineProperties?Object.defineProperty:function(d,c,e){d!=Array.prototype&&d!=Object.prototype&&(d[c]=e.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(d,c){if(c){var e=m;d=d.split(".");for(var a=0;a<d.length-1;a++){var b=d[a];b in e||(e[b]={});e=e[b]}d=d[d.length-1];a=e[d];c=c(a);c!=a&&null!=c&&l(e,d,{configurable:!0,writable:!0,value:c})}}
n("Object.is",function(d){return d?d:function(c,e){return c===e?0!==c||1/c===1/e:c!==c&&e!==e}});n("Array.prototype.includes",function(d){return d?d:function(c,e){var a=this;a instanceof String&&(a=String(a));var b=a.length;for(e=e||0;e<b;e++)if(a[e]==c||Object.is(a[e],c))return!0;return!1}});
(function(d){function c(a){if(e[a])return e[a].a;var b=e[a]={v:a,h:!1,a:{}};d[a].call(b.a,b,b.a,c);b.h=!0;return b.a}var e={};c.u=d;c.j=e;c.f=function(a,b){c.g(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:b})};c.l=function(a){var b=a&&a.i?function(){return a["default"]}:function(){return a};c.f(b,b);return b};c.g=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};c.s="";return c(c.B=0)})([function(){var d=new Float32Array(1),c={8:256,16:65536,24:16777216,32:4294967296,
"32f":1,64:1},e={A:function(a,b){return a=0<a?parseInt(a/(b.c-1)*b.b-1,10):parseInt(a/b.c*b.b,10)},o:function(a,b){return a=0<a?a*(b.b-1):a*b.b},w:function(a,b){return a=0<a?a/(b.c-1):a/b.c},m:function(a,b){"64"==b.C&&"32f"==b.target&&(d[0]=a,a=d[0]);return a}};window.toBitDepth=function(a,b,d){var g="8 16 24 32 32f 64".split(" ");if(-1==g.indexOf(b)||-1==g.indexOf(d))throw Error("Invalid bit depth.");g=["32f","64"].includes(b)?"float":"int";var k=["32f","64"].includes(d)?"Float":"Int";g=e[g+"To"+
k];k=a.length;for(var f=0;f<k;f++){var h=a[f];"8"==b&&(h-=128);a[f]=h;a[f]=g(a[f],{old:c[b]/2,"new":c[d]/2,original:b,target:d});h=a[f];"8"==d&&(h+=128);a[f]=h}};window.BitDepthMaxValues=c}]);
