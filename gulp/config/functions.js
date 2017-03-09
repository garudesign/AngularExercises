/*-------------------------------------------------------------
	# FUNCTIONS
---------------------------------------------------------------*/
/*
	Functions for task

	COMMENTS:
		[1] Wait with callback, until user action is taken against notification.
		[2] Enable sound
		[3] It's show message for console
		[4] Emit prevent kill the process
*/

module.exports = {
    errorHandler: function (gulp, plugins, config, err, nonStopTheParty) {
        plugins.nodeNotifier.notify({
            title: 'Yo que tu miraria la consola...',
            message: 'Solo por si las moscas ;)',
            /* [1] */
			wait: true
        });
		/* [2] */
        plugins.beepbeep();
		/* [3] */
        console.error(plugins.chalk.red('\n' + err.message + '\n'));
		/* [4] */
        nonStopTheParty.emit("end");
    },
    warningHandler: function (gulp, plugins, config) {
        /* [2] */
		plugins.beepbeep([50, 50]);
    },
    replaceText: function (gulp, plugins, stream, newName, replaceText, replaceWithText, folder) {
        return stream
            .pipe(plugins.replace(replaceText, replaceWithText))
            .pipe(plugins.rename(newName))
            .pipe(gulp.dest(folder));
    },
    clean: function (plugins, url) {
        return plugins.del.sync([
            url
        ]);
    }
};
