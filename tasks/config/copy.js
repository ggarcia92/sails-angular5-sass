/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)','!app/**','!styles/**/*.sass'],
        dest: '.tmp/public'
      },
      {
        expand: true,
        cwd: './node_modules/font-awesome',
        src: ['**/*.min.css','**/*.woff','**/*.woff2','**/*.eot','**/*.otf','**/*.ttf','**/*.svg'],
        dest: '.tmp/public/font/font-awesome'
      },
      {
        expand: true,
        cwd: './node_modules/semantic-ui-css',
        src: ['**/*.min.css','!**/components/*.min.css','**/*.woff','**/*.woff2','**/*.eot','**/*.otf','**/*.ttf','**/*.svg','**/*.png'],
        dest: '.tmp/public/styles/semantic-ui'
      },
      {
        expand: true,
        cwd: './node_modules/core-js/client',
        src: ['**/shim.min.js'],
        dest: '.tmp/public/js'
      },
      {
        expand: true,
        cwd: './node_modules/ng2-semantic-ui/bundles',
        src: ['**/ng2-semantic-ui.umd.min.js'],
        dest: '.tmp/public/js'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
