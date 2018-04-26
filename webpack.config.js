module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/bitdepth.js'
  },
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
            {
              search: 'module.exports.BitDepthMaxValues = ',
              replace: "window['bitDepth']['BitDepthMaxValues'] = "
            },
          ]
        }
      }
    ]
  }
};