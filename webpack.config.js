var HtmlWebpackPlugin = require("html-webpack-plugin");

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
  plugins: [new HtmlWebpackPlugin({
    template: "./public/templates/partials/layout.html",
    inject: "body",
    filename: "about.html"
  })]
};
