const path = require('path')
// 4.1引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 3.设置默认设置 自定义入口出口，安装有用插件
  entry: './src/index.js', //入口
  output: {
    path: path.resolve(__dirname, 'dist'), //出口所在文件
    filename: 'bundle.js', //出口文件名字
  },
  // 4.生成的html打包后自动引入js文件
  // 4.0下载yarn add html-webpack-plugin  -D插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 以哪个html文件为模板
      filename: 'index.html', // 生成的文件名称
    }),
  ],
}
