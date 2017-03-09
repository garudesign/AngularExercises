/*-------------------------------------------------------------
	# SERVER
---------------------------------------------------------------*/
/*
	Task for server
	FILE PATH TASK 	:	gulp/config/tasks/c-server.js

	COMMENTS:
		[1] Run server
*/

module.exports = function (gulp, plugins, config) {
	var middle = config.js.angularRoute == true ? plugins.connectHistoryApiFallback() : false;
	gulp.task('browserSync', function () {
		/* [1] */
		plugins.browserSync.init({
			server: {
				baseDir: config.server.folder,
			},
			middleware: middle,
			port: config.server.port,
			directory: config.server.directory,
			ui: false
		});
	});

	gulp.task('connect', function () {
		/* [1] */
		plugins.connect.server({
			root: config.build,
			port: config.server.port
		});
	});
};
