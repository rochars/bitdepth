/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("8-bit to 16-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-1, 1]",
            function() {
        let samples = [0, 255];
        bitDepth.toBitDepth(samples, "8", "16");
        assert.deepEqual(samples, [-32768, 32767]);
    });
    it("samples should be [0]",
            function() {
        let samples = [128];
        bitDepth.toBitDepth(samples, "8", "16");
        assert.deepEqual(samples, [0]);
    });
});
