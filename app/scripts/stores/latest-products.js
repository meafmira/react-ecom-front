import Reflux from 'reflux';
import ProductActions from 'actions/product';

let LatestProductsStore = Reflux.createStore({
  listenables: ProductActions,

  onLoadLatestCompleted(latestProducts) {
    this.trigger(latestProducts);
  }
});

export default LatestProductsStore
