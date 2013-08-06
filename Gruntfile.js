"use strict";

module.exports = function (grunt) {
    grunt.loadTasks("tasks");
    grunt.loadNpmTasks("grunt-simple-mocha");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.initConfig({
        globalwrap: {
            test: {
                main: "test/input/main.js",
                global: "theTestGlobal",
                dest: "test/output/output.js",
                bundleOptions: { detectGlobals: false }
            }
        },
        clean: { test: "test/output/*" },
        simplemocha: { test: "test/test.js" }
    });

    grunt.registerTask("test", ["clean", "globalwrap", "simplemocha", "clean"]);
};
