'use strict';

module.exports = {
  build: [
    'clean',
    'docs',
    'less',
    'autoprefixer',
    'copy',
  // , 'uncss',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'filerev',
    'usemin',
    'htmlmin',
    'manifest'
  ],
  serve: [
    'docs',
    'less',
    'copy',
    'connect',
    'watch'
  ],
  deploy: [
    'wiredep',
    'build',
  //, 'cdnify'
    'gh-pages'
  ],
  default: [
    'wiredep',
    'build'
  ]
};
