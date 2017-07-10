// This is the webpack config used for unit tests.

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');

var webpackConfig = merge(baseConfig, {
  devtool: '#inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dev/dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'VuexFlash',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('testing')
    }),
  ]
});


module.exports = webpackConfig;