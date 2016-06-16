'use strict';

module.exports = {
  dist: {
    options: {
      csspath: '.tmp/assets',
      ignoreSheets: [/fonts.googleapis/],
      htmlroot: '.tmp',
      ignore: [
        '.open > .dropdown-menu',
        '.dropdown-menu > li + li > a',
        '.affix',
        '.docs-nav.affix',
        '.docs-nav.affix-top',
        '.docs-nav.affix-bottom'
      ]
    },
    files: {
      '.tmp/assets/docs.css': 'dist/**/*.html'
    }
  }
};
