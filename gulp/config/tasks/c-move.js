/*-------------------------------------------------------------
	# C-MOVE
---------------------------------------------------------------*/
/*
	Params of configuration for the tasks move.js
	FILE PATH TASKS	 	:	gulp/tasks/other/move.js

	COMMENTS:
		[1] Path of the folder where to move the file
		[2] File to move
		[3] New name to the file
		[4] Enable for replace any text of the file
		[5] Replace text
		[6] Text for replace

*/

module.exports = {
	folder          : "C:/",						/* [1] */
	file            : './src/css/**.css', 			/* [2] */
	newName         : "wefront.css", 				/* [3] */
	replace         : false, 						/* [4] */
	replaceText     : "../images", 					/* [5] */
	replaceWithText : "C:/tmp" 						/* [6] */
};
