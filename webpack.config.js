/*
 * https://github.com/rochars/bitdepth
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview webpack configuration file.
 * Three dist files are created:
 * - bitdepth.cjs.js, CommonJS dist for Node. No dependencies included.
 * - bitdepth.umd.js, UMD with dependencies included.
 * - bitdepth.min.js, Compiled for browsers. All dependencies included.
 */

const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = [
  // CommonJS dist, no dependencies in the bundle.
  // Will be the one in the "main" field of package.json.
  {
    target: 'node',
    entry: './index.js',
    output: {
      filename: './dist/bitdepth.cjs.js',
      libraryTarget: "commonjs"
    }
  },
  // UMD with dependencies in the bundle.
  // Will be the one in the "browser" field of package.json.
  {
    entry: './index.js',
    resolve: {
      mainFields: ['module', 'main']
    },
    output: {
      filename: './dist/bitdepth.umd.js',
      library: "bitdepth",
      libraryTarget: "umd"
    }
  },
  // Browser dist with dependencies, compiled.
  {
    entry: './index.js',
    resolve: {
      mainFields: ['module', 'main']
    },
    output: {
      filename: './dist/bitdepth.min.js',
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
          generateExports: true
        },
      })
    ]
  },
];
