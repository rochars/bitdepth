/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("64-bit IEEE to 16-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [0, 255]",
            function() {
        let samples = [-1, 1];
        bitDepth.toBitDepth(samples, "64", "8");
        assert.deepEqual(samples, [0, 255]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "64", "8");
        assert.deepEqual(samples, [128]);
    });
    it("samples should be [0]",
            function() {
        let samples = [-1];
        bitDepth.toBitDepth(samples, "64", "8");
        assert.deepEqual(samples, [0]);
    });
});
