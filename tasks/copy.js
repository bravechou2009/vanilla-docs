'use strict';

module.exports = {
  js: {
    files: [{
      expand: true,
      cwd: 'site/assets/js/',
      src: '**/*.js',
      dest: '.tmp/assets/'
    }]
  },
  img: {
    files: [{
      expand: true,
      cwd: 'site/assets/img',
      src: '**/*',
      dest: 'dist/assets/img'
    }]
  }
};
