import {
  Category
} from 'category-model.js';
var category = new Category();
Page({
  data: {
    currentMenuIndex: '',
    curIndex: 0,
    windowHeight: '',
    categoryTypeArr: [],
    currentCategoryInfo: ''
  },

  onLoad: function(options) {
    this._loadData();

  },

  // 加载所有数据
  _loadData: function(callback) {
    let that = this,
      _windowHeight;
    _windowHeight = wx.getSystemInfoSync().windowHeight;
    that.setData({
      windowHeight: _windowHeight
    });
    category.getCategoryType((categoryData) => {
      that.setData({
        currentMenuIndex: categoryData[0].id,
        categoryTypeArr: categoryData
      });
      category.getCategoryByChild(categoryData[0].id, (data) => {
        let categoryInfo0 = {
          childCategory: data,
          topImgUrl: categoryData[0].img.url,
          nextTitle: categoryData[1].name,
          nextId: categoryData[1].id,
          curIndex: 1
        };
        that.setData({
          categoryInfo0,
          currentCategoryInfo: categoryInfo0
        });
        callback && callback();
      });
    });
  },


  onCategorySwitchTap: function(e, nextId, nextIndex) {

    console.log(e);
    let id = e ? e.target.dataset.id : nextId,
      index = e ? e.target.dataset.index : nextIndex;
    this.setData({
      currentMenuIndex: id,
      curIndex: index
    });

    //判断是否第一次加载
    if (!this.isLoadedData(index)) {
      var that = this;
      category.getCategoryByChild(id, (data) => {
        that.getDataObjForBind(index, data);
      });
    } else {
      this.setData({
        currentCategoryInfo: this.data['categoryInfo' + index]
      });
    }
  },

  isLoadedData: function(index) {
    if (this.data['categoryInfo' + index]) {
      return true;
    }
    return false;
  },

  getDataObjForBind: function(index, data) {
    let obj = {},
      categoryTypeArr = this.data.categoryTypeArr,
      baseData = categoryTypeArr[index],
      nextBaseData = (categoryTypeArr.length - 1 === index) ? false : categoryTypeArr[index + 1];

    obj['categoryInfo' + index] = {
      childCategory: data,
      topImgUrl: baseData.img.url,
      nextTitle: nextBaseData ? nextBaseData.name : '',
      nextId: nextBaseData ? nextBaseData.id : '',
      curIndex: index + 1
    };
    obj['currentCategoryInfo'] = obj['categoryInfo' + index];
    this.setData(obj);
  },
  loadmore: function(e) {
    console.log(e);
    let nextId = e.target.dataset.nextid;
    let nextIndex = e.target.dataset.nextindex;
    console.log(nextId, nextIndex);
    this.onCategorySwitchTap(null, nextId, nextIndex)
    console.log('加载更多');
  },
  onCategorySearchTap: function() {
    console.log('跳转到搜索页面');
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