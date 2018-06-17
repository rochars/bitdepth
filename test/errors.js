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
            bitDepth([], "57", "16");
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });

    it("should throw an error if the output bit depth is not valid",
            function () {
        testFunc = function() {
            bitDepth([], "16", "57");
        };
        expect(testFunc).to.throw("Invalid bit depth.");
    });
});
