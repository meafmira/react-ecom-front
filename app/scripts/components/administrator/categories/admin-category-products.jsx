import React from 'react';
import CategoryActions from 'actions/category';
import CategoryProductsStore from 'stores/category-products';
import ProductActions from 'actions/product';
import { Link } from 'react-router';
import ConfirmModal from 'components/common/confirm-modal';

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

  removeProduct(product) {
    ProductActions.delete(product.id)
      .then(() => CategoryActions.loadProducts(product.category_id))
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
          <td>
              <ConfirmModal text="Удалить товар?" onYes={ () => this.removeProduct(product) }>
                <button type="button" className="btn btn-small btn-danger">Удалить</button>
              </ConfirmModal>
          </td>
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
            <th></th>
          </thead>
          <tbody>
            { productList }
          </tbody>
        </table>
        <div className="btn-group">
          <Link className="btn btn-primary" to="administrator-product-create" params={ {categoryId: this.context.router.getCurrentParams().categoryId} }>Добавить</Link>
        </div>
      </div>
    )
  }
}

AdminCategoryProducts.contextTypes = {
  router: React.PropTypes.func
};
