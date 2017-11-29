/*!
 * bitdepth
 * Change the bit depth of samples to and from 8, 16, 24, 32 & 64-bit.
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/bitdepth
 *
 */

/**
 * Max number of different values for each bit depth.
 * @enum {number}
 */
const BitDepthMaxValues = {
    8: 256,
    16: 65536,
    24: 16777216,
    32: 4294967296
};

/**
 * Change the bit depth of the data.
 * The input array is modified in-place.
 * @param {!Array<number>} samples The samples.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @param {string} targetBitDepth The new bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function toBitDepth(samples, originalBitDepth, targetBitDepth) {
    validateBitDepths(originalBitDepth, targetBitDepth);
    let len = samples.length;
    for (let i=0; i<len; i++) {        
        let sample = samples[i];
        
        // 8-bit samples are unsigned;
        // They are signed here before conversion
        // (other bit depths are all signed)
        sample = sign8Bit(sample, originalBitDepth);

        // If it is a float-to-float or int-to-float conversion then
        // the samples in the target bit depth need to be normalized in the
        // -1.0 to 1.0 range; there is no need to multiply
        if (["32f", "64"].includes(targetBitDepth)) {
            sample = toFloat(sample, originalBitDepth);

        // If it is a float-to-int or int-to-int conversion then the
        // samples need to be de-normalized according to the bit depth
        } else {
            sample = toInt(sample, originalBitDepth, targetBitDepth);
        }
        samples[i] = sample;
    }
}

/**
 * Sign unsigned 8-bit data.
 * @param {number} sample The sample.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function sign8Bit(sample, originalBitDepth) {
    if (originalBitDepth == "8") {
        sample -= 128;
    }
    return sample;
}

/**
 * Unsign signed 8-bit data.
 * @param {number} sample The sample.
 * @param {string} targetBitDepth The target bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function unsign8Bit(sample, targetBitDepth) {
    if (targetBitDepth == "8") {
        sample += 128;
    }
    return sample;
}

/**
 * Change the bit depth of a sample to a new floating point bit depth.
 * The input array is modified in-place.
 * @param {number} sample The sample.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function toFloat(sample, originalBitDepth) {
    let oldMaxValue = parseInt((BitDepthMaxValues[originalBitDepth]) / 2, 10);
    if (originalBitDepth != "32f" && originalBitDepth != "64") {
        if (sample > 0) {
            sample = sample / (oldMaxValue - 1);
        } else {
            sample = sample / oldMaxValue;
        }
    }
    return sample;
}

/**
 * Change the bit depth of a sample to a new integer bit depth.
 * @param {number} sample The sample.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @param {string} targetBitDepth The new bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function toInt(sample, originalBitDepth, targetBitDepth) {
    // If the original samples are float, then they are already
    // normalized between -1.0 and 1.0; All that is need is to
    // multiply the sample values by the new bit depth max value
    let newMaxValue = parseInt((BitDepthMaxValues[targetBitDepth]) / 2, 10);
    if (originalBitDepth == "32f" || originalBitDepth == "64" ) {
        sample = floatToInt(sample, newMaxValue);
    // If the original samples are integers, then they need to be
    // divided by the maximum values of its original bit depth
    // (to normalize them between -1.0 and .10) and then multiplied
    // by the new bit depth max value
    } else {
        sample = intToInt(
                sample,
                parseInt((BitDepthMaxValues[originalBitDepth]) / 2, 10),
                newMaxValue
            );
    }
    // Make the samples unsigned if the target bit depth is "8"
    return unsign8Bit(sample, targetBitDepth);
}

/**
 * Perform a int-to-int conversion.
 * @param {number} sample The sample.
 * @param {number} oldMaxValue The max value for the original bit depth.
 * @param {number} newMaxValue The max value for the target bit depth.
 * @return {number}
 */
function intToInt(sample, oldMaxValue, newMaxValue) {
    if (sample > 0) {
        sample =
            parseInt((sample / (oldMaxValue - 1)) * newMaxValue - 1, 10);
    } else {
        sample = parseInt((sample / oldMaxValue) * newMaxValue, 10);
    }
    return sample;
}

/**
 * Perform a float-to-int conversion.
 * @param {number} sample The sample.
 * @param {number} newMaxValue The max value for the target bit depth.
 * @return {number}
 */
function floatToInt(sample, newMaxValue) {
    if (sample > 0) {
        sample = sample * (newMaxValue - 1);
    } else {
        sample = sample * newMaxValue;
    }
    return sample;
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

module.exports.toBitDepth = toBitDepth;
module.exports.BitDepthMaxValues = BitDepthMaxValues;
