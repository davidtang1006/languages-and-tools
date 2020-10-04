var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// var path = require('path');

module.exports = {
  // Original version: "context: path.join(__dirname, "src")"
  context: __dirname + "/src",
  // false -> null
  devtool: debug ? "inline-sourcemap" : null,
  // Original version: "entry: "./js/client.js""
  entry: __dirname + "/src/js/client.js",
  module: {
    loaders: [
      {
        // jsx -> js
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
