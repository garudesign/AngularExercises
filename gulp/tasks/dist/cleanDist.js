/*-------------------------------------------------------------
	# CLEAN DIST
 ---------------------------------------------------------------*/
/*
 		Delete files normal folder generate in this day
		FILE PATH CONFIG 	:	NONE

		COMMENTS:
 */

module.exports = function(gulp, plugins, config) {
    gulp.task('cleanDist', function() {
        return plugins.del.sync([
            config.distNormal + "**/*"
        ]);
    });
};
