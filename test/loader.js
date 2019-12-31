/**
 * Copyright (c) 2017-2019 Rafael da Silva Rocha.
 * https://github.com/rochars/wavefiles
 *
 */

let bitdepth;

// UMD
if (process.argv[3] == '--umd') {
	console.log('umd');
	bitdepth = require('../dist/bitdepth.js').changeBitDepth;

// source
} else {
	console.log('source');
	require = require("esm")(module);
	global.module = module;
	bitdepth = require('../index.js').changeBitDepth;
}

module.exports = bitdepth;
