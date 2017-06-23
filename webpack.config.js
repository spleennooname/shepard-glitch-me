var path = require('path');
var webpack = require('webpack');

var config = {

  context: __dirname,

  entry:{
     shepardglitchme:[  './src/aframe.js', './src/index.js']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },

  resolve: {
      modules: [
        path.resolve(__dirname, "src"),
        "node_modules"
      ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      },
      { test: /\.(glsl|vs|fs)$/, loader: 'shader-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

	devtool: "eval-source-map",

  devServer: {
    hot: true,
    contentBase: [
      "build"
    ],
    headers: {
           'Access-Control-Allow-Origin': '*'
    },
    port: 8080
  },

  plugins: [

  ],

  watch: true

};

module.exports = config;
