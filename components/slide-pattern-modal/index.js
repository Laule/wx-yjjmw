// components/slide-pattern-modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    slidePatternModalTitle: {
      type: String,
      value: ''
    },
    slidePatternModalData: {
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
    _onSlidePatternModalTap: function (e) {
      this.triggerEvent('changeCurrent', {
        currentNum: e.currentTarget.dataset.current
      })
    }
  }
})
