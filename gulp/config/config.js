/*-------------------------------------------------------------
	# CONFIG
---------------------------------------------------------------*/
/*
	Config file for path, task and config's files

	COMMENTS:
*/


module.exports = function () {
	var		main 			= 	"src/",
			d 				= 	new Date(),
			date 			= 	d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2),
			dist 			= 	"dist/" + date + "/",
			build 			= 	main,
			distNormal 		= 	dist + "normal/",
			distMin 		= 	dist + "min/",

			/* GENERAL PATH OF THE BASIC FOLDER  */
			target = {
				html		: 	main,
				jade		:	main + 'jade/',
				scss		: 	main + 'scss/',
				css			:	main + 'css/',
				js			:	main + "js/",
				img			: 	main + "assets/img/",
				assets		: 	main + "assets/",
				bower		: 	main + "bower_components/",


				/* PATH FOR THE CREATE OF DIST NORMAL */
				distNormal: {
					html	: 	distNormal,
					css		: 	distNormal + "css/",
					js		: 	distNormal + "js/",
					assets	: 	distNormal + "assets/",
					bower	: 	distNormal + "bower_components/"
				},

				/* PATH FOR THE CREATE OF DIST */
				distMin: {
					html	: 	distMin,
					css		: 	distMin + "css/",
					js		: 	distMin + "js/",
					assets	: 	distMin + "assets/",
					bower	: 	distMin + "bower_components/"
				},

				/* PATH FOR THE CREATE OF BUILD */
				build: {
					html	: 	build,
					css		: 	build + "css/",
					js		: 	build + "js/",
					assets	: 	build + "assets/",
					jsDist	:	build + 'js/dist'
				}
			},

			/* PATH OF THE TASK  */
			tasks 			= 	"./gulp/tasks",
			buildTasks 		= 	"./gulp/tasks/build",
			distTasks 		= 	"./gulp/tasks/dist",
			minTasks 		= 	"./gulp/tasks/min",
			otherTasks 		= 	"./gulp/tasks/other",
			validationTasks = 	"./gulp/tasks/validation",
			screenFolder 	= 	"./gulp/screenshots",

			/* FILES CONFIG TO THE TASKS*/
			cssVal 		= 	require('./tasks/c-cssVal.js'),
			move 		= 	require('./tasks/c-move.js'),
			scss 		= 	require('./tasks/c-scss.js'),
			scssVal 	= 	require('./tasks/c-scssVal.js'),
			jade 		= 	require('./tasks/c-jade.js'),
			js 			= 	require('./tasks/c-js.js'),
			server 		= 	require('./tasks/c-server.js'),
			cssSplit 	=	require('./tasks/c-cssSplit.js');

	var 	config = {
				main			: 	main,
				dist			: 	dist,
				build			: 	build,
				distNormal		: 	distNormal,
				distMin			: 	distMin,
				tasks			: 	tasks,
				buildTasks		: 	buildTasks,
				distTasks		: 	distTasks,
				minTasks		: 	minTasks,
				otherTasks		: 	otherTasks,
				validationTasks	:	validationTasks,
				screenFolder	: 	screenFolder,
				target			: 	target,
				cssVal			: 	cssVal,
				move			: 	move,
				scss			: 	scss,
				scssVal			: 	scssVal,
				jade			: 	jade,
				js				: 	js,
				server			: 	server,
				cssSplit		: 	cssSplit
		};
		return config;
};
