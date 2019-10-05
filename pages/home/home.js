// pages/home/home.js
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
    swiperSetting: {

    },
    topPicData: [{
      id: 1,
      imgUrl: "http://m.jmw.com.cn/img/robibt_new.png",
      title: "1831品牌认证",
      slogan: "严格筛选品牌，减低风险"
    }, {
      id: 2,
      imgUrl: "http://m.jmw.com.cn/img/goodFood_new.png",
      title: "大众美食专区",
      slogan: "舌尖上的美味，大众最爱"
    }, {
      id: 2,
      imgUrl: "http://image1.jmw.com.cn/public/images/290_296.png",
      title: "推荐品牌",
      slogan: "精选优质品牌"
    }],
    topBrandData: [{
      id: 1,
      imgUrl: "http://attachment2.jmw.com.cn/pic/2018/08/10/87161533885029.jpg!m-w195h147",
      title: "海风K12在线教育",
      slogan: "￥3-5万"
    }, {
      id: 2,
      imgUrl: "http://attachment2.jmw.com.cn/pic/2018/08/10/87161533885029.jpg!m-w195h147",
      title: "海风K12在线教育",
      slogan: "￥3-5万"
    }, {
      id: 2,
      imgUrl: "http://attachment2.jmw.com.cn/pic/2018/08/10/87161533885029.jpg!m-w195h147",
      title: "海风K12在线教育",
      slogan: "￥3-5万"
    }],
    hotIndustryData: [{
      id: 1,
      imgUrl: "http://attachment2.jmw.com.cn/pic/2019/06/14/11651560503790.jpg!m-w195h147",
      title: "海风K12在线教育",
      total: 3112
    }, {
      id: 2,
      imgUrl: "http://attachment2.jmw.com.cn/pic/2019/05/21/42561558424524.jpg!m-w195h147",
      title: "海风K12在线教育",
      total: 1213
    }, {
      id: 2,
      imgUrl: "http://attachment2.jmw.com.cn/pic/2018/07/13/76821531450602.jpg!m-w195h147",
      title: "海风K12在线教育",
      total: 9123
    }]
  },


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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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