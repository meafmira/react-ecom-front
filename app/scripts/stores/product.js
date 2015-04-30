import Reflux from 'reflux'
import ProductActions from 'actions/product'
import Cache from 'lib/cache'

let ProductStore = Reflux.createStore({
  //слушаем действия над товарами
  listenables: ProductActions,

  //при загрузке одного товара
  onLoadOneCompleted(product) {
    //добавляем товар в кэш
    Cache.setItem(`product:${product.id}`, product);
    //отправляем товар в компонент
    this.trigger(product);
  },

  //при начале загрузки товара
  onLoadOne(productId) {
    //пытаемся получить товар из кэша
    let product = Cache.getItem(`product:${productId}`);
    //если товар есть
    if (product) {
      //то отправляем его компоненту
      this.trigger(product);
    }
  }
});

export default ProductStore;
