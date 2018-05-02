const ClosureCompiler = require('google-closure-compiler-js').webpack;
module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/bitdepth-min.js'
  },
  plugins: [
    new ClosureCompiler({
      options: {
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED'
      }
    })
  ],
  module: {
    loaders: [
      {
        test:  /index\.js$/,
        loader: 'string-replace-loader',
        query: {
          multiple: [
            {
              search: 'module.exports.toBitDepth = ',
              replace: "window['bitDepth'] = window['bitDepth'] || {};" + 
              "window['bitDepth']['toBitDepth'] = "
            },
          ]
        }
      }
    ]
  }
};