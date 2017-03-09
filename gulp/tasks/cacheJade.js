/*-------------------------------------------------------------
	# CACHE JADE
---------------------------------------------------------------*/
/*
	Task for cached file jade
	 FILE PATH CONFIG 	:	none

	 COMMENTS:
		[1] Cached teh file and content
*/

module.exports = function(gulp, plugins, config) {
    gulp.task('cacheJade', function() {
        return 	gulp.src(config.target.jade + "**/*.jade")
				/* [1] */
				.pipe(plugins.cached('jade'));
    });
};
