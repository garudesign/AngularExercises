# [gulp](https://github.com/gulpjs/gulp)-dest-clean [![Build Status](https://secure.travis-ci.org/DiamondeX/gulp-dest-clean.png?branch=master)](https://travis-ci.org/DiamondeX/gulp-dest-clean) [![NPM version](https://badge.fury.io/js/gulp-dest-clean.png)](http://badge.fury.io/js/gulp-dest-clean)

> The gulp plugin `gulp-dest-clean` allows you to remove files from the destination folder which do not exist in the stream and do not match optionally supplied patterns. Based on [del](https://github.com/sindresorhus/del).

Though, there is other ways to remove some files or folders from the destination or any other folder, this plugin will make it more comfortable in certain cases and the code of build file more readable.

## Install

Install with [npm](https://npmjs.org/package/gulp-dest-clean).

```bash
npm install --save-dev gulp-dest-clean
# or
npm i -D gulp-dest-clean
```

## Examples

Imagine the following file structure:

```
.
├── build
│   ├── js
│   │   └── ...
│   └── img
│       ├── foo.png
│       ├── bar.png
│       ├── baz
│       │   ├── a.png
│       │   ├── b.png
│       │   └── c.png
│       └── extras
│           ├── leaf.png
│           ├── root.png
│           └── flower.png
└── src
├── js
│   └── ...
└── img
├── foo.png
├── floor.png
└── baz
├── a.png
└── c.png
```
Suppose you want to synchronize `build/img` with `src/img`, but preserve  `build/img/extras` and it's contents to get following file structure:

```
.
├── build
│   ├── js
│   │   └── ...
│   └── img
│       ├── foo.png
│       ├── floor.png
│       ├── baz
│       │   ├── a.png
│       │   └── c.png
│       └── extras
│           ├── leaf.png
│           ├── root.png
│           └── flower.png
└── src
├── js
│   └── ...
└── img
├── foo.png
├── floor.png
└── baz
├── a.png
└── c.png
```

Then gulpfile like this will help you:

```js
var gulp = require('gulp');
var clean = require('gulp-dest-clean');

var imgSrc = 'src/img/**';
var imgDest = 'build/img';

gulp.task('images', function () {
return gulp.src(imgSrc)
.pipe(clean(imgDest, 'extras/**'))
.pipe(newer(imgDest))
.pipe(imagemin())
.pipe(gulp.dest(imgDest));
});
```
Please note that old (or, in other words, unchanged in `src/img`) files are not deleted nor overwritten in `build/img`.

##### For safety files and folders outside the current working directory can be removed only with option `force` set to **`true`**.

Clean as a dependency:

```js
var gulp = require('gulp');
var clean = require('gulp-clean');

var jsSrc = 'src/scripts/*.js';
var jsDest = 'dist/js';

gulp.task('clean-scripts', function () {
return gulp.src(jsSrc, {read: false})
.pipe(clean(jsDest));
});

gulp.task('scripts', ['clean-scripts'], function () {
gulp.src(jsSrc)
.pipe(gulp.dest(jsDest));
});

gulp.task('default', ['scripts']);
```
Option `read:false` prevents gulp from reading the contents of the file and makes this task a lot faster. If you need the file and its contents after cleaning in the same stream, do not set the read option to `false`.

Make sure to return the stream so that gulp knows the clean task is [asynchronous](https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support) and waits for it to terminate before starting the dependent one.

## API

### clean(destPath[, exclude[, options]])

A list of deleted files so far is available as a `deleted` property on the stream.

#### destPath

*Required*
Type: `string`

#### exclude

Type: `string` or `array`

See supported minimatch [patterns](https://github.com/isaacs/minimatch#usage).

- [Pattern examples with expected matches](https://github.com/sindresorhus/multimatch/blob/master/test.js)
- [Quick globbing pattern overview](https://github.com/sindresorhus/multimatch#globbing-patterns)

**Remember that actual patterns will be negated** and then negative ones will be supplemented with all parent folders negated. So you don't need to supply additional `'parent'` pattern to preserve `'parent/child.file'`.

#### options

Type: `object`

See the `del` [options](https://github.com/sindresorhus/del#options).

#### options.ext

Type: `string` (e.g. `".css"`) or `object` (e.g. `{".less": ".css", ".yml": ".json"}`)
Default: `null`

If `string` is supplied, then extension of each file in the stream will be changed to supplied before exclusion from deletion.
If `object` is supplied, then for each file with extension matching some of `object`'s key that extension will be changed to extension in corresponding `object`'s value before exclusion from deletion.

#### options.verbose

Type: `boolean`
Default: `false`

Output all patterns supplied to [del](https://github.com/sindresorhus/del) as well as deleted files.

## TODO

- [ ] create tests file
- [ ] use travis CI

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Ruslan Zhomir
