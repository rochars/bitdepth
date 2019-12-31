// Type definitions for bitdepth 8.0
// Project: https://github.com/rochars/bitdepth
// Definitions by: Rafael S. Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/bitdepth

/**
 * Change the bit depth of the samples.
 * @param {!TypedArray} input The samples.
 * @param {string} original The original bit depth of the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {string} target The desired bit depth for the data.
 *      One of "8" ... "53", "32f", "64"
 * @param {!TypedArray} output The output array.
 */
export function changeBitDepth(
	input: ArrayLike<number>,
	original: string,
	target: string,
	output: ArrayLike<number>): void;
