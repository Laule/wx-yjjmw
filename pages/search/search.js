// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isClear: false,
    inputVal: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onClearTap: function(e) {
    this.setData({
      inputVal:'',
      isClear: false
    })
  },

  onListenInput: function(e) {
    console.log(e);
    let inputVal = e.detail.value;
    if (e.detail.value) {
      this.setData({
        isClear: true
      })
    } else {
      this.setData({
        isClear: false
      })
    }
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