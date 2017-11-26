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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*!
 * bitdepth
 * Change the bit depth of audio samples to and from 8, 16, 24, 32, 32 IEEE & 64-bit.
 * Copyright (c) 2017 Rafael da Silva Rocha. MIT License.
 * https://github.com/rochars/bitdepth
 *
 */

/**
 * Max number of values for each bit depth.
 * @enum {number}
 */
const BitDepthMaxValues = {
    2: 4,
    4: 16,
    8: 256,
    16: 65536,
    24: 16777216,
    32: 4294967296,
    40: 1099511627776,
    48: 281474976710656
};

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
    if (originalBitDepth == targetBitDepth) {
        return;
    }
    validateBitDepths(originalBitDepth, targetBitDepth);
    let len = data.length;

    // Get the max values for both original and target bit depth
    let oldMaxValue =
        parseInt((BitDepthMaxValues[parseInt(originalBitDepth, 10)]) / 2, 10);
    let newMaxValue =
        parseInt((BitDepthMaxValues[parseInt(targetBitDepth, 10)]) / 2, 10);

    // needs dithering if the target bit depth
    // is lower than the original bit depth
    //if (parseInt(targetBitDepth, 10) < parseInt(originalBitDepth, 10)) {
        // TODO: dithering
    //}

    for (let i=0; i<len; i++) {
        
        // 8-bit samples are unsigned;
        // They are signed here before conversion
        // (other bit depths are all signed)
        if (originalBitDepth == "8") {
            data[i] -= 128;
        }

        // If it is a float-to-float or int-to-float conversion then
        // the samples in the target bit depth will be normalized in the
        // -1.0 to 1.0 range; there is no need to multiply
        if (targetBitDepth == "32f" || targetBitDepth == "64") {
            if (originalBitDepth != "32f" && originalBitDepth != "64") {
                if (data[i] > 0) {
                    data[i] = data[i] / (oldMaxValue - 1);
                } else {
                    data[i] = data[i] / oldMaxValue;
                }
            }

        // If it is a float-to-int or int-to-int conversion then the
        // samples will be de-normalized according to the bit depth
        }else {
            
            // If the original samples are float, then they are already
            // normalized between -1.0 and 1.0; All that is need is to
            // multiply the sample values by the new bit depth max value
            if (originalBitDepth == "32f" || originalBitDepth == "64" ) {
                if (data[i] > 0) {
                    data[i] = data[i] * (newMaxValue - 1);
                } else {
                    data[i] = data[i] * newMaxValue;
                }

            // If the original samples are integers, then they need to be
            // divided by the maximum values of its original bit depth
            // (to normalize them between -1.0 and .10) and then multiply
            // them by the new bit depth max value
            } else {
                if (data[i] > 0) {
                    data[i] = parseInt((data[i] / (oldMaxValue - 1)) * newMaxValue - 1, 10);
                } else {
                    data[i] = parseInt((data[i] / oldMaxValue) * newMaxValue, 10);
                }
            }
            
            // Make the samples unsigned if the target bit depth is "8"
            if (targetBitDepth == "8") {
                data[i] += 128;
            }
        }  
    }
}

/**
 * Validate the bit depth.
 * @param {string} originalBitDepth The original bit depth.
 *     Should be one of "8", "16", "24", "32", "32f", "64".
 * @param {string} targetBitDepth The target bit depth.
 *     Should be one of "8", "16", "24", "32", "32f", "64".
 * @throws {Error} If any argument does not meet the criteria.
 */
function validateBitDepths(originalBitDepth, targetBitDepth) {
    let validBitDepths = ["8", "16", "24", "32", "32f", "64"];
    if (validBitDepths.indexOf(originalBitDepth) == -1 ||
        validBitDepths.indexOf(targetBitDepth) == -1) {
        throw new Error("Invalid bit depth.");
    }
    return true;
}

window['toBitDepth'] = toBitDepth;
window['BitDepthMaxValues'] = BitDepthMaxValues;


/***/ })
/******/ ]);