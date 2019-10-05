// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [{
        id: 1,
        imgUrl: 'http://attachment4.jmw.com.cn/image/2019/07/22/15637780008142.jpg!m-w640h330',
        desc: ''
      }, {
        id: 2,
        imgUrl: 'http://attachment4.jmw.com.cn/image/2019/09/24/15693163934541.jpg!m-w640h330',
        desc: ''
      },
      {
        id: 3,
        imgUrl: 'http://image1.jmw.com.cn/sign/m/img/lunbo2.png',
        desc: ''
      }
    ],
    currentTabsIndex: 0
  },


  onBannerSwiperTap: function(event) {
    console.log(event);
  },
  onTabsItemTap: function(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabsIndex: index
    });

  },
  onGetProjectTap: function(event) {
   wx.navigateTo({
     url: './get/get',
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