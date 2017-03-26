/* eslint-disable max-len */
/* eslint-disable global-require */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 */

import path from 'path'
import { spawn } from 'child_process'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.config.base'

const port = process.env.PORT || 8080
// ブラウザ上からアクセスするURL
const publicPath = `http://localhost:${port}/dist`

export default merge(baseConfig, {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    // 'babel-polyfill',
    path.resolve(__dirname, 'src/client/client.js'),
  ],

  output: {
    publicPath,
  },

  plugins: [
    // https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // turn debug mode on.
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],

  target: 'electron-renderer',

  // webpack-dev-server settings
  devServer: {
    port,
    hot: true,
    inline: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath,
    setup() {
      if (process.env.START_HOT) {
        // サーバ起動時にアプリも起動
        spawn('npm', ['run', 'start-hot'], { shell: true, env: process.env, stdio: 'inherit' })
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError))
      }
    },
  },
})
