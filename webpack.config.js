var R = require("ramda");

var SwigWebpackPlugin = require("swig-webpack-plugin");
var aboutTemplateData = require("./public/templates/data/about");
var contactTemplateData = require("./public/templates/data/contact");

module.exports = {
  entry: {
    contact: "./public/js/contact"
  },
  output: {
    path: "./dist/",
    filename: "[name].js"
  },
  plugins: [
    new SwigWebpackPlugin(R.merge({
      template: "./public/templates/about.html",
      filename: "about.html",
    }, aboutTemplateData)),
    new SwigWebpackPlugin(R.merge({
      template: "./public/templates/contact.html",
      filename: "contact.html",
    }, contactTemplateData))
  ]
};
