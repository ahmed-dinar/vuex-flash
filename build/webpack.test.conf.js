// This is the webpack config used for unit tests.

var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');

var webpackConfig = merge(baseConfig, {
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('testing')
    }),
  ]
});

// no need for app entry during tests
delete webpackConfig.entry;


module.exports = webpackConfig;