/*-------------------------------------------------------------
	# CSS DIST
 ---------------------------------------------------------------*/
/*
 		PostCSS for generate distribution version
		FILE PATH CONFIG 	:	NONE

		COMMENTS:
			[1] Combine all media queries the .css file

 */

module.exports = function (gulp, plugins, config) {
	gulp.task('cssDist', function () {
		gulp.src(config.target.build.css + "**/*.css")
			/* [1] */
			.pipe(plugins.if(function (file) {
				return file.ext != ".css";
				},
				plugins.combineMq({
					beautify: true
				})))
			.pipe(gulp.dest(config.target.distNormal.css));
	});
};
