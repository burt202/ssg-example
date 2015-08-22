var R = require("ramda");

var SwigWebpackPlugin = require("swig-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var aboutTemplateData = require("./public/templates/data/about.js");

module.exports = {
  entry: {
    about: "./public/js/about"
  },
  output: {
    path: "./dist/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new SwigWebpackPlugin(R.merge({
      template: "./public/templates/about.html",
      filename: "about.html",
    }, aboutTemplateData)),
    new ExtractTextPlugin("combined.css")
  ]
};
