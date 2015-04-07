import Reflux from 'reflux';
import CategoriesActions from 'actions/categories';

let HomeCategoriesStore = Reflux.createStore({
  listenables: CategoriesActions,
  onLoadHomeCategoriesCompleted(categories) {
    this.trigger(categories);
  }
});

export default HomeCategoriesStore
