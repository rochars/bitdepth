# bitdepth
Change the resolution of samples to and from 8, 11, 12, 16, 20, 24, 32, 48 & 64-bit.  
Copyright (c) 2017-2018 Rafael da Silva Rocha.  
https://github.com/rochars/bitdepth

[![NPM version](https://img.shields.io/npm/v/bitdepth.svg?style=for-the-badge)](https://www.npmjs.com/package/bitdepth) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/bitdepth/index.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/bitdepth.svg?style=flat-square)](https://codecov.io/gh/rochars/bitdepth) [![Unix Build](https://img.shields.io/travis/rochars/bitdepth.svg?style=flat-square)](https://travis-ci.org/rochars/bitdepth) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/bitdepth.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/bitdepth) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/bitdepth.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/bitdepth/)

## Install
```
npm install bitdepth
```

## Use
Supported bit depths (to and from):
 - "8": 8-bit int (unsigned)
 - Anything between "9" and "53" (integers, signed)
 - "32f": 32-bit float
 - "64": 64-bit float

```javascript
const bitDepth = require("bitdepth");

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
 * Change the bit depth of the data in a array.
 * The input array is modified in-place.
 * @param {!Array<number>} samples The samples.
 * @param {!string} originalBitDepth The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {!string} targetBitDepth The desired bit depth for the data.
 *      One of "8" ... "53", "32f", "64"
 */
function toBitDepth(samples, originalBitDepth, targetBitDepth) {}
```

## LICENSE
Copyright (c) 2017-2018 Rafael da Silva Rocha.

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
