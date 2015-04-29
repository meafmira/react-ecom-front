import Reflux from 'reflux';
import CartActions from 'actions/cart';
import cookie from 'react-cookie';
import { addons as ReactAddons } from 'react/addons';

let update = ReactAddons.update;

let CartStore = Reflux.createStore({
  listenables: CartActions,

  init() {
    let cart = localStorage['cart'];
    try {
      this.data = JSON.parse(cart);
    }
    catch (e) {
      this.data = {
        items: []
      }
    }
  },

  onAdd(product, count) {
    let added = false;
    this.data.items.forEach(item => {
      if (item.id === product.id) {
        item.count += count;
        added = true;
      }
    });
    if (!added) {
      let item = update(product, { $merge: { count } });
      this.data.items.push(item);
    }
    localStorage['cart'] = JSON.stringify(this.data);
    this.trigger(this.data);
  },

  onRemove(productId) {
    this.data.items = this.data.items.filter(item => item.id != productId);
    localStorage['cart'] = JSON.stringify(this.data);
    this.trigger(this.data);
  },

  onClear() {
    this.data.items = [];
    localStorage['cart'] = JSON.stringify(this.data);
    this.trigger(this.data);
  }
});

export default CartStore;
