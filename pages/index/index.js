//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../img/bg.png',
      '../../img/science.jpg',
      '../../img/welcome.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  }
})
