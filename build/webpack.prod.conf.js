
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

process.env.NODE_ENV = 'production';

module.exports = merge(baseWebpackConfig, {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    library: 'VuexFlash',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});