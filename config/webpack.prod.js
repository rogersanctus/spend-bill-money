const { merge } = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const path = require('path')
const common = require('./webpack.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimizer: [`...`, new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        oneOf: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  url: true
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  url: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    plugins: () => [autoprefixer()]
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
})
