/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * 
 */

var chai = chai || require("chai");
var bitDepth = bitDepth || require('./loader.js');
var expect = chai.expect;
var testFunc;

describe('errors', function() {
        
    it("throws an error if the input bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "57", "16");
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });

    it("throws an error if the output bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "16", "57");
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });
});
