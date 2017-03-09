/*-------------------------------------------------------------
	# SCSS VAL
---------------------------------------------------------------*/
/*
	Task for validate SCSS
	FILE PATH CONFIG 	:	gulp/config/tasks/c-scssVal.js

	COMMENTS:
		[1] Prevent break the buffer
*/

module.exports = function (gulp, plugins, config, functions) {
	gulp.task('scssVal', function () {
		return	gulp.src([
					config.target.scss + "*/*.scss",
					'!' + config.target.scss + 'tools/*',
					'!' + config.target.scss + 'generic/*'
				])
				.pipe(plugins.if(
					config.scssVal.enabled,
					plugins.cached('scsslint')
				))
				.pipe(plugins.scssLint({
					'config': config.scssVal.optionsPath,
					/* [1] */
					maxBuffer: 30000000000000000000 * 1024
				}))
				.pipe(plugins.scssLint.failReporter("E"))
	});
};
