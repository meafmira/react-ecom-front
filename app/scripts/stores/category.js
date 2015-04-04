import Reflux from 'reflux'
import CategoryActions from 'actions/category'

let CategoryStore = Reflux.createStore({
  listenables: CategoryActions,
  onLoadCompleted(category) {
    this.trigger(category);
  }
})

export default CategoryStore;
