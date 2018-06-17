const ClosureCompiler = require('google-closure-compiler-js').webpack;
module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/bitdepth.min.js',
    library: 'bitdepth',
    libraryTarget: 'window'
  },
  plugins: [
    new ClosureCompiler({
      options: {
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: "VERBOSE",
        exportLocalPropertyDefinitions: true,
        generateExports: true
      }
    })
  ]
};