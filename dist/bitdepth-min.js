var g="function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,b){c!=Array.prototype&&c!=Object.prototype&&(c[a]=b.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function m(c,a){if(a){var b=l;c=c.split(".");for(var d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&g(b,c,{configurable:!0,writable:!0,value:a})}}
m("Object.is",function(c){return c?c:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}});m("Array.prototype.includes",function(c){return c?c:function(a,b){var d=this;d instanceof String&&(d=String(d));var c=d.length;for(b=b||0;b<c;b++)if(d[b]==a||Object.is(d[b],a))return!0;return!1}});
(function(c){function a(d){if(b[d])return b[d].a;var e=b[d]={v:d,j:!1,a:{}};c[d].call(e.a,e,e.a,a);e.j=!0;return e.a}var b={};a.u=c;a.m=b;a.h=function(d,b){a.i(d)||Object.defineProperty(d,"a",{configurable:!1,enumerable:!0,get:b})};a.o=function(d){var b=d&&d.l?function(){return d["default"]}:function(){return d};a.h(b,b);return b};a.i=function(b){return Object.prototype.hasOwnProperty.call(b,"a")};a.s="";return a(a.w=0)})([function(c){function a(b,a,d,c){h(a);h(d);c=c||b;var f=p(a,d),n={g:Math.pow(2,
parseInt(a,10))/2,c:Math.pow(2,parseInt(d,10))/2,f:Math.pow(2,parseInt(a,10))/2-1,b:Math.pow(2,parseInt(d,10))/2-1},e=b.length;if("8"==a)for(a=0;a<e;a++)c[a]=b[a]-=128;for(a=0;a<e;a++)c[a]=f(b[a],n);if("8"==d)for(b=0;b<e;b++)c[b]=c[b]+=128}function b(a,b){return a=0<a?parseInt(a/b.f*b.b,10):parseInt(a/b.g*b.c,10)}function d(a,b){return parseInt(0<a?a*b.b:a*b.c,10)}function e(a,b){return 0<a?a/b.f:a/b.g}function q(a){k[0]=a;return k[0]}function p(a,c){var f;if(["32f","64"].includes(a))["32f","64"].includes(c)?
f=q:f=d;else{if(["32f","64"].includes(c))return e;f=b}a==c&&(f=function(a){return a});return f}function h(a){if("32f"!=a&&"64"!=a&&("8">parseInt(a,10)||"53"<parseInt(a,10)))throw Error("Invalid bit depth.");}var k=new Float32Array(1);c.a=a;window.bitDepth=window.bitDepth||{};window.bitDepth.toBitDepth=a}]);