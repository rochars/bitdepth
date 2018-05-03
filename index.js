/**
 * bitdepth
 * Change the resolution of samples to and from 8, 11, 12, 16, 20, 24, 32, 48 & 64-bit.
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/bitdepth
 *
 */

/** @private */
const f64f32_ = new Float32Array(1);

/**
 * Change the bit depth of the data in a array.
 * The input array is modified in-place.
 * @param {!Array<number>} samples The samples.
 * @param {!string} original The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {!string} target The desired bit depth for the data.
 *      One of "8" ... "53", "32f", "64"
 */
function toBitDepth(samples, original, target) {
    if (original != target) {
        validateBitDepth_(original);
        validateBitDepth_(target);
        let toFunction = getBitDepthFunction_(original, target);
        let options = {
            oldMin: Math.pow(2, parseInt(original, 10)) / 2,
            newMin: Math.pow(2, parseInt(target, 10)) / 2,
            oldMax: (Math.pow(2, parseInt(original, 10)) / 2) - 1,
            newMax: (Math.pow(2, parseInt(target, 10)) / 2) - 1,
        };
        signed8Bit_(samples, original, false);
        for (let i=0; i<samples.length; i++) {        
            samples[i] = toFunction(samples[i], options);
        }
        signed8Bit_(samples, target, true);
    }
}

/**
 * Sign or unsign 8-bit samples.
 * The input array is modified in-place.
 * @param {!Array<number>} samples The samples.
 * @param {!string} bitDepth The original bit depth of the data.
 * @param {!boolean} signed True if should sign the samples, false otherwise.
 */
function signed8Bit_(samples, bitDepth, signed) {
    if (bitDepth == "8") {
        if (signed) {
            for (let i=0; i<samples.length; i++) {
                samples[i] += 128;
            }
        } else {
            for (let i=0; i<samples.length; i++) {
                samples[i] -= 128;
            }
        }
    }
}

/**
 * Change the bit depth from int to int.
 * @param {!number} sample The sample.
 * @param {!Object} args Data about the original and target bit depths.
 * @return {!number}
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
 * @param {!number} sample The sample.
 * @param {!Object} args Data about the original and target bit depths.
 * @return {!number}
 * @private
 */
function floatToInt_(sample, args) {
    return parseInt(
        sample > 0 ? sample * args.newMax : sample * args.newMin, 10);
}

/**
 * Change the bit depth from int to float.
 * @param {!number} sample The sample.
 * @param {!Object} args Data about the original and target bit depths.
 * @return {!number}
 * @private
 */
function intToFloat_(sample, args) {
    return sample > 0 ? sample / args.oldMax : sample / args.oldMin;
}

/**
 * Change the bit depth from float to float.
 * @param {!number} sample The sample.
 * @return {!number}
 * @private
 */
function floatToFloat_(sample) {
    f64f32_[0] = sample;
    sample = f64f32_[0];
    return sample;
}

/**
 * Get the function to change the bit depth of a sample.
 * @param {!string} original The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {!string} target The new bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @return {!Function}
 * @private
 */
function getBitDepthFunction_(original, target) {
    if (["32f", "64"].includes(original)) {
        if (["32f", "64"].includes(target)) {
            return floatToFloat_;
        } else {
            return floatToInt_;
        }
    } else {
        if (["32f", "64"].includes(target)) {
            return intToFloat_;
        } else {
            return intToInt_;
        }
    }
}

/**
 * Validate the bit depth.
 * @param {!string} bitDepth The original bit depth.
 *     Should be one of "8" ... "53", "32f" or "64".
 * @throws {Error} If any argument does not meet the criteria.
 * @return {!boolean}
 * @private
 */
function validateBitDepth_(bitDepth) {
    if ((bitDepth != "32f" && bitDepth != "64") &&
            (parseInt(bitDepth, 10) < "8" || parseInt(bitDepth, 10) > "53")) {
        throw new Error("Invalid bit depth.");
    }
    return true;
}

module.exports = toBitDepth;
module.exports.toBitDepth = toBitDepth;
