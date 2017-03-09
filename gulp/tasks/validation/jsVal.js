/*-------------------------------------------------------------
	# JS VAL
---------------------------------------------------------------*/
/*
	Task for validate JS
	FILE PATH CONFIG 	:	none

	COMMENTS:
		[1] ESLint ignores files with "node_modules" paths.
			So, it's best to have gulp ignore the directory as well.
 			Also, Be sure to return the stream from the task;
 			Otherwise, the task may end before the stream has finished.

 		[2] eslint() attaches the lint output to the "eslint" property of the file object so it can be used by other modules.
 		[3] eslint.format() outputs the lint results to the console. Alternatively use eslint.formatEach() (see Docs).
 		[4] To have the process exit with an error code (1) on lint error, return the stream and pipe to failAfterError last.
*/

module.exports = function(gulp, plugins, config) {
    gulp.task('jsVal', function() {
        /* [1] */
        return	gulp.src([config.target.js + "**/*", '!node_modules/**'])
					/* [2] */
					.pipe(plugins.eslint())
					/* [3] */
					.pipe(plugins.eslint.format())
					/* [4] */
					.pipe(plugins.eslint.failAfterError());
    });
};
