# bitdepth
Copyright (c) 2017-2018 Rafael da Silva Rocha.  
https://github.com/rochars/bitdepth

[![NPM version](https://img.shields.io/npm/v/bitdepth.svg?style=for-the-badge)](https://www.npmjs.com/package/bitdepth) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/bitdepth/index.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/bitdepth.svg?style=flat-square)](https://codecov.io/gh/rochars/bitdepth) [![Unix Build](https://img.shields.io/travis/rochars/bitdepth.svg?style=flat-square)](https://travis-ci.org/rochars/bitdepth) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/bitdepth.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/bitdepth) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/bitdepth.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/bitdepth/)

Change the resolution of samples to and from any bit depth.

Supported bit depths (to and from):
 - "8": 8-bit int (unsigned)
 - Anything between "9" and "53" (integers, signed)
 - "32f": 32-bit float
 - "64": 64-bit float

## Install
```
npm install bitdepth
```

## Use

### ES6
import imaadpcm from **imaadpcm.js**:
```javascript
import bitdepth from 'bitdepth.js';

// 8 bit samples
let samples = [0, 255]

// Make'em 32-bit floating point
// The input array is modified in place.
bitdepth(samples, "8", "32f");
```

### Node
```javascript
const bitdepth = require("bitdepth");
let samples = [0, 255]
bitdepth(samples, "8", "32f");
```

## Browser
Use the compiled file in the */dist* folder:
```html
<script src="bitdepth.min.js"></script>
<script>
  var samples = [0, 255]
  bitdepth(samples, "8", "32f");
</script>
```

Or get it from the [jsDelivr](https://www.jsdelivr.com) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/bitdepth@6"></script>
```

Or get it from [unpkg](https://www.unpkg.com):
```html
<script src="https://unpkg.com/bitdepth@6"></script>
```

Or as a ES6 module in modern browsers from [jspm](https://jspm.io):
```html
<script type="module">
  import bitdepth from 'https://dev.jspm.io/bitdepth';
  // ...
</script>
```

## Example
```javascript
const bitdepth = require("bitdepth");

// 8 bit samples
let samples = [0, 255]

// Make'em 32-bit floating point
// The input array is modified in place.
bitdepth(samples, "8", "32f");
```

## API

### bitdepth()
```javascript
/**
 * Change the bit depth of samples. The input array is modified in-place.
 * @param {!Array<number>} samples The samples.
 * @param {string} original The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {string} target The desired bit depth for the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {Array<number>=} outputArray An optional array to write
        converted samples to. Useful for writing to typed arrays.
 */
function bitdepth(samples, original, target, outputArray) {}
```

## Distribution
This library is a ES6 module also distributed as a CommonJS module, UMD and a compiled script for browsers.

- The **CommonJS** is the one used by Node. It is served in the "main" field of package.json
- The **UMD** module is compatible with Node, AMD and browsers. It is served in the "browser" field.
- The **compiled dist** is browser-only and should be the one served by CDNs.
- The **ES6** dist is **bitdepth.js**, served as "module" in package.json

You may load both **bitdepth.umd.js** and **bitdepth.min.js** in the browser with ```<script>``` tags.

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
