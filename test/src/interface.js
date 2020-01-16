/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * 
 */

var bitDepth = bitDepth || require('../../test/loader.js');
var assert = assert || require('assert');

describe("interface", function() {

    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "8", output, "8");
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "16", output, "8");
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "32f", output, "8");
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "8", output, "32f");
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "32f", output, "64");
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "32f", output, "64");
        assert.ok(output);
    });
    it("truncate fp samples when converting to int", function() {
        const data = new Float64Array([300,-2]);
        var output = new Float64Array(data.length);
        bitDepth(data, "64", output, "8");
        assert.deepEqual(output, new Float64Array([255, 0]));
    });
});