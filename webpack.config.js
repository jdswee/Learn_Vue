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
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    // 创建一个在内存中生成 HTML 页面的插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html'),
      filename: 'index.html'
    })
  ]
}
