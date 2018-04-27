/*!
 * Wavefile
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

var assert = require("assert");

describe("interface", function() {

    let bitdepth = require("../test/loader.js");
    
    it("Should have the toBitDepth function available", function() {
        const data = ["0"];
        bitdepth.toBitDepth(data, "8", "8");
        assert.ok(data);
    });

    it("Should write to a provided output array", function(){
        const samples = [0, 255];
        const output  = new Array(samples.length);
        bitdepth.toBitDepth(samples, "8", "8", output);
        assert.deepEqual(output, samples);
    });
});
