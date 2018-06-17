/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/bitdepth
 *
 */

let bitDepth;

if (process.argv[3] == '--dist') {
    require('browser-env')();let assert = require('assert');
    require('../dist/bitdepth.min.js');
    bitDepth = window.bitdepth;
} else {
	bitDepth = require('../index.js');
}

module.exports = bitDepth;
