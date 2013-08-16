"use strict";

var path = require("path");
var fs = require("fs");
var assert = require("assert");
var jsdom = require("jsdom");

specify("It works", function (done) {
    jsdom.env({
        html: "<!DOCTYPE html><html><head><title>Grunt Global Wrap Test</title></head><body></body></html>",
        scripts: [path.resolve(__dirname, "output/output.js")],
        src: ["window.theTestGlobal();"],
        done: function (err, window) {
            assert.ifError(err);
            assert.strictEqual(window.testData, "beep boop; typeof process is: undefined");
            done();
        }
    });
});
