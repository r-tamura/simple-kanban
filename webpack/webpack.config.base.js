/**
 * Base webpack config used across other specific configs
 */

import path from 'path'
import validate from 'webpack-validator'
import {
  dependencies as externals,
} from '../package.json'

export default validate({
  context: path.resolve(__dirname, '..'),
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',

    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    // importで利用されるコンテキストディレクトリの設定
    modulesDirectories: [
      'src/client',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },

  plugins: [],

})
