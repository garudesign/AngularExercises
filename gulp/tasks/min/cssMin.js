/*-------------------------------------------------------------
	# CSS MIN
---------------------------------------------------------------*/
/*
	PostCSS for generate distribution version MIN
	FILE PATH CONFIG 	:	NONE

	COMMENTS:
		[1] Combine all media queries the .css file

*/


module.exports = function(gulp, plugins, config) {
    gulp.task('cssMin', function() {
        gulp.src(config.target.build.css + "**/*.css")
			/* [1] */
			.pipe(plugins.if(function(file) {
				return file.ext != ".css";
				}, plugins.combineMq({
					beautify: true
				})
			))
			.pipe(plugins.cssmin())
            .pipe(gulp.dest(config.target.distMin.css));
    });
};
