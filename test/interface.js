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
        bitdepth(data, "8", "8");
        assert.ok(data);
    });

    it("Should write to a provided output array (8 to 8)", function(){
        const samples = [128, 255];
        const output  = new Array(samples.length);
        bitdepth(samples, "8", "8", output);
        assert.deepEqual(output, [128, 255]);
    });

    it("Should write to a provided output array (8 to 16)", function(){
        const samples = [128, 255];
        const output  = new Array(samples.length);
        bitdepth(samples, "8", "16", output);
        assert.deepEqual(output, [0, 32767]);
    });

    it("Should write to a provided output array (16 to 8)", function(){
        const samples = [0, 32767];
        const output  = new Array(samples.length);
        bitdepth(samples, "16", "8", output);
        assert.deepEqual(output, [128, 255]);
    });

    it("Should write to a provided output array (16 to 32)", function(){
        const samples = [0, 32767];
        const output  = new Array(samples.length);
        bitdepth(samples, "16", "32", output);
        assert.deepEqual(output, [0, 2147483647]);
    });

    it("Should write to a provided output typed array (8 to 16)", function(){
        const samples = [128, 255];
        const output  = new Int16Array(2);
        bitdepth(samples, "8", "16", output);
        assert.deepEqual(output, [0, 32767]);
    });

    it("Should write to a provided output typed array (64 to 64)", function(){
        const samples = [-1, 1];
        const output  = new Float64Array(2);
        bitdepth(samples, "64", "64", output);
        assert.deepEqual(output, [-1, 1]);
    });

    it("Should write to a provided output typed array (16 to 16)", function(){
        const samples = [1, 2];
        const output  = new Int16Array(2);
        bitdepth(samples, "16", "16", output);
        assert.deepEqual(output, [1, 2]);
    });
});