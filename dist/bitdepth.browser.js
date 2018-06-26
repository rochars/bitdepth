window["bitdepth"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bitdepth; });
/*
 * bitdepth: Change the resolution of samples to and from any bit depth.
 * https://github.com/rochars/bitdepth
 *
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview The bitdepth() function and private helper functions.
 */

/** @module bitdepth */

/** @private */
const f64f32_ = new Float32Array(1);

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
function bitdepth(samples, original, target, outputArray) {
  validateBitDepth_(original);
  validateBitDepth_(target);
  outputArray = outputArray || samples;
  /** @type {!Function} */
  let toFunction = getBitDepthFunction_(original, target);
  /** @type {!Object<string, number>} */
  let options = {
    oldMin: Math.pow(2, parseInt(original, 10)) / 2,
    newMin: Math.pow(2, parseInt(target, 10)) / 2,
    oldMax: (Math.pow(2, parseInt(original, 10)) / 2) - 1,
    newMax: (Math.pow(2, parseInt(target, 10)) / 2) - 1,
  };
  /** @type {number} */
  const len = samples.length;
  // sign the samples if original is 8-bit
  if (original == "8") {
    for (let i=0; i<len; i++) {
      outputArray[i] = samples[i] -= 128;
    }
  }
  // change the resolution of the samples
  for (let i=0; i<len; i++) {        
    outputArray[i] = toFunction(samples[i], options);
  }
  // unsign the samples if target is 8-bit
  if (target == "8") {
    for (let i=0; i<len; i++) {
      outputArray[i] = outputArray[i] += 128;
    }
  }
}

/**
 * Change the bit depth from int to int.
 * @param {number} sample The sample.
 * @param {!Object<string, number>} args Data about the original and target bit depths.
 * @return {number}
 * @private
 */
function intToInt_(sample, args) {
  if (sample > 0) {
    sample = parseInt((sample / args.oldMax) * args.newMax, 10);
  } else {
    sample = parseInt((sample / args.oldMin) * args.newMin, 10);
  }
  return sample;
}

/**
 * Change the bit depth from float to int.
 * @param {number} sample The sample.
 * @param {!Object<string, number>} args Data about the original and target bit depths.
 * @return {number}
 * @private
 */
function floatToInt_(sample, args) {
  return parseInt(
    sample > 0 ? sample * args.newMax : sample * args.newMin, 10);
}

/**
 * Change the bit depth from int to float.
 * @param {number} sample The sample.
 * @param {!Object<string, number>} args Data about the original and target bit depths.
 * @return {number}
 * @private
 */
function intToFloat_(sample, args) {
  return sample > 0 ? sample / args.oldMax : sample / args.oldMin;
}

/**
 * Change the bit depth from float to float.
 * @param {number} sample The sample.
 * @return {number}
 * @private
 */
function floatToFloat_(sample) {
  f64f32_[0] = sample;
  return f64f32_[0];
}

/**
 * Return the function to change the bit depth of a sample.
 * @param {string} original The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {string} target The new bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @return {!Function}
 * @private
 */
function getBitDepthFunction_(original, target) {
  /** @type {!Function} */
  let func = function(x) {return x;};
  if (original != target) {
    if (["32f", "64"].includes(original)) {
      if (["32f", "64"].includes(target)) {
        func = floatToFloat_;
      } else {
        func = floatToInt_;
      }
    } else {
      if (["32f", "64"].includes(target)) {
        func = intToFloat_;
      } else {
        func = intToInt_;
      }
    }
  }
  return func;
}

/**
 * Validate the bit depth.
 * @param {string} bitDepth The original bit depth.
 *     Should be one of "8" ... "53", "32f" or "64".
 * @throws {Error} If any argument does not meet the criteria.
 * @private
 */
function validateBitDepth_(bitDepth) {
  if ((bitDepth != "32f" && bitDepth != "64") &&
      (parseInt(bitDepth, 10) < "8" || parseInt(bitDepth, 10) > "53")) {
    throw new Error("Invalid bit depth.");
  }
}


/***/ })
/******/ ]);