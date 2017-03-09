/*-------------------------------------------------------------
	# HTML DIST
 ---------------------------------------------------------------*/
/*
	Copy html files to distribution folder
 	FILE PATH CONFIG 	:	NONE

 	COMMENTS:

 */

module.exports = function(gulp, plugins, config) {
    gulp.task('htmlDist', function() {
        gulp.src(config.target.build.html + "*.html")
            .pipe(gulp.dest(config.target.distNormal.html));
    });
};
