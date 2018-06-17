/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("64-bit IEEE to 32-bit IEEE", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-1, 1]",
            function() {
        let samples = [-1, 1];
        bitDepth(samples, "64", "32f");
        assert.deepEqual(samples, [-1, 1]);
    });
    it("samples should be rounded to 32bit",
            function() {
        let samples = [0.0102030499999999];
        bitDepth(samples, "64", "32f");
        assert.ok(samples[0].toFixed(7) != (0.01020304).toFixed(7));
    });
    it("samples should not be rounded if target is not 32f",
            function() {
        let samples = [0.0102030499999999];
        bitDepth(samples, "64", "64");
        assert.ok(samples[0].toFixed(7) == (0.0102030499999999).toFixed(7));
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitDepth(samples, "64", "32f");
        assert.deepEqual(samples, [0]);
    });
});
