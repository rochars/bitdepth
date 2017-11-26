/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("16-bit to 64-bit (max range)", function() {

    let fs = require("fs");
    let bitDepth = require("../index.js");

    it("samples_ should be [-1, 1] (max range)",
            function() {
        let samples = [-32768, 32767];
        bitDepth.toBitDepth(samples, "16", "64");
        assert.deepEqual(samples, [-1, 1]);
    });
    it("samples_ should be [0]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "16", "64");
        assert.deepEqual(samples, [0]);
    });
});
