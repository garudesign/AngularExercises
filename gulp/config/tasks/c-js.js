/*-------------------------------------------------------------
 # C-JS
 ---------------------------------------------------------------*/
/*
	 Files config JS
	 FILE PATH TASKS 	:	gulp/tasks/build/js.js

	 COMMENTS:
		 [1] Default [false]. Enable/disable compilation of typescript.
		 [2] Output file name
		 [3] Default [false]. Enable/disable JS LINT

 */

module.exports = {
    typescript		:	false, 					/* [1] */
    fileName		: 	"wefront-script.js", 	/* [2] */
	lint			: 	false, 					/* [3] */
};
