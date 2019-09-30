// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInputClear: false,
    inputVal: '',
    history_search_list: [],
    is_history_search: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._loadData(options);
  },

  /**
   * 第一次加载
   */
  _loadData: function(params) {
    let historySearch = wx.getStorageSync('history_search');
    if (!historySearch) {
      let history_search = [];
      wx.setStorageSync('history_search', history_search);
    } else {
      if (historySearch.length !== 0) {
        this.setData({
          history_search_list: historySearch,
          is_history_search: true
        })
      }
    }
  },

  /**
   * 清除输入框内容
   */
  onClearTap: function(e) {
    this.setData({
      inputVal: '',
      isInputClear: false
    })
  },

  /**
   * 监听输入框输入
   */
  onListenInput: function(e) {
    let inputVal = e.detail.value;
    if (inputVal) {
      this.setData({
        isInputClear: true,
        inputVal
      })
    } else {
      this.setData({
        isInputClear: false
      })
    }
  },

  /**
   * 点击搜索按钮
   */
  onSearchTap: function(event) {
    let historySearch = wx.getStorageSync('history_search');
    let inputVal = this.data.inputVal,
      shorthand = inputVal;
    if (shorthand.length >= 6) {
      shorthand = shorthand.substring(0, 6) + '...';
    }
    historySearch.push({
      shorthand,
      inputVal
    });
    wx.setStorageSync('history_search', historySearch);
    this.setData({
      history_search_list: historySearch,
      is_history_search: true,
      isInputClear: false,
      inputVal: ''
      
    })
  },


  /**
   * 点击历史搜索按钮，跳转到搜索页面
   */
  onHistoryTap: function(event) {
    console.log('点击跳转到搜索页面，带关键词');
    console.log(event);
  },


  /**
   * 清空历史搜索
   */
  onClearHistoryTap: function(event) {
    try {
      wx.setStorageSync('history_search', []);
      this.setData({
        history_search_list: [],
        is_history_search: false
      })
    } catch (e) {
      console.log(e);
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