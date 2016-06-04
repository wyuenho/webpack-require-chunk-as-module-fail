var path = require("path");
var webpack = require("webpack");

// Despite the inexplicable compilation warnings of requiring an entry point,
// Webpack is actually able to generate code that behaves correctly.
module.exports = {

  debug: true,

  entry: {
    index: "./src/index.js"
  },

  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].js",
    publicPath: "build/"
  }

}
