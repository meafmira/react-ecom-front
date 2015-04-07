import React from 'react';
import CartStore from 'stores/cart';
import { Link } from 'react-router';

export default class Cart extends React.Component {
  constructor() {
    this.state = {
      cart: CartStore.data
    }
    this.onCartUpdate = this.onCartUpdate.bind(this);
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
        </tr>
      )
    });
    return (
      <div>
        <h1 className="page-header">Корзина</h1>
        <table className="table table-striped">
          <tr>
            <th colSpan="2">Наименование</th>
            <th>Количество</th>
            <th>Цена</th>
          </tr>
          { itemList }
          <tr>
            <th className="text-right" colSpan="3">Итого</th>
            <th>{ totalPrice }</th>
          </tr>
        </table>
      </div>
    )
  }
}
