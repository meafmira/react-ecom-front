import Reflux from 'reflux'
import Api from 'lib/api'

let ProductActions = Reflux.createActions({
  loadOne: { asyncResult: true },
  loadLatest: { asyncResult: true },
  save: { asyncResult: true },
  create: { asyncResult: true },
  uploadImages: { asyncResult: true },
  delete: { asyncResult: true }
});

ProductActions.loadOne.listen(function (productId) {
  this.promise(Api.get(`products/${productId}`))
});

ProductActions.loadLatest.listen(function (latestProducts) {
  this.promise(Api.get('products/latest'))
});

ProductActions.save.listen(function (product) {
  this.promise(Api.patch(`products/${product.id}`, product))
});

ProductActions.create.listen(function (product) {
  this.promise(Api.post('products', product))
});

ProductActions.uploadImages.listen(function (productId, images) {
  this.promise(Api.upload(`products/${productId}/images`, images))
});

ProductActions.delete.listen(function (productId) {
  this.promise(Api.delete(`products/${productId}`))
})

export default ProductActions;
