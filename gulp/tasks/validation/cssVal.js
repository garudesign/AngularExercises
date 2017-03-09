/*-------------------------------------------------------------
	# CSS VAL
---------------------------------------------------------------*/
/*
	Task for validate css
	FILE PATH CONFIG 	:	gulp/config/tasks/c-cssVal.js

	COMMENTS:
*/

module.exports = function(gulp, plugins, config) {
	gulp.task('cssVal', function() {
		var warnings = config.cssVal.optionsPath!=="" ? config.cssVal.optionsPath : "" ;
		return 	gulp.src(config.target.css + "*.css")
					.pipe(plugins.csslint(warnings))
					.pipe(plugins.csslint.reporter());
	});
};
