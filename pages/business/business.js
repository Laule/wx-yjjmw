import {
  Business
} from 'business-model.js';
var business = new Business();

Page({
  data: {
    navUnfold: false,
    currentIndex: 0,
    navBarList: []
  },

  onLoad: function(options) {
    this._loadData();
  },

  // 加载数据
  _loadData(callback) {
    let that = this;
    business.getNavBarList((data)=>{
      console.log(data);
      that.setData({
        navBarList: data
      });
    })
  },

  // 是否展开
  onNavBarTap: function() {
    this.setData({
      navUnfold: !this.data.navUnfold
    })
  },

  // 切换NavBar
  onNavBarSwitchTap: function(event) {
    let selectedIndex = business.getcurrentTargetDataSet(event, 'index');
    this.setData({
      currentIndex: selectedIndex,
      navUnfold: false
    })
  },

  onBusinessTap: function(event) {
    business.jumpRoute('/pages/business/detail/detail');
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