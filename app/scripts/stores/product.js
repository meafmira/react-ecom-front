import Reflux from 'reflux'
import ProductActions from 'actions/product'
import Cache from 'lib/cache'

let ProductStore = Reflux.createStore({
  listenables: ProductActions,

  onLoadOneCompleted(product) {
    Cache.setItem(`product:${product.id}`, product);
    this.trigger(product);
  },

  onLoadOne(productId) {
    let product = Cache.getItem(`product:${productId}`);
    if (product) {
      this.trigger(product);
    }
  }
});

export default ProductStore;
