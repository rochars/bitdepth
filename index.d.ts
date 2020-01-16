// Type definitions for bitdepth 9.0
// Project: https://github.com/rochars/bitdepth
// Definitions by: Rafael S. Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/bitdepth

/**
 * Change the bit depth of PCM samples.
 * @param {!Array|!TypedArray} samples The original samples.
 * @param {string} bithDepth The original bit depth.
 * @param {!TypedArray} newSamples The output array.
 * @param {string} targetBitDepth The target bit depth.
 * @throws {Error} If original or target bit depths are not valid.
 */
export function changeBitDepth(
	samples: ArrayLike<number>,
	bithDepth: string,
	newSamples: ArrayLike<number>,
	targetBitDepth: string): void;
