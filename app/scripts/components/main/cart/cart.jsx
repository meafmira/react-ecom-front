import React from 'react';
import CartStore from 'stores/cart';
import CartActions from 'actions/cart';
import { Link } from 'react-router';

export default class Cart extends React.Component {
  constructor() {
    this.state = {
      cart: CartStore.data
    }
    this.onCartUpdate = this.onCartUpdate.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  onCartUpdate(cart) {
    this.setState({cart});
  }

  componentDidMount() {
    this.unsubscribe = CartStore.listen(this.onCartUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  removeItem(itemId) {
    CartActions.remove(itemId);
  }

  handleOrder() {
    CartActions.clear();
    this.context.router.transitionTo('order');
  }

  render() {
    let cart = this.state.cart;
    let totalPrice = 0;
    let itemList = cart.items.map(item => {
      totalPrice += item.price * item.count;
      return (
        <tr key={item.id}>
          <td width="100"><img className="img-responsive" src={ item.thumb.path } /></td>
          <td>
            <Link to="product" params={{ productId: item.id }}>{ item.title }</Link>
          </td>
          <td>{ item.count }</td>
          <td>{ item.price * item.count }</td>
          <td>
            <button type="button" className="btn btn-danger btn-small" onClick={ () => this.removeItem(item.id) }>Удалить</button>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <h1 className="page-header">Корзина</h1>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th colSpan="2">Наименование</th>
              <th>Количество</th>
              <th>Цена</th>
              <th></th>
            </tr>
            { itemList }
            <tr>
              <th className="text-right" colSpan="3">Итого</th>
              <th>{ totalPrice }</th>
              <th></th>
            </tr>
          </tbody>
        </table>
        <button disabled={ cart.items.length == 0 } className="btn btn-primary" onClick={ this.handleOrder }>Оформить заказ</button>
      </div>
    )
  }
}

Cart.contextTypes = {
  router: React.PropTypes.func
};
