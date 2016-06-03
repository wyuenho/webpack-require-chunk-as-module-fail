var path = require("path");
var webpack = require("webpack");

module.exports = {

  debug: true,

  // Webpack 2, as of 2.1.0-beta.8, has fixed the bug of unnecessary requiring
  // entry point warning, but lost the ability to chase down references, this
  // good base in Webpack 1 now fails too.
  entry: {
    index: "./src/index.js",
  },

  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].js",
    publicPath: "build/"
  }

}
