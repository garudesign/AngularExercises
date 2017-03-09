/*-------------------------------------------------------------
	# HTML VAL
---------------------------------------------------------------*/
/*
	Task for validate HTML
	FILE PATH CONFIG 	:	none

	COMMENTS:
*/

module.exports = function(gulp, plugins, config) {
	gulp.task('htmlVal', function() {
		return 	gulp.src(config.target.html + "*.html")
					.pipe(plugins.htmlhint())
					.pipe(plugins.htmlhint.reporter());
	});
};


