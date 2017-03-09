/*-------------------------------------------------------------
	# JS
 ---------------------------------------------------------------*/
/*
 	JS task to process javascript and typescript and contain files

 	FILE PATH CONFIG 	:	gulp/config/tasks/c-js.js

	COMMENTS:
		[1] Var for indicate if compile files typescript or javascript
		[2] Takes the js files components folder, utilities folder  and dev folders and concatenates the files for generate wefront-script.js
		[3] Generate sourcemaps
		[4] Refresh browserSync
 */

module.exports = function (gulp, plugins, config) {
	gulp.task('js', function () {
		/* [1] */
		var jsType = config.js.typescript ? 'ts' : 'js';

		/* [2] */
		gulp.src([config.target.js + 'components/**.*', config.target.js + 'utilities/**.*', config.target.js + 'dev/**.' + jsType])
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.if(config.js.typescript, plugins.typescript({
				outFile: config.js.fileName,
				declaration: true,
				experimentalDecorators: true
			})))
			/* [3] */
			.pipe(plugins.sourcemaps.write())
			.pipe(plugins.concat(config.js.fileName))
			.pipe(gulp.dest(config.target.build.jsDist))
			/* [4] */
			.pipe(plugins.browserSync.stream());
	});
};
