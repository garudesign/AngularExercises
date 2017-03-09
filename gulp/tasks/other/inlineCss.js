/*-------------------------------------------------------------
	# INLINE CSS
---------------------------------------------------------------*/
/*
	Task for generate style inline for
	FILE PATH CONFIG 	:	NONE

	COMMENTS:

*/

module.exports = function(gulp, plugins, config) {
    gulp.task('inlineCss', function() {
        var filter = plugins.filter(config.main + 'mail*.html');
        return gulp.src(config.target.html + "*.html")
            .pipe(filter)
            .pipe(plugins.emailBuilder())
            .pipe(gulp.dest(config.target.dist.html));
    });
};
