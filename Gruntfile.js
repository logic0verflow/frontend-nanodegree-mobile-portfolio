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
	        cwd: 'src/img',
	        dest: 'img/'
				}]
			},
			viewsImages: {
				options: {
					engine: 'im',
					sizes: [{
						width: '280',
						quality: 30,
						name: 'q30'
					}],
				},
				files: [{
					expand: true,
	        src: ['*.{gif,jpg,png}'],
	        cwd: 'src/views/images/',
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
		},

		cssmin: {
			dev: {
				options: {
					report: 'gzip'
				},
				files: [{
					expand: true,
					cwd: 'src/css',
					src: '*.css',
					dest: 'css'
				}]
			}
		},

		htmlmin: {
	    dev: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: [{
					expand: true,
					cwd: 'src',
					src: ['*.html'],
					dest: ''
				},{
					expand: true,
					cwd: 'src/views',
					src: ['*.html'],
					dest: 'views'
				}]
	    }
    },

	});

	grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-file-regex-rename');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images:img', 'responsive_images:viewsImages', 'fileregexrename', 'cssmin', 'htmlmin']);
};