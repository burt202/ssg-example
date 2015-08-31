var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    index: "./public/js/index",
    contact: "./public/js/contact",
    action: "./public/js/action",
    people: "./public/js/people",
    travel: "./public/js/travel",
    commercial: "./public/js/commercial"
  },
  output: {
    path: "./dist/",
    filename: "[name].js"
  },
  plugins: [
    new CommonsChunkPlugin("common.js")
  ]
};
