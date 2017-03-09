/*-------------------------------------------------------------
 	# ASSETS MIN
 ---------------------------------------------------------------*/
/*
	Copy all files of assets folder to the folder assets in dist
	FILE PATH CONFIG 	:	NONE

	COMMENTS:

 */

module.exports = function (gulp, plugins, config) {
	gulp.task('assetsMin', function () {
		gulp.src(config.target.build.assets + "**/*")
			.pipe(gulp.dest(config.target.distMin.assets));
	});
};
