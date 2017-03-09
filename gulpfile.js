var gulp      = require('gulp');
var config    = require('./gulp/config/config.js')();
var functions = require('./gulp/config/functions.js');
//por defecto gulp-load-plugins solo carga los modulos con el prefijo gulp-, con pattern: '*' cargará todos
var plugins   = require('gulp-load-plugins')({
	pattern: '*'
});





/***************************************************************************
	#TAREAS PRINCIPALES
***************************************************************************/

//INICIALIZA EL SERVER
require(config.tasks + '/server')(gulp, plugins, config);

//WATCHES (vigila rutas y ejecuta acciones cuando detecta cambios)
require(config.tasks + '/watches')(gulp, plugins, config);

//CACHEA POR PRIMERA VEZ EL JADE PARA EVITAR ESPERAS EN LA PRIMERA COMPILACIÓN
require(config.tasks + '/cacheJade')(gulp, plugins, config);






/***************************************************************************
    #BUILD
***************************************************************************/

// COMPILA JADE
require(config.buildTasks + '/jade')(gulp, plugins, config, functions);

// compila y prefija sass a css y lo anto inyecta en los navegadores
require(config.buildTasks + '/scss')(gulp, plugins, config, functions);

// compila javascript
require(config.buildTasks + '/js')(gulp, plugins, config);

// construye sprite
require(config.buildTasks + '/sprite')(gulp, plugins, config);

// construye sprite svg
require(config.buildTasks + '/spriteSvg')(gulp, plugins, config);

// Construye el bundle de SystemJS
require(config.buildTasks + '/bundle')(gulp, plugins, config);





/***************************************************************************
	#DISTRIBUCION
***************************************************************************/

//LIMPIA LA CARPETA DE DISTRIBUCON
require(config.distTasks + '/cleanDist')(gulp, plugins, config);

//CREA LA CARPETA DE DISTRIBUCIÓN DE HTML
require(config.distTasks + '/htmlDist')(gulp, plugins, config);

//CREA LA CARPETA DE DISTRIBUCIÓN DE CSS
require(config.distTasks + '/cssDist')(gulp, plugins, config);

//CREA LA CARPETA DE DISTRIBUCIÓN DE JS
require(config.distTasks + '/jsDist')(gulp, plugins, config);

//CREA LA CARPETA DE DISTRIBUCIÓN DE IMG
require(config.distTasks + '/assetsDist')(gulp, plugins, config);




/***************************************************************************
	#MINIFICACION
***************************************************************************/

//LIMPIA LA CARPETA MIN
require(config.minTasks + '/cleanMin')(gulp, plugins, config);

//COMPILA LOS ARCHIVOS HTML
require(config.minTasks + '/htmlMin')(gulp, plugins, config);

//COMPILA LOS ARCHIVOS CSS
require(config.minTasks + '/cssMin')(gulp, plugins, config);

//COMPILA LOS ARCHIVOS JS
require(config.minTasks + '/jsMin')(gulp, plugins, config);

//COMPILA LOS ARCHIVOS IMG
require(config.minTasks + '/imgMin')(gulp, plugins, config);

//COMPILA LOS ARCHIVOS STATIC
require(config.minTasks + '/assetsMin')(gulp, plugins, config);

//Agrupa ficheros
require(config.minTasks + '/useminMin')(gulp, plugins, config);





/***************************************************************************
	#VALIDACIÓN
***************************************************************************/

//COMPRUEBA QUE EL CODIGO JS ESTA CORRECTAMENTE ESCRITO
require(config.validationTasks + '/jsVal')(gulp, plugins, config);

//VALIDA HTML
require(config.validationTasks + '/htmlVal')(gulp, plugins, config);

//VALIDA CSS
require(config.validationTasks + '/cssVal')(gulp, plugins, config);

//VALIDA SCSS
require(config.validationTasks + '/scssVal')(gulp, plugins, config, functions);





/***************************************************************************
	#OTROS
***************************************************************************/

//CREA CAPTURAS DE PANTALLA DE LAS PAGINAS INDICADAS
require(config.otherTasks + '/shot')(gulp, plugins, config);

//MUEVE UN ARCHIVO DE CARPETA Y REEMPLAZA TEXTO DE FORMA OPCIONAL
require(config.otherTasks + '/move')(gulp, plugins, config, functions);

//INYECTA EL CODIGO CSS EN LINEA (para la construccion de maquetas en clientes de  correo)
require(config.otherTasks + '/inlineCss')(gulp, plugins, config);




/***************************************************************************
	#TAREAS AGRUPADAS
***************************************************************************/


// COMPILA TODOS LOS ARCHIVOS
gulp.task('prebuild', [
	'scss',
	'jade',
	'js'
]);

// CREA LA VERSION DE DISTRIBUCION SIN MINIFICAR
gulp.task('dist', [
	'prebuild',
	'cleanDist',
	'cssDist',
	'htmlDist',
	'jsDist',
	'assetsDist'
]);

// CREA LA VERSION DE DISTRIBUCION MINIFICADA
gulp.task('distMin', [
	'prebuild',
	'cleanMin',
	'assetsMin',
	'useminMin'
]);

// MINIFICA CSS Y JS
gulp.task('min', [
	'cssmin',
	'jsmin'
]);

// EJECUTA EL SERVIDOR CON BROWSER SYNC Y COMPILA LOS ARCHIVOS
gulp.task('server', [
	'prebuild',
	'browserSync',
	'watch'
]);

// EJECUTA EL SERVIDOR CON BROWSER SYNC
gulp.task('default', [
	'browserSync',
	'watch',
	'cacheJade'
]);

// EJECUTA EL SERVIDOR CON CONNECT Y COMPILA LOS ARCHIVOS
gulp.task('cServer', [
	'prebuild',
	'connect',
	'watch'

]);

// EJECUTA EL SERVIDOR
gulp.task('c', [
	'connect',
	'watch',
	'cacheJade'
]);

// VALIDA LOS ARCHIVOS
gulp.task('validation', [
	'cssVal',
	'jsVal',
	'htmlVal'
]);
