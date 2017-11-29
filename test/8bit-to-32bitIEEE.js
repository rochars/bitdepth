/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("8-bit to 32-bit IEEE", function() {

    let fs = require("fs");
    let bitDepth = require("../index.js");

    it("samples should be [-1, 1]",
            function() {
        let samples = [0, 255];
        bitDepth.toBitDepth(samples, "8", "32f");
        assert.deepEqual(samples, [-1, 1]);
    });
    it("samples should be [0]",
            function() {
        let samples = [128];
        bitDepth.toBitDepth(samples, "8", "32f");
        assert.deepEqual(samples, [0]);
    });
});
