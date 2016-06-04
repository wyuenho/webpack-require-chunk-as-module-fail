var path = require("path");
var webpack = require("webpack");

module.exports = {

  debug: true,

  entry: {
    index: "./src/index.js",
    a: "./src/a.js"
  },

  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].js",
    publicPath: "build/"
  },

  plugins: [
   new webpack.optimize.CommonsChunkPlugin({
     name: "index"
   }),
  ]

}
