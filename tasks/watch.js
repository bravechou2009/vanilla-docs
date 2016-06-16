'use strict';

module.exports = {
  grunt: {
    files: [
      'Gruntfile.js',
      'tasks/*.js'
    ]
  },
  bower: {
    files: [
      'bower.json'
    ],
    tasks: [
      'wiredep'
    ]
  },
  docs: {
    files: [
      'docs/**/*',
      'site/documents/*',
      'site/layouts/*',
      'site/partials/*'
    ],
    tasks: [
      'docs'
    ]
  },
  less: {
    files: [
      'site/assets/**/*.less'
    ],
    tasks: [
      'less'
    ]
  },
  js: {
    files: [
      'site/assets/**/*.js'
    ],
    tasks: [
      'copy:js'
    ]
  },
  livereload: {
    options: {
      livereload: true
    },
    files: [
      '.tmp/assets/*.{css,js}',
      'dist/**/*.{html}'
    ]
  }
};
