module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'statestyle.min.js': ['statestyle/statestyle.js']
        }
      }
    }

  });

  grunt.registerTask('default', ['uglify']);
};
