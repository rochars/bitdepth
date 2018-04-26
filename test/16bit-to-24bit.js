/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("16-bit to 24-bit (max range)", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-8388608, 8388607] (max range)",
            function() {
        let samples = [-32768, 32767];
        bitDepth.toBitDepth(samples, "16", "24");
        assert.deepEqual(samples, [-8388608, 8388607]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "16", "24");
        assert.deepEqual(samples, [0]);
    });
});
