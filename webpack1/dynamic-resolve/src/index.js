var promisescript = require('promisescript');
var a = './a';
var c = './c';

// Works for both `good` and `bad`
// console.log(require.resolve(a));

// This fails for `bad`, Webpack 1 doesn't understand the `a` reference inside
// `require.ensure`, so it just replaced `require` with `__webpack_require__`,
// but the `require.ensure` implementation in Webpack 1 is called
// `__webpack_require__.e`
// require.ensure([a], function () {
//   console.log(require.resolve(a));
// });

// This works for Webpack 1, as long as the you remember to list out the chunks
// `index` requires in webpack.config.js
promisescript(__webpack_public_path__ + 'a.js').then(function () {
  console.log(require(a));
  console.log(require.resolve(a));
  console.log('index requirement of c successfull: %s', require(c) === 100);
});
