import {
  Category
} from 'category-model.js';
var category = new Category();

Page({
  data: {
    transClassArr: ['tanslate0', 'tanslate1', 'tanslate2', 'tanslate3', 'tanslate4', 'tanslate5'],
    categoryTypeArr: [{
        "id": 2,
        "name": "餐饮",
        "topic_img_id": 6,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-dryfruit.png",
          "update_time": "1970-01-01 08:00:00"
        }
      },
      {
        "id": 3,
        "name": "母婴",
        "topic_img_id": 5,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-vg.png",
          "update_time": "1970-01-01 08:00:00"
        }
      },
      {
        "id": 4,
        "name": "零售",
        "topic_img_id": 7,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-fry-a.png",
          "update_time": "1970-01-01 08:00:00"
        }
      },
      {
        "id": 5,
        "name": "服装",
        "topic_img_id": 4,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-cake.png",
          "update_time": "1970-01-01 08:00:00"
        }
      },
      {
        "id": 6,
        "name": "教育",
        "topic_img_id": 8,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-tea.png",
          "update_time": "1970-01-01 08:00:00"
        }
      },
      {
        "id": 7,
        "name": "建材",
        "topic_img_id": 9,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 8,
        "name": "金融",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 9,
        "name": "金融1",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 10,
        "name": "金10",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 11,
        "name": "金融11",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 12,
        "name": "金融12",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 13,
        "name": "金融13",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 14,
        "name": "金融14",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 15,
        "name": "金融15",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 16,
        "name": "金融16",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
      ,
      {
        "id": 17,
        "name": "金融17",
        "topic_img_id": 10,
        "description": null,
        "update_time": "1970-01-01 08:00:00",
        "img": {
          "url": "/category-rice.png",
          "update_time": "1970-01-01 08:00:00"
        }
      }
    ],
    currentMenuIndex: 0
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