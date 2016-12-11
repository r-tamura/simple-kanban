/**
 * Base webpack config used across other specific configs
 */

import path from 'path'
import validate from 'webpack-validator'
import {
  dependencies as externals,
} from '../package.json'

// react-15.3.2系ではEvent系がreactディレクトリにあるのでパスをaliasで変更
// http://stackoverflow.com/questions/40670018/error-in-react-tap-event-plugin-src-injecttapeventplugin-js
// react-hot-loader@3.x系でhot-replacementができるようになるまで(?)
const alias = ['ReactMount']
  .reduce((carry, filename) => ({
    ...carry,
    [`react/lib/${filename}`]: path.join(__dirname, '../node_modules/react-dom/lib', filename),
  }), {})

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
    alias,
  },

  plugins: [],

})
