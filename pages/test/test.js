// pages/test/test.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperDatas: [
      {
        url: '../../wistronits/1.jpg',
        intro: '可信赖的战略合作伙伴'
      },
      {
        url: '../../wistronits/2.jpg',
        intro: 'IT服务 软件外包 面向全球26年'
      },
      {
        url: '../../wistronits/3.jpg',
        intro: '业务流程外包 高端技术 多样系统'
      },
      {
        url: '../../wistronits/4.jpg',
        intro: '产品全球化Mac & iOS经验 舍我其谁'
      }
    ],
    swiperTabDatas: [
      {
        id: 0,
        title: '纬创软件简介'
      },
      {
        id: 1,
        title: '公司组织'
      },
      {
        id: 2,
        title: '经营团队'
      },
      {
        id: 3,
        title: '公司沿革'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    toView: 'red',
    scrollTop: 100,

    currentTab: 0
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: parseInt(e.target.dataset.current)
      })
      console.log(this.data.currentTab)
    }
  },  

  /**
 * 这里处理滚动事件处理
 */
  listenSwiper: function (e) {
    //打印信息
    console.log(e)
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})