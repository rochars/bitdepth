/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * 
 */

let chai = require("chai");
let expect = chai.expect;

describe('errors', function() {
    
    let fs = require("fs");
    let bitDepth = require("../test/loader.js");
    let testFunc;
        
    it("should throw an error if the input bit depth is not valid",
            function () {
        testFunc = function() {
            bitDepth.toBitDepth([], "49", "16");
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });

    it("should throw an error if the output bit depth is not valid",
            function () {
        testFunc = function() {
            bitDepth.toBitDepth([], "16", "49");
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });
});
