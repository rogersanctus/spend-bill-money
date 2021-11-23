const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '/build'),
    clean: true
  },
  resolve: {
    extensions: ['.json', '.js', '.vue', '...'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@styles': path.resolve(__dirname, '../src/assets/styles')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      title: "Spend Bill Gates' Money",
      favicon: './public/spend.png'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /core-js/,
          /webpack\/buildin/,
          /@babel\/runtime-corejs3/
        ],
        use: ['thread-loader', 'babel-loader']
      },
      // images
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'img/[contenthash:8][ext][query]' }
      },

      // do not base64-inline SVGs.
      // https://github.com/facebookincubator/create-react-app/pull/1180
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: { filename: 'img/[contenthash:8][ext][query]' }
      },
      // fonts
      {
        test: /\.(woff2?|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'fonts/[contenthash:8][ext][query]' }
      }
    ]
  }
}
