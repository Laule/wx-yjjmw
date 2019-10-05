import {Base} from '../../utils/base.js';

class Home extends Base {
  constructor() {
    super();
  }

  /*banner图片信息*/
  getBannerData(callback) {
    var that = this;
    var param = {
      url: 'homeBanner.json',
      sCallback: function(data) {
        console.log(data);
        callback && callback(data);
      }
    };
    this.request(param);
  }


  /*menu菜单信息*/
  getMenuData(callback) {
    var that = this;
    var param = {
      url: 'homeMenu.json',
      sCallback: function(data) {
        console.log(data);
        callback && callback(data);
      }
    };
    this.request(param);
  }


  /*主题内容*/
  getThemeData(callback) {
    var param = {
      url: 'homeTopPic.json',
      sCallback: function(data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  /*行业内容*/
  getIndustryData(callback) {
    var param = {
      url: 'homeHotIndustry.json',
      sCallback: function(data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  /*品牌内容*/
  getBrandData(callback) {
    var param = {
      url: 'homeTopBrand.json',
      sCallback: function(data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

};

export {Home};