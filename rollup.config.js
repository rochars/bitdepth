/*
 * https://github.com/rochars/bitdepth
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 */

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import closure from 'rollup-plugin-closure-compiler-js';

// Read externs definitions
const fs = require('fs');
let externsSrc = fs.readFileSync('./externs.js', 'utf8');

// License notes for bundles that include dependencies
const license = '/*!\n'+
  ' * bitdepth Copyright (c) 2017-2018 Rafael da Silva Rocha.\n'+
  ' */\n';

export default [
  // cjs
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.cjs.js',
        name: 'bitDepth',
        footer: 'module.exports.default = bitDepth;',
        format: 'cjs'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // umd, es
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.umd.js',
        name: 'bitDepth',
        format: 'umd'
      },
      {
        file: 'dist/bitdepth.js',
        format: 'es'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // browser
  {
    input: 'index.js',
    output: [
      {
        name: 'bitdepth',
        format: 'iife',
        file: 'dist/bitdepth.min.js',
        banner: license,
        footer: 'window["bitDepth"]=bitdepth;'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        externs: [{src:externsSrc}]
      })
    ]
  }
];
