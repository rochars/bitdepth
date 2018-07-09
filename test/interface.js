/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * 
 */

var chai = chai || require("chai");
var bitDepth = bitDepth || require('./loader.js');
var assert = chai.assert;
var expect = chai.expect;

describe("interface", function() {

    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "8", "8", output);
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "16", "8", output);
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "32f", "8", output);
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "8", "32f", output);
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "32f", "64", output);
        assert.ok(output);
    });
    it("have the bitDepth function available", function() {
        const data = new Float64Array([1,-1]);
        var output = new Float64Array(data.length);
        bitDepth(data, "32f", "64", output);
        assert.ok(output);
    });
    it("throw an error if the output bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "16", "57",[]);
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });
});