'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:@next/next/core-web-vitals',
    'prettier',
  ],
};
