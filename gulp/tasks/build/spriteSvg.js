/*-------------------------------------------------------------
	# SPRITE-SVG
 ---------------------------------------------------------------*/
/*
		Files task SCSS
		FILE PATH CONFIG 	:	NONE

		COMMENTS:
			[1] Add padding
			[2] Source path of the sprite images
			[3] Output path for the sprite

 */

module.exports = function (gulp, plugins, config) {
	var configSvg = {
		dest	: '.',
		shape	: {
			spacing	: {         /* [1] */
				padding	: 1
			}
		},
		mode: {
			css	: {
				dest: config.target.scss,
				sprite: '../assets/img/sprite.svg',
				bust: false,
				render: {
					scss: {
						dest: 'objects/sprite/_sprite-svg.scss'
					}
				}
			}
		},
		symbol: true
	};

	gulp.task('spriteSvg', function () {
		/* [2] */
		gulp.src(config.target.img + 'sprite-svg/*.svg')
			.pipe(plugins.svgSprite(configSvg))
			/* [3] */
			.pipe(gulp.dest("."));
	});
};
