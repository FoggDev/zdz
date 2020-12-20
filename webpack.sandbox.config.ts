const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './sandbox/index.tsx',
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: [
              path.resolve(__dirname, './src/Accordion/icons'),
              path.resolve(__dirname, './src/Menu/icons'),
              path.resolve(__dirname, './src/Modal/icons'),
              path.resolve(__dirname, './src/Spinner/loaders'),
              path.resolve(__dirname, './src/Steps')
            ],
            use: 'svg-url-loader'
          },
          {
            include: path.resolve(__dirname, './src/Icon/icons'),
            use: '@svgr/webpack'
          }
        ]
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.svg']
  },
  devtool: devMode ? 'source-map' : '',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebPackPlugin({
      title: 'Sandbox',
      template: './sandbox/index.html',
      filename: './index.html'
    })
  ],
  mode: devMode ? 'development' : 'production'
}
