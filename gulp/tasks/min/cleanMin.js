/*-------------------------------------------------------------
	# CLEAN MIN
 ---------------------------------------------------------------*/
/*
	Delete files min folder generate in this day
	FILE PATH CONFIG 	:	NONE

	COMMENTS:
 */

module.exports = function(gulp, plugins, config) {
    gulp.task('cleanMin', function() {
        return plugins.del.sync([
            config.distMin + "**/*"
        ]);
    });
};
