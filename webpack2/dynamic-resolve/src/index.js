var a = './a';

// console.log(require.resolve(a));

// As long as module `a` is set as an entry point, Webpack refuses to generate a
// mapping from path to internal module ID (AKA context in Webpack parlance) for
// module `a` in the bundle.
fetch(__webpack_public_path__ + 'a.js').then(function () {
  // Uncommenting this line will result in a build error
  // console.log(require.resolve('./a'));

  // Same as Webpack 1's bad case, Webpack 2 is refuses to generate a mapping
  // from path to internal module ID
  console.log(require.resolve(a));
});
