// pages/business/business.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navUnfold: false,
    currentIndex: 0,
    navBarList: ["今日热议", "项目动态", "招商信息", "开店指导", "行业新闻", "防骗指南", "项目点评", "商机在线", "创业知识", "创业故事"]
  },

  /**
   * 是否展开
   */
  onNavBarTap: function() {
    this.setData({
      navUnfold: !this.data.navUnfold
    })
  },

  /**
   * 切换Nav
   */
  onNavBarSwitchTap: function(event) {
    let selectedIndex = event.currentTarget.dataset.index;
    this.setData({
      currentIndex: selectedIndex,
      navUnfold: false
    })
    console.log(event);
  },

  onBusinessTap:function(event)
  {
    console.log('点击');
    wx.navigateTo({
      url: './detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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