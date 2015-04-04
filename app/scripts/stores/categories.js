import Reflux from 'reflux'
import CategoriesActions from 'actions/categories'

export default Reflux.createStore({
  listenables: CategoriesActions,
  onLoadAllCompleted(categories) {
    this.trigger(categories);
  }
});
