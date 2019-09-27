// components/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperBannerData: {
      type: Array,
      value: ''
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
    _onBannerSwiperTap: function(e) {
      this.triggerEvent('changeCurrent', {
        currentId: e.currentTarget.dataset.current
      })
    }
  }
})