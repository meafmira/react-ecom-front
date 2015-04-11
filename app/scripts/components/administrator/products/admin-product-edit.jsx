import React from 'react';
import ProductActions from 'actions/product';
import ProductStore from 'stores/product';
import AdminProduct from 'components/administrator/products/admin-product';

export default class AdminProductEdit extends React.Component {
  constructor() {
    this.state = {
      product: {
        images: [],
        params: []
      },
      category: {
        params: []
      }
    }
    this.onLoadProduct = this.onLoadProduct.bind(this);
    this.handleChangeProduct = this.handleChangeProduct.bind(this);
  }

  static willTransitionTo(_, params) {
    ProductActions.loadOne(params.productId);
  }

  componentDidMount() {
    this.unsubscribe = ProductStore.listen(this.onLoadProduct);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadProduct(product) {
    this.setState({ product: product });
  }

  handleChangeProduct(product) {
    let product = product;
    ProductActions.save(product)
      .then(() => {
        this.context.router.transitionTo('administrator-category-products', { categoryId: product.category.id });
      });
  }

  render() {
    return (
      <AdminProduct onChange={ this.handleChangeProduct } product={ this.state.product } />
    )
  }
}

AdminProductEdit.contextTypes = {
  router: React.PropTypes.func
};
