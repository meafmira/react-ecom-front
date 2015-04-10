import Reflux from 'reflux';
import CategoryActions from 'actions/category';

let CategoryProductsStore = Reflux.createStore({
  listenables: CategoryActions,

  onLoadProductsCompleted(products) {
    this.trigger(products);
  }
});

export default CategoryProductsStore;
