import React from 'react';
import AdminProduct from 'components/administrator/products/admin-product';
import ProductActions from 'actions/product';

export default class AdminProductAdd extends React.Component {
  constructor() {
    this.state = {
      product: {
        params: [],
        images: []
      }
    }
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  handleProductChange(product) {
    ProductActions.create(product)
      .then(() => {
        this.context.router.transitionTo('administrator-category-products', { categoryId: product.category_id });
      });
  }

  render() {
    let product = this.state.product;
    product.category_id = this.context.router.getCurrentParams().categoryId;
    return (
      <AdminProduct product={ product } onChange={ this.handleProductChange } />
    );
  }
}

AdminProductAdd.contextTypes = {
  router: React.PropTypes.func
};
