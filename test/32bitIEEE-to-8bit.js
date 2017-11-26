/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("32-bit IEEE to 8-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../index.js");

    it("samples_ should be [0, 255]",
            function() {
        let samples = [-1, 1];
        bitDepth.toBitDepth(samples, "32f", "8");
        assert.deepEqual(samples, [0, 255]);
    });
    it("samples_ should be [0]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "32f", "8");
        assert.deepEqual(samples, [128]);
    });
});
