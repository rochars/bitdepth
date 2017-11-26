# bitdepth
Change the bit depth of audio samples to and from 8, 16, 24, 32, 32 IEEE & 64-bit.  
Copyright (c) 2017 Rafael da Silva Rocha.  
https://github.com/rochars/bitdepth

[![Build Status](https://travis-ci.org/rochars/bitdepth.svg?branch=master)](https://travis-ci.org/rochars/bitdepth) [![Build status](https://ci.appveyor.com/api/projects/status/rxyv4w8yo5ny97w0?svg=true)](https://ci.appveyor.com/project/rochars/bitdepth) [![codecov](https://codecov.io/gh/rochars/bitdepth/branch/master/graph/badge.svg)](https://codecov.io/gh/rochars/bitdepth) [![NPM version](https://img.shields.io/npm/v/bitdepth.svg?style=flat)](https://www.npmjs.com/package/bitdepth) [![NPM downloads](https://img.shields.io/npm/dm/bitdepth.svg?style=flat)](https://www.npmjs.com/package/bitdepth)

## Install
```
npm install bitdepth
```

## Use
Currently there is **no dithering** when changing the bit depth.

```javascript
let bitDepth = require("../index.js");

// 8 bit samples
let samples = [0, 255]

// Make'em 32-bit floating point
bitDepth.toBitDepth(samples, "8", "32f");

console.log(samples);
//[-1, 1]
```

## toBitDepth()
```javascript
/**
 * Change the bit depth of the data.
 * The input array is modified in-place.
 * @param {!Array<number>} data The data.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @param {string} targetBitDepth The new bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function toBitDepth(data, originalBitDepth, targetBitDepth) {
```

## LICENSE
Copyright (c) 2017 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
