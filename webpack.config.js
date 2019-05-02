const path = require('path');
const nodeLibsBrowser = require('node-libs-browser')
nodeLibsBrowser.assert = require.resolve('browser-assert')
nodeLibsBrowser.util = require.resolve('util')

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    'fs-extra': 'empty'
  },
  target: "web",
  resolve: { alias: { util$: path.resolve(__dirname, 'node_modules/util'), inherits$: path.resolve(__dirname, 'node_modules/inherits') }},
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
