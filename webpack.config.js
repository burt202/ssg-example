var R = require("ramda");

var SwigWebpackPlugin = require("swig-webpack-plugin");
var aboutTemplateData = require("./public/templates/data/about");

module.exports = {
  entry: {},
  output: {
    path: "./dist/",
    filename: "[name].js"
  },
  plugins: [
    new SwigWebpackPlugin(R.merge({
      template: "./public/templates/about.html",
      filename: "about.html",
    }, aboutTemplateData))
  ]
};
