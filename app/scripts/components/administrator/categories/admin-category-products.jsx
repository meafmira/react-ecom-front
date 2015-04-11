import React from 'react';
import CategoryActions from 'actions/category';
import CategoryProductsStore from 'stores/category-products';
import { Link } from 'react-router';

export default class AdminCategoryProducts extends React.Component {
  constructor() {
    this.state = {
      products: []
    }
    this.onLoadProducts = this.onLoadProducts.bind(this);
  }

  static willTransitionTo(_, params) {
    CategoryActions.loadProducts(params.categoryId);
  }

  componentDidMount() {
    this.unsubscribe = CategoryProductsStore.listen(this.onLoadProducts);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadProducts(products) {
    this.setState({products});
  }

  render() {
    let products = this.state.products;
    let productList = products.map(product => {
      return (
        <tr key={ product.id }>
          <td>
            <Link to="administrator-product-edit" params={{ productId: product.id }}>{ product.title }</Link>
          </td>
          <td>{ product.price }</td>
          <td>{ product.discount }</td>
        </tr>
      )
    })
    return (
      <div>
        <h1 className="page-header">Товары</h1>
        <table className="table table-striped">
          <thead>
            <th>Название</th>
            <th>Цена</th>
            <th>Скидка</th>
          </thead>
          <tbody>
            { productList }
          </tbody>
        </table>
      </div>
    )
  }
}
