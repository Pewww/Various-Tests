const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + 'public/dist',
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}