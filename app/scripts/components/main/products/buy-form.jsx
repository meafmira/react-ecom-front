import React from 'react';
import CartActions from 'actions/cart';

export default class BuyForm extends React.Component {
  constructor() {
    this.state = {
      price: 0
    };
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      price: this.props.product.price
    });
  }

  handleCountChange(e) {
    this.setState({
      price: this.props.product.price * e.target.value
    });
  }

  handleSubmit(e) {
    let count = React.findDOMNode(this.refs.countInput).value;
    CartActions.add(this.props.product, parseInt(count));
    e.preventDefault();
  }

  render() {
    let product = this.props.product;
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label>Цена</label>
          <input disabled type="number" className="form-control" value={ this.state.price } />
        </div>
        <div className="form-group">
          <label>Количество</label>
          <input type="number" ref="countInput" className="form-control" max="100" min="1" defaultValue="1" onChange={ this.handleCountChange } />
        </div>
        <button className="btn btn-primary">Купить</button>
      </form>
    )
  }
}
