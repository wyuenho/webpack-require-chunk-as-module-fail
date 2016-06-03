var a = './a';

console.log(require.resolve(a));

// As long as module `a` is set as an entry point, Webpack refuses to generate a
// mapping from path to internal module ID (AKA context in Webpack parlance) for
// module `a` in the bundle.
// fetch(__webpack_public_path__ + 'a.js').then(function () {
//   // Uncommenting this line will result in a build error
//   // console.log(require.resolve('./a'));

//   // As demonstrated by the good case, Webpack 1 is fully capable of generating
//   // a mapping from path to internal module ID automatically, it just refuses to
//   // do so for requirements of chunks
//   console.log(require.resolve(a));
// });
