const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    // contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader' 
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   use: 'url-loader?limit=8192&name=[hash:8]-[name].[ext]'
      // }
      {
        test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime', 
              '@babel/plugin-transform-arrow-functions',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
     
    ]
  },
  plugins: [
    // 创建一个在内存中生成 HTML 页面的插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    }
  }
}
