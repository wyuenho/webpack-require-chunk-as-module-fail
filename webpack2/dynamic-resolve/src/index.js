var promisescript = require('promisescript');
var a = './a';
var c = './c';

// Fails for both `bad2` and `bad2`
// console.log(require.resolve(a));

// This also fails for both `bad` and `bad2`. Webpack 2 can't chase the
// reference of `a`, and doesn't inject a map of module paths from the point of
// view of `index.js` into the bundle, so webpack 2 can neither resolve this at
// build time nor run time.
// require.ensure([a], function () {
//   console.log(require.resolve(a));
// });

// `Error: Can't resolve` on first try on a clean build, second try `Cannot find
// module '././a'`
// System.import('../build/' + a).then(function () {

// `Uncaught Error: Cannot find module './a'`
// System.import(a).then(function () {

// ReferenceError: __webpack_public_path__ is not defined
// System.import(__webpack_public_path__ + 'a.js').then(function () {
// System.import(__webpack_public_path__ + './a.js').then(function () {
// System.import(__webpack_public_path__ + './a').then(function () {
// System.import(__webpack_public_path__ + a).then(function () {

// `a` can be loaded and required, but totally useless since
promisescript(__webpack_public_path__ + 'a.js').then(function () {

  // this fails silently
  console.log(require.resolve(a));

  // This fails silently too
  // console.log('index requirement of c successfull: %s', require(c) === 100);

  console.log('you wont see me');
});
