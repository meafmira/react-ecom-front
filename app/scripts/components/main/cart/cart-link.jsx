import React from 'react';
import CartStore from 'stores/cart';
import { Link } from 'react-router';

export default class CartLink extends React.Component {
  constructor() {
    this.state = {
      count: CartStore.data.items.length
    };
    this.onCartUpdate = this.onCartUpdate.bind(this);
  }

  onCartUpdate(cart) {
    let count = cart.items.length;
    this.setState({count});
  }

  componentDidMount() {
    this.unsubscribe = CartStore.listen(this.onCartUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <a href="">Корзина ({this.state.count})</a>
    )
  }
}
