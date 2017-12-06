/*!
 * bitdepth
 * Change the bit depth of samples to and from 8, 16, 24, 32 & 64-bit.
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/bitdepth
 *
 */

const f64f32 = new Float32Array(1);

/**
 * Max number of different values for each bit depth.
 * @enum {number}
 */
const BitDepthMaxValues = {
    "8": 256,
    "16": 65536,
    "24": 16777216,
    "32": 4294967296,
    "32f": 1,
    "64": 1
};

/**
 * Functions to change the bit depth of a sample.
 */
const BitDepthFunctions = {

    /**
     * Change the bit depth from int to int.
     * @param {number} sample The sample.
     * @param {Object} args Data about the original and target bit depths.
     * @return {number}
     */
    "intToInt": function(sample, args) {
        if (sample > 0) {
            sample = parseInt(
                (sample / args["oldPositive"]) * args["newPositive"], 10);
        } else {
            sample = parseInt(
                (sample / args["oldNegative"]) * args["newNegative"], 10);
        }
        return sample;
    },

    /**
     * Change the bit depth from float to int.
     * @param {number} sample The sample.
     * @param {Object} args Data about the original and target bit depths.
     * @return {number}
     */
    "floatToInt": function(sample, args) {
        return sample > 0 ?
            sample * args["newPositive"] : sample * args["newNegative"];
    },

    /**
     * Change the bit depth from int to float.
     * @param {number} sample The sample.
     * @param {Object} args Data about the original and target bit depths.
     * @return {number}
     */
    "intToFloat": function(sample, args) {
        return sample > 0 ?
            sample / args["oldPositive"] : sample / args["oldNegative"];
    },

    /**
     * Change the bit depth from float to float.
     * @param {number} sample The sample.
     * @param {Object} args Data about the original and target bit depths.
     * @return {number}
     */
    "floatToFloat": function(sample, args) {
        if (args["original"] == "64" && args["target"] == "32f") {
            f64f32[0] = sample;
            sample = f64f32[0];
        }
        return sample;
    }
};

/**
 * Change the bit depth of the data in a array.
 * The input array is modified in-place.
 * @param {!Array<number>} samples The samples.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @param {string} targetBitDepth The new bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 */
function toBitDepth(samples, originalBitDepth, targetBitDepth) {
    validateBitDepths(originalBitDepth, targetBitDepth);
    let toFunction = getBitDepthFunction(originalBitDepth, targetBitDepth);
    let len = samples.length;
    for (let i=0; i<len; i++) {        
        samples[i] = sign8Bit(samples[i], originalBitDepth);
        samples[i] = toFunction(
                samples[i],
                {
                    "oldNegative": BitDepthMaxValues[originalBitDepth] / 2,
                    "newNegative": BitDepthMaxValues[targetBitDepth] / 2,
                    "oldPositive": BitDepthMaxValues[originalBitDepth] / 2 - 1,
                    "newPositive": BitDepthMaxValues[targetBitDepth] / 2 - 1,
                    "original": originalBitDepth,
                    "target": targetBitDepth
                }
            );
        samples[i] = unsign8Bit(samples[i], targetBitDepth);
    }
}

/**
 * Get the function to change the bit depth of a sample.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @param {string} targetBitDepth The new bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @return {Function}
 */
function getBitDepthFunction(originalBitDepth, targetBitDepth) {
    let prefix;
    let suffix;
    if (["32f", "64"].includes(originalBitDepth)) {
        prefix = "float";
    } else {
        prefix = "int";
    }
    if (["32f", "64"].includes(targetBitDepth)) {
        suffix = "Float";
    } else {
        suffix = "Int";
    }
    return BitDepthFunctions[prefix + "To" + suffix];
}

/**
 * Sign unsigned 8-bit data.
 * @param {number} sample The sample.
 * @param {string} originalBitDepth The original bit depth of the data.
 *      One of "8", "16", "24", "32", "32f", "64"
 * @return {number}
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
 * @return {number}
 */
function unsign8Bit(sample, targetBitDepth) {
    if (targetBitDepth == "8") {
        sample += 128;
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
 * @return {boolean}
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
