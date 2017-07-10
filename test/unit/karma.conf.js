var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function(config) {

  config.set({
    browsers: ['PhantomJS'],
    reporters: ['spec','coverage'],
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: [
      '../../src/**/*',
      '../../dev/**/*.js',
      './specs/**/*'
    ],
    exclude: [],
    preprocessors: {
      '../../src/**/*': ['webpack','sourcemap'],
      '../../dev/**/*': ['webpack','sourcemap'],
      './specs/**/*': ['webpack','sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    plugins: [
      'karma-spec-reporter',
      'karma-chai',
      'karma-sinon-chai',
      'karma-mocha',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  });
};