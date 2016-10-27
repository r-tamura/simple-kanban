// Node modules
const path    = require('path');

// Webpack
const webpack = require('webpack');

// Constants
const host = process.env.host || 'localhost';
const port = (+process.env.port)+1 || '3000';

// Webpack Plugins
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const combineLoaders        = require('webpack-combine-loaders');
const HtmlWebpackPlugin     = require('html-webpack-plugin');

// Other Settings
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const outputPath = '/public';

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve('src'),
  entry: {
    'bundle':[
      `webpack-dev-server/client?http://${host}:${port}`,
      'webpack/hot/only-dev-server',
      './client',
    ],
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { 
        test: /\.js|jsx$/, 
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'] 
      },
      {
        test: /\.css|scss$/,
        loader: //ExtractTextPlugin.extract(
          combineLoaders([{
            loader:'style'
          }, {
            loader: 'css',
            query: {
              modules: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: true,
            }
          }, {
            loader: 'sass',
            query: {
              sourceMap: true,
            }
          }])
        //)
      }
    ]
  },
  resolve: {
    // importで利用されるコンテキストディレクトリの設定
    modulesDirectories: [
      'src/client',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', 'css', 'scss']
  },
  // Loader用
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new ExtractTextPlugin('[name]-[hash].css', {allChunks: true}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'assets/templates/index.html'),
      inject: 'body',
      favicon: path.join(__dirname, 'assets/favicon.ico'),
    }),
  ],
};