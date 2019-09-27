Component({
  /**
   * 组件的属性列表
   */
  properties: {
    slidePatternTitle: {
      type: String,
      value: ''
    },
    slidePatternData:{
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready() {
    // console.log('reday');
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _onSlidePatternTap: function (e) {
      this.triggerEvent('changeCurrent', {
        currentNum: e.currentTarget.dataset.current
      })
    }
  }
})
