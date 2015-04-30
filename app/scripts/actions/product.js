import Reflux from 'reflux'
import Api from 'lib/api'

//создаем набор асинхронных действий
let ProductActions = Reflux.createActions({
  loadOne: { asyncResult: true }, //загрузка одного товара
  loadLatest: { asyncResult: true }, //загрузка последних товаров
  save: { asyncResult: true }, //сохранение товара
  create: { asyncResult: true }, //создание товара
  uploadImages: { asyncResult: true }, //загрузка изображения товара
  delete: { asyncResult: true }, //удаление товара
  search: { asyncResult: true } //поиск товаров
});

//слушаем действия и при получении ответа будет вызвано дейстие completed
//при ошибке - действие failed
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
});

ProductActions.search.listen(function (query) {
  this.promise(Api.get(`search/${query}`));
})

export default ProductActions;
