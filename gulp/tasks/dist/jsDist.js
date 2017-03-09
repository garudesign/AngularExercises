/*-------------------------------------------------------------
	# JS DIST
 ---------------------------------------------------------------*/
/*
	Copy files js of the folders Dist, data, vendor , to the distribution folder
	FILE PATH CONFIG 	:	NONE

	COMMENTS:

 */


module.exports = function (gulp, plugins, config) {
    gulp.task('jsDist', function () {
        return gulp.src([
        			config.target.build.js + '**/*.js',
					'!' + config.target.build.js + 'components/*.js',
					'!' + config.target.build.js + 'utilities/*.js',
					'!' + config.target.build.js + 'dev/*.js'])
            .pipe(gulp.dest(config.target.distNormal.js));
    });
};
