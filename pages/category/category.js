import {
  Category
} from 'category-model.js';
var category = new Category();
Page({
  data: {
    curNav: 1,
    curIndex: 0,
    type_detail: 1,
    list: [],
    page: 1,
    leftHeight: '',
    rightHeight: '',
    windowHeight: '',
    hidden: true,
    tlist: [{
        id: 1,
        name: '餐饮'
      },
      {
        id: 2,
        name: '餐饮'
      },
      {
        id: 3,
        name: '餐饮'
      },
      {
        id: 4,
        name: '餐饮'
      },
      {
        id: 5,
        name: '餐饮'
      },
      {
        id: 6,
        name: '餐饮'
      },
      {
        id: 7,
        name: '餐饮'
      },
      {
        id: 8,
        name: '餐饮'
      },
      {
        id: 9,
        name: '餐饮'
      },
      {
        id: 10,
        name: '餐饮'
      },
      {
        id: 11,
        name: '餐饮'
      },
      {
        id: 12,
        name: '餐饮'
      },
      {
        id: 13,
        name: '餐饮'
      },
      {
        id: 14,
        name: '餐饮'
      },
      {
        id: 15,
        name: '餐饮'
      },
      {
        id: 16,
        name: '餐饮'
      }
    ]
  },



  /*切换分类*/
  changeCategory: function(event) {
    var index = category.getDataSet(event, 'index'),
      id = category.getDataSet(event, 'id') //获取data-set
    this.setData({
      currentMenuIndex: index
    });


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _windowHeight = wx.getSystemInfoSync().windowHeight;
    var _leftHeight = this.data.tlist.length * 50;
    this.setData({
      curNav: 1,
      leftHeight: _leftHeight <= _windowHeight - 40 ? _windowHeight - 40 : _leftHeight,
      windowHeight: _windowHeight
    })
    this.switchRightTab();
  },
  //事件处理函数  
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值  
    let id = e ? e.currentTarget.dataset.id : this.data.tlist[0].firstType.id,
      index = e ? parseInt(e.currentTarget.dataset.index) : 0,
      _length = this.data.tlist[index].second.length;
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index,
      hidden: true
    })
    if (!_length) {
      this.getTypeDetail(e ? e : '');
      this.setData({
        type_detail: 2
      })
    } else {
      var _height = (Math.ceil(_length / 3) * 160 + 28) / (750 / wx.getSystemInfoSync().windowWidth);
      this.setData({
        type_detail: 1,
        rightHeight: _height <= this.data.windowHeight - 40 ? this.data.windowHeight - 28 / (750 / wx.getSystemInfoSync().windowWidth) - 40 : _height
      })
    }
  },
  getTypeDetail(e) {
    var self = this;
    var _page = self.data.page;
    let id = e ? e.currentTarget.dataset.id : this.data.tlist[0].firstType.id;
    this.setData({
      page: 1,
      list: []
    })
    self.getList(id);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})