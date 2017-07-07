var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function(config) {

  config.set({
    browsers: ['PhantomJS'],
    reporters: ['spec', 'coverage', 'coveralls'],
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: [
      '../../src/**/*',
      '../../dev/**/*.js',
      './specs/**/*'
    ],
    exclude: [],
    preprocessors: {
      '../../src/**/*': ['webpack'],
      '../../dev/**/*': ['webpack'],
      './specs/**/*': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-coveralls',
      'karma-phantomjs-launcher'
    ],
    colors: true,
    autoWatch: false,
    coverageReporter: {
      dir: './coverage',
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