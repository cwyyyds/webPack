// 1. 引入轮播图和tab栏切换功能
import './banner'
import './tabs'

// 2.导入juqery，使用juqery样式
// import $ from 'jquery'
// $('#swiper').css('background-color', 'red')

//9.引入css/less样式
//9.下载加载器
//9.1引入文件
import './style/index.css'
import './style/index.less'

import imgUrl from './assets/1.gif'
let img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)

import imgUrl2 from './assets/logo_small.png'
let img2 = document.createElement('img')
img2.src = imgUrl2
document.body.appendChild(img2)
