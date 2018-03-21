module.exports = function(grunt) {                  // Create new Grunt task

  grunt.config.set('nodemon', {                        // Task sass
      dev: {
        script: 'app.js',
        options: {
          ignore: ['.tmp/**', 'assets/**', 'node_modules/**'],
          watch: ['api/**','config/**'],
       //     env: {
       //  		PORT: '1337'
      	// },
      // omit this property if you aren't serving HTML files and 
      // don't want to open a browser tab on start
      // callback: function (nodemon) {
      //   nodemon.on('log', function (event) {
      //     console.log(event.colour);
      //   });
        
      //   // opens browser on initial server start
      //   nodemon.on('config:update', function () {
      //     // Delay before server listens on port
      //     setTimeout(function() {
      //       require('open')('https://localhost:1337');
      //     }, 1000);
      //   });

      //   // refreshes browser when server reboots
      //   nodemon.on('restart', function () {
      //     // Delay before server listens on port
      //     setTimeout(function() {
      //       require('fs').writeFileSync('.rebooted', 'rebooted');
      //     }, 1000);
      //   });
      // }
     }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');                 // Load task Grunt-sass  
};