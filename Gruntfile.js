module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		responsive_images: {
			img: {
				options: {
					engine: 'im',
					sizes: [{
						width: '100%',
						quality: 30,
						name: 'q30'
					}],
				},
				files: [{
					expand: true,
	        src: ['*.{gif,jpg,png}'],
	        cwd: 'img_src/',
	        dest: 'img/'
				}]
			},
			viewsImages: {
				options: {
					engine: 'im',
					sizes: [{
						width: '300',
						quality: 30,
						name: 'q30'
					}],
				},
				files: [{
					expand: true,
	        src: ['*.{gif,jpg,png}'],
	        cwd: 'views/images_src/',
	        dest: 'views/images/'
				}]
			}
		},

		/* Clear out the images directory if it exists */
		clean: {
			dev: {
				src: ['img', 'views/images']
			}
		},

		/* Generate the images directory if it is missing */
		mkdir: {
			dev: {
				options: {
					create: ['img', 'views/images']
				}
			}
		},

		fileregexrename: {
			dev: {
				files: {
					"img/img": "img/*",
					"views/images/images": "views/images/*"
				},
				options: {
					replacements: [{
						pattern: "-q30",
						replacement: ""
					}]
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-file-regex-rename');

	grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images:img', 'responsive_images:viewsImages', 'fileregexrename']);
};