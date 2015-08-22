var R = require("ramda");
var SwigWebpackPlugin = require("swig-webpack-plugin");
var aboutTemplateData = require("./public/templates/data/about.js");

module.exports = {
  entry: {
    about: "./public/js/about"
  },
  output: {
    path: "./public/build/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  plugins: [new SwigWebpackPlugin(R.merge({
    template: "./public/templates/about.html",
    filename: "about.html",
  }, aboutTemplateData))]
};
