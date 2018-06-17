/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("16-bit to 32-bit (max range)", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-2147483648, 2147483647] (max range)",
            function() {
        let samples = [-32768, 32767];
        bitDepth(samples, "16", "32");
        assert.deepEqual(samples, [-2147483648, 2147483647]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth(samples, "16", "32");
        assert.deepEqual(samples, [0]);
    });
});
