const webpack = require('webpack');
module.exports = {
  output: {
    chunkLoadingGlobal: 'host'
  },
  externalsType: 'window'
}
