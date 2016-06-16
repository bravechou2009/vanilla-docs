'use strict';

module.exports = {
  srcPath: 'site',
  outPath: 'dist',
  documentsPaths: [
    'documents/',
    '../docs/'
  ],
  collections: {
    docs: function () {
      return this.getCollection('html').findAllLive({
        layout: {
          $has: ['docs', 'api']
        }
      }, [{
        url: 1
      }]);
    }
  },
  plugins: {
    cleanurls: {
      static: true,
      collectionName: 'docs'
    },
    shortcodeparser: {
      codes: require('./shortcodes')
    }
  },
  templateData: {
    site: {
      title: 'Vanilla Documentation',
      url: 'http://docs.vanillaforums.com'
    }
  }
};
