/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * 
 */

var bitDepth = bitDepth || require('./loader.js');
var assert = assert || require('assert');
var testFunc;

describe('errors', function() {
        
    it("throws an error if the input bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "57", "16");
        };
        assert.throws(testFunc, /Invalid bit depth./);
    });

    it("throws an error if the output bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "16", "57");
        };
        assert.throws(testFunc, /Invalid bit depth./);
    });
});
