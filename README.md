# bitdepth
Copyright (c) 2017-2019 Rafael da Silva Rocha.  
https://github.com/rochars/bitdepth

[![NPM version](https://img.shields.io/npm/v/bitdepth.svg?style=for-the-badge)](https://www.npmjs.com/package/bitdepth) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/bitdepth/index.html) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rawgit.com/rochars/bitdepth/master/test/dist/browser.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/bitdepth.svg?style=flat-square)](https://codecov.io/gh/rochars/bitdepth) [![Unix Build](https://img.shields.io/travis/rochars/bitdepth.svg?style=flat-square)](https://travis-ci.org/rochars/bitdepth) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/bitdepth.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/bitdepth) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/bitdepth.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/bitdepth/)

Change the bit depth of PCM samples.

## Install
```
npm install bitdepth
```

## Use

### Node
```javascript
const changeBitDepth = require("bitdepth").changeBitDepth;
changeBitDepth(originalArray, "32f", "64", outputArray);
```
The outputArray must be a typed array.

## Browser
Use the **bitdepth.js** file in the */dist* folder:
```html
<script src="bitdepth.js"></script>
<script>
	bitdepth.changeBitDepth(originalArray, "32f", "64", outputArray);
</script>
```

Or get it from the [jsDelivr](https://cdn.jsdelivr.net/npm/bitdepth) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/bitdepth"></script>
```

Or get it from [unpkg](https://unpkg.com/bitdepth):
```html
<script src="https://unpkg.com/bitdepth"></script>
```

## Bit depth codes
The *original* and *target* params informing the original and target bit depths are **strings** representing the bit depth code. Their values can be:
- A string representing any integer from "8" to "53" (integer samples)
- "32f" for 32 bit floating-point
- "64" for 64 bit floating-point

## Range of the samples
This lib is inteded to be used with PCM audio data. Note that:
- 8-bit samples range from 0 to 255 (unsigned)
- Other integers are all signed
- 32 fp and 64 range from -1 to 1

## Dithering
This lib does not apply any dither to the samples.

## API
```javascript
/**
 * Change the bit depth of PCM samples.
 * @param {!Array|!TypedArray} samples The original samples.
 * @param {string} bithDepth The original bit depth.
 * @param {!TypedArray} newSamples The output array.
 * @param {string} targetBitDepth The target bit depth.
 * @throws {Error} If original or target bit depths are not valid.
 */
function changeBitDepth(samples, bithDepth, newSamples, targetBitDepth) {};
```

## LICENSE
Copyright (c) 2017-2019 Rafael da Silva Rocha.

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
