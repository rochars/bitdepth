/*!
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * 
 */

var bitDepth = bitDepth || require('../../test/loader.js');
var assert = assert || require('assert');
var testFunc;

describe('errors', function() {
        
    it("throws an error if the input bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "57", new Float64Array(), "16");
        };
        assert.throws(testFunc, /Invalid bit depth./);
    });

    it("throws an error if the output bit depth is not valid", function () {
        testFunc = function() {
            bitDepth([], "16", new Float64Array(), "57");
        };
        assert.throws(testFunc, /Invalid bit depth./);
    });
});
