/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
  	// api: {
			// // API files to watch:
   //          files: ['api/**/*', 'config/**/*'],
   //  //         options: {
   //  //     livereload: {
   //  //     host: 'localhost',
   //  //     key: grunt.file.read('config/ssl/key.pem'),
   //  //     cert: grunt.file.read('config/ssl/cert.pem')
   //  //   }
   //  // }
  	// },
    assets: {

      // Assets to watch:
      files: ['assets/**/*','!assets/styles/*.sass', 'tasks/pipeline.js', '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['syncAssets' , 'linkAssets' ]
    },
    sass: {
      files: ['assets/styles/styles.sass'],
      tasks: ['sass'],
      options: {
        livereload: {
        host: 'localhost'
      }
      }
    },
    angular: {
      files: ['assets/app/**/*'],
      options: {
        livereload: {
        host: 'localhost'
      }
      }
    },
    server: {
    files: ['.rebooted'],
    options: {
        livereload: {
        host: 'localhost'
      }
      }
  } 
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};

