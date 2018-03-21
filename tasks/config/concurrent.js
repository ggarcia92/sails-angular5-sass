module.exports = function(grunt) {                  // Create new Grunt task

  grunt.config.set('concurrent', {                        // Task sass
     dev: [
            'nodemon',
            'watch'
        ],
        options: {
            logConcurrentOutput: true
        }
  });

  grunt.loadNpmTasks('grunt-concurrent');                 // Load task Grunt-sass  
};