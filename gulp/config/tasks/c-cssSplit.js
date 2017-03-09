/*------------------------------------------------------------
	# C-CSS SPLIT
 --------------------------------------------------------------*/
/*
		FILE PATH TASK 	:	gulp/tasks/dist/cssSplit.js

		COMMENTS:
			[1] Enable and disable task
			[2] Files on which the task runs
			[3] Selectors max for files
			[4] Separate the media-queries in different files
			[5] Suffix to be added to the end of files to name. Example dfront-1.css

 */


module.exports = {
	enabled	 		: 	true,		/* [1] */
	files			:	"**/*.css", /* [2] */
	maxSelectors	: 	4000, 		/* [3] */
	mediaQueries	: 	"separate", /* [4] */
	suffix			:	"-" 		/* [5] */
};
