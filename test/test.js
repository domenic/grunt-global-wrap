"use strict";

var path = require("path");
var fs = require("fs");
var assert = require("assert");

specify("It works", function () {
    var output = fs.readFileSync(path.resolve(__dirname, "output/output.js"), "utf-8");
    var expected = fs.readFileSync(path.resolve(__dirname, "expected/expected.js"), "utf-8");

    assert.strictEqual(output, expected);
});
