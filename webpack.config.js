const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config()

const config = {
  entry: ['./src/server.ts'],
  mode: 'development',
  target: 'node',
  externalsPresets: { node: true }, // only for webpack 5
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs'
    },
    filename: 'server.js',
    clean: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.HOST": JSON.stringify(process.env.HOST),
      "process.env.PORT": JSON.stringify(process.env.PORT)
    })
  ],
  resolve: {
    extensions: ['.ts'],
  },
  devtool: 'source-map',
}

module.exports = config
