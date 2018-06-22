/**
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/wavefiles
 *
 */

let bitdepth;

// Browser
if (process.argv[3] == '--min') {
    require('browser-env')();
    require('../dist/bitdepth.min.js');
    bitdepth = window.bitdepth.bitdepth;

// UMD
} else if (process.argv[3] == '--umd') {
	bitdepth = require('../dist/bitdepth.umd.js').bitdepth;

// CommonJS
} else if (process.argv[3] == '--cjs') {
	bitdepth = require('../dist/bitdepth.cjs.js').bitdepth;

// ESM
} else {
	bitdepth = require('../index.js').bitdepth;
}

module.exports = bitdepth;
