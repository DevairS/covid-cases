const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~/api': path.resolve(__dirname, 'src/api'),
      '~/assets': path.resolve(__dirname, 'src/assets'),
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/hooks': path.resolve(__dirname, 'src/hooks'),
      '~/routes': path.resolve(__dirname, 'src/routes'),
      '~/pages': path.resolve(__dirname, 'src/pages'),
      '~/stores': path.resolve(__dirname, 'src/stores'),
      '~/theme': path.resolve(__dirname, 'src/theme'),
      '~/utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
