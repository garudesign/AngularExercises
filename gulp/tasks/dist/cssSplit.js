/*-------------------------------------------------------------
	# CSS SPLIT
 ---------------------------------------------------------------*/
/*
 		If IE version is lower to IE9 or less, then extract to media-queries in separate files
		FILE PATH CONFIG 	:	gulp/config/tasks/c-cssSplit.js

		COMMENTS:

 */


module.exports = function(gulp, plugins, config) {
	gulp.task('cssSplit', function() {
		gulp.src(config.target.build.css + config.cssSplit.files)
			.pipe(plugins.if(
				config.cssSplit.enabled && config.scss.versionIE <= 9,
				plugins.extractMediaQueries()
			))
			.pipe(gulp.dest('tmp'));
	});
};
