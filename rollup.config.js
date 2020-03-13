import commonjs from 'rollup-plugin-commonjs';

const globals = {
  browser: {
    'global': 'window',
    'global/window': 'window',
    'global/document': 'document'
  },
  module: {
  },
  test: {
    qunit: 'QUnit',
    qunitjs: 'QUnit',
    sinon: 'sinon'
  }
};

export default {
    input: './src/main.js',
    output: {
        file: './dist/main.js',
        format: 'umd',
        name: 'init',
        globals: globals.browser
    },
    plugins: [
        commonjs()
    ]
}
