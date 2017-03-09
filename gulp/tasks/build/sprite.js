/*-------------------------------------------------------------
 	# SPRITE
 ---------------------------------------------------------------*/
/*
	 Files task SCSS
	 FILE PATH CONFIG 	:	NONE

	 COMMENTS:
		 [1] Source path of the sprite images
		 [2] Output path for the sprite
		 [3] Output path for the CSS

 */

module.exports = function (gulp, plugins, config) {
	gulp.task('sprite', function () {
		/* [1] */
		var spriteData	=	gulp.src(config.target.img + 'sprite/*.{png,jpg}')
								.pipe(sprite({
									imgName: 'sprite.png',
									cssName: '_sprite.scss',
									imgPath: "../assets/img/sprite.png",
									padding: 1
								}));
		/* [2] */
		spriteData.img.pipe(gulp.dest(config.target.img));
		/* [3] */
		spriteData.css.pipe(gulp.dest(config.target.scss + "objects/sprite"));
	});
};
