/*-------------------------------------------------------------
	# usemin min
---------------------------------------------------------------*/
/*
	¿?
	FILE PATH CONFIG 	:	NONE

	COMMENTS:

*/

module.exports = function (gulp, plugins, config) {
	gulp.task('useminMin', function () {
		gulp.src(config.target.html + "*.html")
			.pipe(plugins.usemin({
				css: [
					plugins.if(function(file) {
						return file.ext != ".css";
					}, plugins.combineMq({
						beautify: true
					})),
					plugins.cssmin()
				],
				js: [ plugins.uglify()]
			}),plugins.htmlmin({ collapseWhitespace: true }))
			.pipe(gulp.dest(config.target.distMin.html));
	});
};
