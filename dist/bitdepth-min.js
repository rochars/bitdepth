/*
 bitdepth
 Change the bit depth of audio samples to and from 8, 16, 24, 32, 32 IEEE & 64-bit.
 Copyright (c) 2017 Rafael da Silva Rocha. MIT License.
 https://github.com/rochars/bitdepth

*/
(function(f){function a(b){if(e[b])return e[b].a;var d=e[b]={m:b,f:!1,a:{}};f[b].call(d.a,d,d.a,a);d.f=!0;return d.a}var e={};a.l=f;a.h=e;a.b=function(b,d){a.c(b)||Object.defineProperty(b,"a",{configurable:!1,enumerable:!0,get:d})};a.i=function(b){var d=b&&b.g?function(){return b["default"]}:function(){return b};a.b(d,d);return d};a.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};a.j="";return a(a.o=0)})([function(){var f={2:4,4:16,8:256,16:65536,24:16777216,32:4294967296,40:1099511627776,
48:281474976710656};window.toBitDepth=function(a,e,b){if(e!=b){var d="8 16 24 32 32f 64".split(" ");if(-1==d.indexOf(e)||-1==d.indexOf(b))throw Error("Invalid bit depth.");d=a.length;for(var g=parseInt(f[parseInt(e,10)]/2,10),h=parseInt(f[parseInt(b,10)]/2,10),c=0;c<d;c++)"8"==e&&(a[c]-=128),"32f"==b||"64"==b?"32f"!=e&&"64"!=e&&(a[c]=0<a[c]?a[c]/(g-1):a[c]/g):(a[c]="32f"==e||"64"==e?0<a[c]?a[c]*(h-1):a[c]*h:0<a[c]?parseInt(a[c]/(g-1)*h-1,10):parseInt(a[c]/g*h,10),"8"==b&&(a[c]+=128))}};window.BitDepthMaxValues=
f}]);
