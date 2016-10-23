const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;

const outputPath = '/public';

process.env.BABEL_ENV = TARGET;
module.exports = {
  devtool: "source-map",
  entry: {
    "bundle":[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index',
      './src/style'
    ],
  },
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "[name].js",
    publicPath: outputPath
  },
  module: {
    loaders: [
      { 
        test: /\.js|jsx$/, 
        exclude: /node_modules/,
        loaders: ["react-hot", "babel"] 
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          ["css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap", "sass?sourceMap"]
        )
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].css", {allChunks: true})
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};