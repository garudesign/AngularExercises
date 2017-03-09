

module.exports = function (gulp, plugins, config) {
	gulp.task('watch', function () {
		// Crea variable para que solo se escuchen los tipos especificos de archivos
		var jsType = config.js.typescript ? "ts" : "js";

		// Si esta habilitada la variable lint, validara cada js que guardemos
		if (config.js.lint) {
			gulp.watch([config.target.js + "**/*." + jsType, "!" + config.target.js + "vendor/**"], ['jsVal', 'js']).on('change', plugins.browserSync.reload);
		} else {
			/*plugins.watch(config.target.js + "**", function () {

			 gulp.start('js');
			 });*/
			if(config.js.typescript){
				gulp.watch([config.target.js + "**/*." + jsType, config.target.js + config.target.js + "**/*.js", "!" + config.target.js + "vendor/**", "!" + config.target.js + "dist/**"], ['js']).on('change', plugins.browserSync.reload);
			}else{
				gulp.watch([config.target.js + "**/*." + jsType, "!" + config.target.js + "vendor/**", "!" + config.target.js + "dist/**"], ['js']).on('change', plugins.browserSync.reload);
			}


		}

		// Crea un watch avanzado para capturar los cambios en statics
		//plugins.watch("src/assets/**", function () {
		//	gulp.start('static');
		//});

		// gulp.watch('css/**/*.css', ['css']);

		// Si esta habilitada la variable enabled validara cada scss que guardemos con las respectivas buenas practicas
		if (config.scssVal.enabled) {
			gulp.watch(config.target.scss + "**/*.scss", ['scss', 'scssVal']);
		} else {
			gulp.watch(config.target.scss + "**/*.scss", ['scss']);
		}
		gulp.watch(config.target.jade + "**/*.jade", ['jade']);
	});
};
