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
	        dest: 'dist/img'
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
	        dest: 'dist/views/images/'
				}]
			}
		},

		/* Clear out the images directory if it exists */
		clean: {
			dev: {
				src: ['dist/img', 'dist/views/images']
			}
		},

		/* Generate the images directory if it is missing */
		mkdir: {
			dev: {
				options: {
					create: ['dist/img', 'dist/views/images']
				}
			}
		},

		fileregexrename: {
			dev: {
				files: {
					"dist/img/img": "dist/img/*",
					"dist/views/images/images": "dist/views/images/*"
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
					dest: 'dist/css'
				}, {
					expand: true,
					cwd: 'src/views/css',
					src: '*.css',
					dest: 'dist/views/css'
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
					dest: 'dist'
				},{
					expand: true,
					cwd: 'src/views',
					src: ['*.html'],
					dest: 'dist/views'
				}]
	    }
    },

    inlinecss: {
      dev: {
        options: {
        },
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    },

    uglify: {
	    options: {
	      mangle: false
	    },
	    my_target: {
	      files: {
	        'dist/js/perfmatters.js': 'src/js/perfmatters.js',
	        'dist/views/js/main.js': 'src/views/js/main.js'
	      }
	    }
	  }

	});

	grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-file-regex-rename');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [
		'clean',
		'mkdir',
		'responsive_images:img',
		'responsive_images:viewsImages',
		'fileregexrename',
		'cssmin',
		'htmlmin',
		'inlinecss',
		'uglify'
	]);
};