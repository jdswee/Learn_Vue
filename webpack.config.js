const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
  plugins: [
    // 创建一个在内存中生成 HTML 页面的插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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
      }
    ]
  }
}
