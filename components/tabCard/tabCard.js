// components/tabCard/tabCard.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    swiperTabDatas: {
      type: Array,
      value: [],
      observer: 'changeTabDatas'
    },
    currentIndex: {
      type: Number,
      value: 0,
      observer: 'changecurrentIdx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navbarTab: function (e) {
      console.log(e)
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      });
    },
    changeTabDatas: function (e) {
      console.log(e)
      console.log('changeTabDatas')
      // this.setData({
      //   swiperTabDatas: e.currentTarget.dataset.index
      // });
    },
    changecurrentIdx: function (e) {
      console.log(e)
      console.log('changecurrentIdx')
      // this.setData({
      //   swiperTabDatas: e.currentTarget.dataset.index
      // });
    }
  }
})
