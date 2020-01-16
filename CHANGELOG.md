# CHANGELOG

## 9.0.0 - 2020-01-16
- *output* param now is required to be a typed array. Previous versions
would work with regulars arrays too, but for now on regular arrays wont
work anymore.

- changeBitDepth() params update:
```javascript
/**
 * Change the bit depth of PCM samples.
 * @param {!Array|!TypedArray} samples The original samples.
 * @param {string} bithDepth The original bit depth.
 * @param {!TypedArray} newSamples The output array.
 * @param {string} targetBitDepth The target bit depth.
 * @throws {Error} If original or target bit depths are not valid.
 */
changeBitDepth(samples, bithDepth, newSamples, targetBitDepth);
```

### Other changes
- *originalSamples* type defined as {!Array|!TypedArray} to ease integration
- Remove unecessary conversions


## 8.0.0 - 2019-12-31
- New package structure:
	* No more default exports
	* dist file is "./dist/bitdepth.js", a UMD served as "main"
	* ES6 source is "./index.js", served as "module"
- bitDepth() renamed to changeBitDepth. Used it like this:
```javascript
const changeBitDepth = require('bitdepth').changeBitDepth;
```

## v7.0.3 (2018-07-13)
- Fix: Trancate floating point samples on overflow or underflow.

## v7.0.2 (2018-07-08)
- UMD dist transpiled to ES5.

## v7.0.1 (2018-07-03)
- Fix TypeScript declaration file.

## v7.0.0 (2018-07-02)
- Write to and from typed arrays.

## v6.0.0 (2018-06-25)
- Allow better use of this lib as a dependency:
	- package.json refactored with bundlers and ES6 envs in mind
	- bitdetph function exported as default

## 5.0.0 (2018-06-22)
- ES6 module.

## 4.0.0 (2018-06-17)
- New API: just the function bitdepth().
- New dist file: bitdepth.min.js.

## 3.1.4 (2018-06-11)
- fix: remove dist from npm in v1 to avoid breaking dependents.

## 3.1.3 (2018-06-11)
- Browser dist on npm.

## 3.1.2
- Better packaging.

## 3.1.1
- Fix: always writing to output array
