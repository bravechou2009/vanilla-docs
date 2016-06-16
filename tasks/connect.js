'use strict';

module.exports = {
  server: {
    options: {
      port: 8000,
      base: [
        'dist',
        '.tmp',
        'bower_components'
      ],
      open: 'http://localhost:<%= connect.server.options.port %>',
      livereload: true
    }
  }
};
