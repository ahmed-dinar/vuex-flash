
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var version = require('../package.json').version;
var baseWebpackConfig = require('./webpack.base.conf');

var banner =
'/**\n' +
' * vuex-flash v' + version + '\n' +
' * https://github.com/ahmed-dinar/vuex-flash\n' +
' * (c) 2017 Ahmed Dinar\n' +
' * Licensed under MIT (https://github.com/ahmed-dinar/vuex-flash/blob/master/LICENSE)\n' +
' */';

process.env.NODE_ENV = 'production';

module.exports = merge(baseWebpackConfig, {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'dist/',
    filename: 'vuex-flash.min.js',
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
    }),
    new webpack.BannerPlugin({
      banner: banner,
      raw: true
    })
  ]
});