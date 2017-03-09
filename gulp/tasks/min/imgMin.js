/*-------------------------------------------------------------
	# IMG MIN
---------------------------------------------------------------*/
/*
	Task compress and optimize img
	FILE PATH CONFIG 	:	NONE

	COMMENTS:

*/

module.exports = function(gulp, plugins, config) {
    gulp.task('imgMin', function() {
        return gulp.src(config.target.build.img + "**/*")
            .pipe(plugins.imagemin({
                progressive: true,
                svgPlugins: [{
                    removeViewBox: false
                }],
                use: [pngquant()]
            }))
            .pipe(gulp.dest(config.target.distMin.img));
    });

};
