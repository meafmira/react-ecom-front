import Reflux from 'reflux'
import CategoryActions from 'actions/category'

let categoriesHash = {};

let CategoryStore = Reflux.createStore({
  listenables: CategoryActions,
  onLoadCompleted(category) {
    this.trigger(category);
  }
})

export default CategoryStore;
