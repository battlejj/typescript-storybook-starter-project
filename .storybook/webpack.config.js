const path = require('path')
const merge = require('webpack-merge')

const customizedConfig = {
  plugins: [],
  module: {
    rules: [
      {
        test: /[.]tsx?$]/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
      },
      {
        test: /[.]tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    alias: {
      src: '../src',
      stories: '../stories',
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
}

module.exports = async ({config}) => {
  return merge(config, customizedConfig)
}
