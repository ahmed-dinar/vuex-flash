
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.conf');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: [ './build/dev-client', './dev/main.js' ]
  },
  output: {
    path: path.resolve(__dirname, '../dev/dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'VuexFlash',
    libraryTarget: 'umd'
  },
  devServer: {
    hot: true,
    inline: true
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'dev/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});