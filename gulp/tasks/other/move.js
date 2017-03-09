/*-------------------------------------------------------------
	# MOVE
---------------------------------------------------------------*/
/*
	Task for move files of the one folder to other with params of configuration
	FILE PATH CONFIG 	:	gulp/config/tasks/c-move.js

	COMMENTS:

*/

module.exports = function(gulp, plugins, config, functions) {
	gulp.task('move', function() {
		var stream = gulp.src(config.move.file);
		if (config.move.replace) {
			functions.replaceText(gulp, plugins, stream, config.move.newName, config.move.replaceText, config.move.replaceWithText, config.move.folder);
		} else {
			stream
				.pipe(plugins.rename(config.move.newName))
				.pipe(gulp.dest(config.move.folder));
		}
	});
};
