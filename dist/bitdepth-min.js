/*
 bitdepth
 Change the resolution of samples to and from 8, 11, 12, 16, 20, 24, 32, 48 & 64-bit.
 Copyright (c) 2017-2018 Rafael da Silva Rocha.
 https://github.com/rochars/bitdepth

*/
var k="function"==typeof Object.defineProperties?Object.defineProperty:function(c,d,a){c!=Array.prototype&&c!=Object.prototype&&(c[d]=a.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function m(c,d){if(d){var a=l;c=c.split(".");for(var b=0;b<c.length-1;b++){var e=c[b];e in a||(a[e]={});a=a[e]}c=c[c.length-1];b=a[c];d=d(b);d!=b&&null!=d&&k(a,c,{configurable:!0,writable:!0,value:d})}}
m("Object.is",function(c){return c?c:function(d,a){return d===a?0!==d||1/d===1/a:d!==d&&a!==a}});m("Array.prototype.includes",function(c){return c?c:function(d,a){var b=this;b instanceof String&&(b=String(b));var c=b.length;for(a=a||0;a<c;a++)if(b[a]==d||Object.is(b[a],d))return!0;return!1}});
(function(c){function d(b){if(a[b])return a[b].a;var e=a[b]={m:b,f:!1,a:{}};c[b].call(e.a,e,e.a,d);e.f=!0;return e.a}var a={};d.l=c;d.h=a;d.b=function(a,c){d.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:c})};d.i=function(a){var b=a&&a.g?function(){return a["default"]}:function(){return a};d.b(b,b);return b};d.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};d.j="";return d(d.o=0)})([function(){var c=new Float32Array(1),d={intToInt:function(a,b){return a=0<
a?parseInt(a/b.oldPositive*b.newPositive,10):parseInt(a/b.oldNegative*b.newNegative,10)},floatToInt:function(a,b){return 0<a?parseInt(a*b.newPositive,10):parseInt(a*b.newNegative,10)},intToFloat:function(a,b){return 0<a?a/b.oldPositive:a/b.oldNegative},floatToFloat:function(a,b){"64"==b.original&&"32f"==b.target&&(c[0]=a,a=c[0]);return a}};window.bitDepth=window.bitDepth||{};window.bitDepth.toBitDepth=function(a,b,c){for(var e=[],g=8;49>g;g++)e.push(g.toString());e.push("32f");e.push("64");if(-1==
e.indexOf(b)||-1==e.indexOf(c))throw Error("Invalid bit depth.");e=["32f","64"].includes(b)?"float":"int";g=["32f","64"].includes(c)?"Float":"Int";e=d[e+"To"+g];g=a.length;for(var f=0;f<g;f++){var h=a[f];"8"==b&&(h-=128);a[f]=h;a[f]=e(a[f],{oldNegative:parseInt(Math.pow(2,parseInt(b,10))/2,10),newNegative:parseInt(Math.pow(2,parseInt(c,10))/2,10),oldPositive:parseInt(Math.pow(2,parseInt(b,10))/2-1,10),newPositive:parseInt(Math.pow(2,parseInt(c,10))/2-1,10),original:b,target:c});h=a[f];"8"==c&&(h+=
128);a[f]=h}}}]);
