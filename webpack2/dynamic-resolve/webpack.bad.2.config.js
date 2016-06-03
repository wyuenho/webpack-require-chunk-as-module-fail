var path = require("path");
var webpack = require("webpack");

module.exports = {

  debug: true,

  // Promoting modules to entry chunks fails as Webpack 1 does not support
  // treating entry chunks as requirable modules. You'd think as long as we load
  // the entry chunks, Webpack will make the modules inside `a` available, and
  // then you can require it right? Wrong. You can uncomment the code in
  // `index.js` to do an async fetch, you'll still get an error.
  entry: {
    index: "./src/index.js",
    a: "./src/a.js"
  },

  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].js",
    publicPath: "build/"
  },

  // Uncommenting any or all of the following blocks makes no
  // difference. Webpack 1 just plainly refuses to treat chunks as requireable
  // modules.
  resolve: {
    a: "build/a.js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "index"
    }),
  ]

}
