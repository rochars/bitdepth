/*!
 * Wavefile
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * 
 */

var assert = require("assert");

describe("interface", function() {

    let bitdepth = require("../test/loader.js");
    
    it("Should have the toBitDepth function available", function() {
        data = ["0"];
        bitdepth.toBitDepth(data, "8", "8");
        assert.ok(data);
    });
});
