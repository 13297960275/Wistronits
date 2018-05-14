Page({
  data: {
    navbar: ["我发出的", "我收到的"],
    currentIndex: 0,//tabbar索引 
  },
  navbarTab: function (e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    });
  }
})