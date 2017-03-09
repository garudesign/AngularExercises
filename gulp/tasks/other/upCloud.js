/*-------------------------------------------------------------
	# UP CLOUD
---------------------------------------------------------------*/
/*
	Task for upload the cloud.
	FILE PATH CONFIG 	:	NONE

	COMMENTS:
*/

module.exports = function(gulp, plugins, config) {
    gulp.task('upCloud', function() {
        return gulp.src(config.cloud.css)
        .pipe(plugins.rename(config.cloud.newNameCss))
        .pipe(gulp.dest(config.cloud.folder));
    });
};
