var path = require('path')
var webpack = require('webpack')
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry:
     SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/',
    filename: 'bundle.js',
    publicpath: '/'
  },
  module: {
      loaders: [
          {
            test: /\.js?$/,
            include: SRC_DIR,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
          },
          {
            test: /\.css$/,
            loaders: [
              'style-loader',
              'css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss-loader'
            ]
          }
      ]
  },
}
