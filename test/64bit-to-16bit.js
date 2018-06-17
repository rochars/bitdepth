/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("64-bit IEEE to 16-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-32768, 32767]",
            function() {
        let samples = [-1, 1];
        bitDepth(samples, "64", "16");
        assert.deepEqual(samples, [-32768, 32767]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth(samples, "64", "16");
        assert.deepEqual(samples, [0]);
    });
});
