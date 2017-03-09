/*-------------------------------------------------------------
	# SHOT
---------------------------------------------------------------*/
/*
	Task for generate snapshots of the model made
	FILE PATH CONFIG 	:	NONE

	COMMENTS:
*/


module.exports = function(gulp, plugins, config) {
    gulp.task('shot', function() {
        return new plugins.pageres({ delay: 1 })
            .src('localhost:6969', ['320x568', '768x1024', '1024x768'], {
                filename: '<%= date %> - <%= url %>-<%= size %><%= crop %>'
            })
            .dest(config.screenFolder)
        .run(function(err) {
            if (err) {
                throw err;
            }
            console.log('Tarea culminada con exito!');
        });
    });
};
