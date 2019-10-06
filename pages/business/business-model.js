import {Base} from '../../utils/base.js';

class Business extends Base {
  constructor() {
    super();
  }

  /*获得所有分类*/
  getNavBarList(callback) {
    var param = {
      url: 'navBar.json',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export {
  Business
};