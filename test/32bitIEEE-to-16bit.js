/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("32-bit IEEE to 16-bit", function() {

    let fs = require("fs");
    let bitdepth = require("../test/loader.js");

    it("samples should be [-32768, 32767] (max range)",
            function() {
        let samples = [-1, 1];
        bitdepth(samples, "32f", "16");
        assert.deepEqual(samples, [-32768, 32767]);
    });
    it("samples should be [0]",
            function() {
        let samples = [0];
        bitdepth(samples, "32f", "16");
        assert.deepEqual(samples, [0]);
    });
});
