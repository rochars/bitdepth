/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("16-bit to 8-bit (max range)", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [0, 255] (max range)",
            function() {
        let samples = [-32768, 32767];
        bitDepth.toBitDepth(samples, "16", "8");
        assert.deepEqual(samples, [0, 255]);
    });
    it("samples should be [128]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "16", "8");
        assert.deepEqual(samples, [128]);
    });
    it("samples should be [0]",
            function() {
        let samples = [-32768];
        bitDepth.toBitDepth(samples, "16", "8");
        assert.deepEqual(samples, [0]);
    });
});
