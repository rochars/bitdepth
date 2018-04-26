/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/bitdepth
 *
 */

let bitDepth = require('../index.js');

if (process.argv[3] == '--dist') {
    require('browser-env')();let assert = require('assert');
    require('../dist/bitdepth-min.js');
    toBitDepth = window.toBitDepth;
    //bitDepth = {"toBitDepth": toBitDepth};
}

module.exports = bitDepth;
