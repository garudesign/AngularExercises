/*-------------------------------------------------------------
	# JADE
---------------------------------------------------------------*/
/*
	JADE task to process files and generates our templates html

	FILE PATH CONFIG 	:	GulP/config/tasks/c-jade.js

	COMMENTS:
		[1] Take only the main and partials that have been changed.
		[2] Caches the file contents.
		[3] Find the files it depends on those who have been changed
		[4] Ignore the files it finds with underscores
		[5] Removes default relative paths maintained by Gulp
 */


module.exports = function(gulp, plugins, config, functions) {
    gulp.task('jade', function() {
        return 	gulp.src(config.target.jade + "**/*.jade")
					.pipe(plugins.plumber({
						errorHandler: function(err) {
							return functions.errorHandler(gulp, plugins, config, err, this);
						}
					}))
					/* [1] */
					.pipe(plugins.changed(config.build, { extension: '.html' }))
					/* [2] */
					.pipe(plugins.cached('jade'))
					/* [3] */
					.pipe(plugins.jadeInheritance({ basedir: config.target.jade }))
					.pipe(plugins.filter(function(file) {
						/* [4] */
						if(file.relative.search(config.jade.templatesFolderName) != -1)
							return file.relative;
					}))

					.pipe(plugins.jade({ pretty: true }))
					/* [5] */
					.pipe(plugins.flatten())
					.pipe(gulp.dest(config.target.build.html))
					.pipe(plugins.browserSync.stream());
	});
};
