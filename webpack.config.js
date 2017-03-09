var webpack = require("webpack");
var path = require('path');
module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: '_dirname',
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}