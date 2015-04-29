import Reflux from 'reflux'
import ProductActions from 'actions/product'

let ProductSearchStore = Reflux.createStore({
  listenables: ProductActions,

  onSearchCompleted(results) {
    this.trigger(results);
  }
});

export default ProductSearchStore
