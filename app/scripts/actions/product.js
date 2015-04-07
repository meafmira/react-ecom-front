import Reflux from 'reflux'
import Api from 'lib/api'

let ProductActions = Reflux.createActions({
  loadOne: { asyncResult: true },
  loadLatest: { asyncResult: true }
});

ProductActions.loadOne.listen(function (productId) {
  Api.get(`products/${productId}`)
    .then(this.completed)
    .catch(this.failed);
});

ProductActions.loadLatest.listen(function (latestProducts) {
  Api.get('products/latest')
    .then(this.completed)
    .catch(this.failed);
});

export default ProductActions;
