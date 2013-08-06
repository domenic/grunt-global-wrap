# Global-ify Your CommonJS, via Grunt

This is a [Grunt](http://gruntjs.com/) plugin to expose your CommonJS libraries as globals on `window`. It allows you
to produce build artifiacts that are readily usable by people who haven't embraced the magnificence of
[browserify](https://github.com/substack/node-browserify). You point it at your main module, and it exposes that as a
specified property of the global, bundling up everything it requires (including any native module shims) into the
output file.

It's based on [global-wrap](https://npmjs.org/package/global-wrap), if you want this functionality outside of a Grunt
plugin.

## Usage

It takes four options, three of which are required:

- `main`: the file path of your main module, which you want to expose as a global.
- `global`: the name of the global you want to expose.
- `dest`: the place where your new global-exposing file should be written.
- `bundleOptions`: any browserify [bundle options](https://github.com/substack/node-browserify#bbundleopts-cb) you want
  to pass along, like `debug` or `detectGlobals`. This is the optional option.

Here's a quick sample:

```js
grunt.loadNpmTasks("grunt-global-wrap");

grunt.initConfig({
    globalwrap: {
        releaseArtifactsTarget: {
            main: "my-main-module.js",
            global: "myModule",
            dest: "release/my-module.global.js",
            bundleOptions: { debug: true }
        }
    }
});
```
