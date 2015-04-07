import Reflux from 'reflux';
import CategoryActions from 'actions/category';

let CategoryRandomProducts = Reflux.createStore({
  listenables: CategoryActions,

  onLoadRandomProductsCompleted(randomProducts) {
    this.trigger(randomProducts);
  }
});

export default CategoryRandomProducts;
