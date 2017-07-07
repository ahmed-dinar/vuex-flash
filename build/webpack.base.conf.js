
var path = require('path');

function resolve (dir) {
  return path.resolve(__dirname, '../'+dir);
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test'), resolve('dev')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test'), resolve('dev')],
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};