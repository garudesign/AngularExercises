/*-------------------------------------------------------------
	# C-SERVER
---------------------------------------------------------------*/
/*
	Config for server
	FILE PATH CONFIG 	:	gulp/task/server.js

	COMMENTS:
		[1] Path where the server starts
		[2] Port to server
		[3] True, enable to display of the root, false exec index.
		[4] True, enable routing with angular system. False, routing for default
*/

var config    = require('../config.js')();

module.exports = {
	folder			: 	config.build, 	/* [1] */
	port			: 	7000, 			/* [2] */
	directory		: 	true, 			/* [3] */
	angularRoute	: 	true			/* [4] */
};
