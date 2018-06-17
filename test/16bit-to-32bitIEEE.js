/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("16-bit to 32-bit IEEE (max range)", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-1, 1] (max range)",
            function() {
        let samples = [-32768, 32767];
        bitDepth(samples, "16", "32f");
        assert.deepEqual(samples, [-1, 1]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth(samples, "16", "32f");
        assert.deepEqual(samples, [0]);
    });
});
