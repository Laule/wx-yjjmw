import {
  Base
} from '../../utils/base.js';

class Category extends Base {
  constructor() {
    super();
  }

  /*获得所有分类*/
  getCategoryType(callback) {
    var param = {
      url: 'category.json',
      sCallback: function(data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  /*获得某种分类的子类*/
  getCategoryByChild(id, callback) {
    var param = {
      url: 'category' + id + '.json',
      sCallback: function(data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export {
  Category
};