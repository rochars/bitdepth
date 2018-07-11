/**
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/wavefiles
 *
 */

let bitdepth;

// Browser
if (process.argv[3] == '--min') {
    console.log('browser');
    global.window = global;
    require('../dist/bitdepth.min.js');
    bitdepth = window.bitDepth;

// UMD
} else if (process.argv[3] == '--umd') {
	console.log('umd');
	bitdepth = require('../dist/bitdepth.umd.js');

// CommonJS
} else if (process.argv[3] == '--cjs') {
	console.log('cjs');
	bitdepth = require('../dist/bitdepth.cjs.js');

// esm
} else if (process.argv[3] == '--esm') {
	console.log('esm');
	require = require("esm")(module);
	global.module = module;
	bitdepth = require('../dist/bitdepth.js').default;

// ESM
} else {
	console.log('source');
	require = require("esm")(module);
	global.module = module;
	bitdepth = require('../index.js').default;
}

module.exports = bitdepth;
