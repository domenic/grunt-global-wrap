"use strict";

var globalWrap = require("global-wrap");
var description = require("../package.json").description;

module.exports = function (grunt) {
    grunt.registerMultiTask("globalwrap", description, function () {
        var options = this.data;
        var done = this.async();

        if (!options.main) {
            return grunt.fail.warn("No \"main\" option specified for globalwrap task.");
        }
        if (!options.global) {
            return grunt.fail.warn("No \"global\" option specified for globalwrap task.");
        }
        if (!options.dest) {
            return grunt.fail.warn("No \"dest\" option specified for globalwrap task.");
        }

        globalWrap(options, function (err, output) {
            if (err) {
                return done(err);
            }

            grunt.file.write(options.dest, output);
            done();
        });
    });
};
