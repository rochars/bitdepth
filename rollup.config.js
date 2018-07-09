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

let UMDBanner = "(function (global, factory) {" +
  "typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :" +
  "typeof define === 'function' && define.amd ? define(factory) :" +
  "(global.bitDepth = factory());" +
  "}(this, (function () { 'use strict';"

let UMDFooter = 'return bitDepth; })));';

export default [
  // cjs, es
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.cjs.js',
        name: 'bitDepth',
        footer: 'module.exports.default = bitDepth;',
        format: 'cjs'
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
  // umd
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.umd.js',
        name: 'bitDepth',
        format: 'iife'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'WHITESPACE_ONLY',
        warningLevel: 'VERBOSE',
        preserveTypeAnnotations: true,
        createSourceMap: false,
        outputWrapper: UMDBanner + '%output%' + UMDFooter
      })
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
