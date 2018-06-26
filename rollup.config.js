/*
 * https://github.com/rochars/byte-data
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 */

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default [
  // cjs
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.cjs.js',
        name: 'bitdepth',
        format: 'cjs'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
    ]
  },
  // umd
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.umd.js',
        name: 'bitdepth',
        format: 'umd',
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
    ]
  },
  // esm
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/bitdepth.js',
        format: 'es',
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
    ]
  }
];
