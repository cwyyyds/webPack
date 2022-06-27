const path = require('path')
// 4.1引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 5.1 引入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  //6.解决mode报错
  mode: 'development' || 'production' || 'none',

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
    // 5.0下载清除插件
    new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
    // 默认情况下dist
  ],
  //7.下载安装时时更新功能yarn add webpack-dev-server -D，packge.json配置相关文件
  //8.添加启动自动打开功能
  devServer: {
    port: 3000, // 端口号
    open: true,
  },
  //9.4 加载器们的配置规则
  module: {
    // loader 加载器 配置在这儿
    rules: [
      // loader的规则
      // 9.5 css规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },
      // 9.6 less规则
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
}
