/* eslint-disable max-len */
/* eslint-disable global-require */
/**
 * Base webpack config used across other specific configs
 */
import path from 'path'
import webpack from 'webpack'

// postcss plugins
const postcssPlugins = () => [
  require('autoprefixer'),
  require('postcss-custom-media'),
  require('postcss-import'),
  require('postcss-nesting'),
  require('postcss-sorting'),
  require('postcss-custom-properties'),
]

// 非推奨機能の警告OFF
process.noDeprecation = true

export default {
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
      // Global styles
      {
        test: /\.global\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postcssPlugins,
            },
          },
        ],
      },
      // CSS modules
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postcssPlugins,
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // importで利用されるコンテキストディレクトリの設定
    modules: [
      path.resolve(__dirname, 'src/client'),
      'node_modules',
    ],
    alias: {
      '~': path.resolve(__dirname, 'src/client'),
    },
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
}
