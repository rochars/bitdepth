/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("32-bit IEEE to 64-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../index.js");

    it("samples_ should be [-1, 1]",
            function() {
        let samples = [-1, 1];
        bitDepth.toBitDepth(samples, "32f", "64");
        assert.deepEqual(samples, [-1, 1]);
    });
    it("samples_ should be [0]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "32f", "64");
        assert.deepEqual(samples, [0]);
    });
});
