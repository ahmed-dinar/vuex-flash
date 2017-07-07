
process.env.NODE_ENV = 'production';

var ora = require('ora');
var rm = require('rimraf');
var path = require('path');

var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

var spinner = ora('building for production...');
spinner.start();

rm( path.resolve(__dirname, '../dist'), err => {

  if (err) throw err;

  webpack(webpackConfig, function (err, stats) {

    spinner.stop();

    if (err) throw err;

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log('  Build complete.\n');

  });
});