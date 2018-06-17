/*!
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * 
 */

let assert = require("assert");

describe("8-bit to 48-bit", function() {

    let fs = require("fs");
    let bitDepth = require("../test/loader.js");

    it("samples should be [-1, 1]",
            function() {
        let samples = [0, 255];
        bitDepth(samples, "8", "48");
        assert.deepEqual(samples, [-140737488355328, 140737488355327]);
    });
    it("samples should be [0]",
            function() {
        let samples = [128];
        bitDepth(samples, "8", "48");
        assert.deepEqual(samples, [0]);
    });
});
