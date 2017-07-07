
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.stringify('development');
}

var opn = require('opn');
var path = require('path');
var express = require('express');
var webpack = require('webpack');


var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');


// default port where dev server listens for incoming traffic
var port = process.env.PORT || 8080;

// automatically open browser, if not set will be false
var autoOpenBrowser = false;

var app = express();

var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);


app.use(express.static(path.join(__dirname, '../dev/static')));

var uri = 'http://localhost:' + port;

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve;
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri);
  }
  _resolve();
});

var server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  }
};