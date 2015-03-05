'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
	    dist: {
	      options: {
	        style: 'expanded',
	        precision: 9,
	        sourcemap: 'none'
	      },
	      files: {
	        'css/oneframework/oneframework.css': 'css/oneframework/scss/oneframework.scss',
	        'css/skeleton/skeleton.css': 'css/skeleton/skeleton.scss'
	      }
	    }
	  },
	  cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/oneframework',
		      src: ['*.css', '!*.min.css'],
		      dest: 'css/oneframework',
		      ext: '.min.css'
		    }]
		  }
		},
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['css/oneframework/scss/**/*.scss', 'css/skeleton/**/*.scss'],
				tasks: ['sass','cssmin']
			}
	  },
	  express:{
	  	all: {
	  		options: {
	  			port: 9000,
	  			hostname: 'localhost',
	  			bases: ['./'],
	  			livereload: true,
	  			open: true
	  		}
	  	}
	  }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['sass','watch']); // without livereload
  grunt.registerTask('server', ['express','watch']);  // with livereload
};