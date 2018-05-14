//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperDatas: [
      {
        url: '../../img/1.jpg',
        intro: '可信赖的战略合作伙伴'
      },
      {
        url: '../../img/2.jpg',
        intro: 'IT服务 软件外包 面向全球26年'
      },
      {
        url: '../../img/3.jpg',
        intro: '业务流程外包 高端技术 多样系统'
      },
      {
        url: '../../img/4.jpg',
        intro: '产品全球化Mac & iOS经验 舍我其谁'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  }
})
