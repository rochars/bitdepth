/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("24-bit to 16-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../index.js");

    it("samples should be [-32768, 32767] (max range)",
            function() {
        let samples = [-2147483648, 2147483647];
        bitDepth.toBitDepth(samples, "32", "16");
        assert.deepEqual(samples, [-32768, 32767]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth.toBitDepth(samples, "32", "16");
        assert.deepEqual(samples, [0]);
    });
});
