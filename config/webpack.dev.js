const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }]
    },
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
})
