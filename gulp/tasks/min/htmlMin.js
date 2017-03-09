/*-------------------------------------------------------------
	# HTML MIN
---------------------------------------------------------------*/
/*
	Copy html files to distribution folder
	FILE PATH CONFIG 	:	NONE

	COMMENTS:

*/

module.exports = function(gulp, plugins, config) {
    gulp.task('htmlMin', function() {
        gulp.src(config.target.distMin.html + "*.html")
            .pipe(plugins.htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest(config.target.distMin.html));
    });
};
