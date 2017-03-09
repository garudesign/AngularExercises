/*-------------------------------------------------------------
	# SCSS
 ---------------------------------------------------------------*/
/*
		Files task SCSS
 		FILE PATH CONFIG 	:	gulp/config/tasks/c-scss.js

		COMMENTS:
			[1] If the var "versionIE" is lower tahn 8, aplly pixrem
			[2] Refresh browserSync

 */

module.exports = function(gulp, plugins, config, functions) {
	var outputStyle = config.scss.outputStyle;
	gulp.task('scss', function() {
		return  gulp.src(config.target.scss + "*.scss")
					.pipe(plugins.plumber({
						errorHandler: function(err) {
							return functions.errorHandler(gulp, plugins, config, err, this);
						}
					}))
					.pipe(plugins.changed(config.target.css))
					.pipe(plugins.sourcemaps.init())
					.pipe(plugins.sass({outputStyle: outputStyle}))
					.pipe(plugins.autoprefixer({
						browsers: 'last 2 versions',
						cascade: false
					}))
					/* [1] */
					.pipe(plugins.if(config.scss.versionIE <= 8, plugins.pixrem()))
					.pipe(plugins.sourcemaps.write())
					.pipe(gulp.dest(config.target.build.css))
					/* [2] */
					.pipe(plugins.browserSync.stream());
	});
};
