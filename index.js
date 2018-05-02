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
 * @param {!string} originalBitDepth The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {!string} targetBitDepth The desired bit depth for the data.
 *      One of "8" ... "53", "32f", "64"
 */
function toBitDepth(samples, originalBitDepth, targetBitDepth) {
    if (originalBitDepth == targetBitDepth) {
        return samples;
    }
    validateBitDepths_(originalBitDepth, targetBitDepth);
    let toFunction = getBitDepthFunction_(originalBitDepth, targetBitDepth);
    let len = samples.length;
    let options = {
            oldNegative: parseInt(
                Math.pow(2, parseInt(originalBitDepth, 10)) / 2, 10),
            newNegative: parseInt(
                Math.pow(2, parseInt(targetBitDepth, 10)) / 2, 10),
            oldPositive: parseInt(
                Math.pow(2, parseInt(originalBitDepth, 10)) / 2 - 1, 10),
            newPositive: parseInt(
                Math.pow(2, parseInt(targetBitDepth, 10)) / 2 - 1, 10),
            original: originalBitDepth,
            target: targetBitDepth
        };
    for (let i=0; i<len; i++) {        
        samples[i] = originalBitDepth == "8" ? samples[i] - 128 : samples[i];
        samples[i] = toFunction(
            samples[i],
            options);
        samples[i] = targetBitDepth == "8" ? samples[i] + 128 : samples[i];
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
        sample = parseInt(
            (sample / args.oldPositive) * args.newPositive, 10);
    } else {
        sample = parseInt(
            (sample / args.oldNegative) * args.newNegative, 10);
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
    return sample > 0 ?
        parseInt(sample * args.newPositive, 10) :
        parseInt(sample * args.newNegative, 10);
}

/**
 * Change the bit depth from int to float.
 * @param {!number} sample The sample.
 * @param {!Object} args Data about the original and target bit depths.
 * @return {!number}
 * @private
 */
function intToFloat_(sample, args) {
    return sample > 0 ?
        sample / args.oldPositive : sample / args.oldNegative;
}

/**
 * Change the bit depth from float to float.
 * @param {!number} sample The sample.
 * @param {!Object} args Data about the original and target bit depths.
 * @return {!number}
 * @private
 */
function floatToFloat_(sample, args) {
    f64f32_[0] = sample;
    sample = f64f32_[0];
    return sample;
}

/**
 * Get the function to change the bit depth of a sample.
 * @param {!string} originalBitDepth The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {!string} targetBitDepth The new bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @return {!Function}
 * @private
 */
function getBitDepthFunction_(originalBitDepth, targetBitDepth) {
    if (["32f", "64"].includes(originalBitDepth)) {
        if (["32f", "64"].includes(targetBitDepth)) {
            return floatToFloat_;
        } else {
            return floatToInt_;
        }
    } else {
        if (["32f", "64"].includes(targetBitDepth)) {
            return intToFloat_;
        } else {
            return intToInt_;
        }
    }
}

/**
 * Validate the bit depth.
 * @param {!string} originalBitDepth The original bit depth.
 *     Should be one of "8" ... "53", "32f", "64".
 * @param {!string} targetBitDepth The target bit depth.
 *     Should be one of "8" ... "53", "32f", "64".
 * @throws {Error} If any argument does not meet the criteria.
 * @return {!boolean}
 * @private
 */
function validateBitDepths_(originalBitDepth, targetBitDepth) {
    let validBitDepths = ["32f", "64"];
    for (let i=8; i<54; i++) {
        validBitDepths.push(i.toString());
    }
    if (validBitDepths.indexOf(originalBitDepth) == -1 ||
        validBitDepths.indexOf(targetBitDepth) == -1) {
        throw new Error("Invalid bit depth.");
    }
    return true;
}

module.exports = toBitDepth;
module.exports.toBitDepth = toBitDepth;
