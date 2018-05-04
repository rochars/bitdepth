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

    it("Should write to a provided output array (8 to 8)", function(){
        const samples = [128, 255];
        const output  = new Array(samples.length);
        bitdepth.toBitDepth(samples, "8", "8", output);
        assert.deepEqual(output, [128, 255]);
    });

    it("Should write to a provided output array (8 to 16)", function(){
        const samples = [128, 255];
        const output  = new Array(samples.length);
        bitdepth.toBitDepth(samples, "8", "16", output);
        assert.deepEqual(output, [0, 32767]);
    });

    it("Should write to a provided output array (16 to 8)", function(){
        const samples = [0, 32767];
        const output  = new Array(samples.length);
        bitdepth.toBitDepth(samples, "16", "8", output);
        assert.deepEqual(output, [128, 255]);
    });

    it("Should write to a provided output array (16 to 32)", function(){
        const samples = [0, 32767];
        const output  = new Array(samples.length);
        bitdepth.toBitDepth(samples, "16", "32", output);
        assert.deepEqual(output, [0, 2147483647]);
    });

    it("Should write to a provided output typed array (8 to 16)", function(){
        const samples = [128, 255];
        const output  = new Int16Array(2);
        bitdepth.toBitDepth(samples, "8", "16", output);
        assert.deepEqual(output, [0, 32767]);
    });
});