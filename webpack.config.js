const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;

const outputPath = '/public';

process.env.BABEL_ENV = TARGET;
module.exports = {
  devtool: "source-map",
  entry: {
    "bundle.js":[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    "style.css":[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      "./src/style.js"
    ]
  }
  ,
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "[name]",
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css", {allChunks: true})
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};