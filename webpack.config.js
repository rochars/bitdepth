/*
 * https://github.com/rochars/wavefile
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview webpack configuration file.
 */

const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = [
  // Browser dist with dependencies, compiled.
  {
    entry: './index.js',
    mode: 'production',
    optimization: {minimize:false},
    output: {
      filename: 'bitdepth.min.js',
      library: "bitdepth",
      libraryTarget: "window"
    },
    plugins: [
      new ClosureCompiler({
        options: {
          languageIn: 'ECMASCRIPT6',
          languageOut: 'ECMASCRIPT5',
          compilationLevel: 'ADVANCED',
          warningLevel: 'VERBOSE',
          exportLocalPropertyDefinitions: true,
          generateExports: true,
          outputWrapper: '%output%window.' + 
            'bitdepth=window.bitdepth.default;'
        }
      })
    ]
  },
  // Browser dist with dependencies, compiled.
  {
    entry: './index.js',
    mode: 'production',
    optimization: {minimize:false},
    output: {
      filename: 'bitdepth.browser.js',
      library: "bitdepth",
      libraryTarget: "window"
    }
  }
];
