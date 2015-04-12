module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'public/js/app.min.js': ['js/assets/*', 'js/input.js', 'js/game.js', 'js/app.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js']
    },
    watch: {
      files: ['js/**', 'public/css/*', 'public/index.html'],
      tasks: ['jshint', 'uglify']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'watch']);

};