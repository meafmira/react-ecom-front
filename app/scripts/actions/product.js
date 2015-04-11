import Reflux from 'reflux'
import Api from 'lib/api'

let ProductActions = Reflux.createActions({
  loadOne: { asyncResult: true },
  loadLatest: { asyncResult: true },
  save: { asyncResult: true },
  create: { asyncResult: true }
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

ProductActions.save.listen(function (product) {
  Api.patch(`products/${product.id}`, product)
    .then(this.completed)
    .catch(this.failed);
});

ProductActions.create.listen(function (product) {
  Api.post('products', product)
    .then(this.completed)
    .catch(this.failed);
})

export default ProductActions;
