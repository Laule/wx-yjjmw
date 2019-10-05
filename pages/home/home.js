import {
  Home
} from 'home-model.js';
var home = new Home();
Page({
  data: {
    loadingHidden: false,
    swiperBannerData: [],
    menuData:[],
    themeData: [],
    topBrandData: [],
    hotIndustryData: []
  },

  onLoad: function() {
    this._loadData();
  },

  /**
   * 加载页面数据
   */
  _loadData: function(callback) {
    var that = this;

    // 获取Banner信息
    home.getBannerData((data) => {
      that.setData({
        swiperBannerData: data,
      });
    });

    // 获取Menu信息
    home.getMenuData((data) => {
      that.setData({
        menuData: data,
      });
    });

    // 获取主题信息
    home.getThemeData((data) => {
      that.setData({
        themeData: data,
        loadingHidden: true
      });
    });

    // 获取行业信息
    home.getIndustryData((data) => {
      that.setData({
        hotIndustryData: data
      });
      callback && callback();
    });

    // 获取品牌信息
    home.getBrandData((data) => {
      that.setData({
        topBrandData: data
      });
      callback && callback();
    });
  },


  /**
   * 跳转到搜索页面
   */
  onSearchTap: function(e) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },


  onProjectTap: function() {
    wx.navigateTo({
      url: '/pages/project/project',
    })
  },


  onSlidePatternTap: function(res) {
    console.log(res);
  },

  onSlidePatternModalTap: function(res) {
    console.log(res);
  },
  /**
   * 监听页面滚动事件
   */
  // onPageScroll: function(e) {
  //   console.log(e);
  // },

  onBannerSwiperTap: function(event) {
    console.log(event);
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
    return {
      title: '源进加盟网,创业加盟就上源进加盟网！',
      path: 'pages/home/home'
    }
  }
})