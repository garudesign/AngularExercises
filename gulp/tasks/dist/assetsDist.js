/*-------------------------------------------------------------
	# ASSETS DIST
 ---------------------------------------------------------------*/
/*
 		Copy all files of assets folder to the folder assets in dist
		FILE PATH CONFIG 	:	NONE

		COMMENTS:
 */

module.exports = function (gulp, plugins, config) {
    gulp.task('assetsDist', function () {
        gulp.src(config.target.build.assets + "**/*")
            .pipe(gulp.dest(config.target.distNormal.assets));
    });
};
