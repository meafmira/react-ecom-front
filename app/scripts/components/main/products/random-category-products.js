import React from 'react';
import CategoryRandomProductsStore from 'stores/category-random-products';
import CategoryActions from 'actions/category';
import ProductThumb from 'components/main/products/product-thumb';

export default class RandomCategoryProducts extends React.Component {
  constructor() {
    this.onLoadProducts = this.onLoadProducts.bind(this);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.unsubscribe = CategoryRandomProductsStore.listen(this.onLoadProducts);
    CategoryActions.loadRandomProducts(this.props.categoryId);
  }

  onLoadProducts(products) {
    this.setState({products});
  }

  render() {
    let products = this.state.products
      , excludeProductId = this.props.excludeProductId;
    let productList = products.map(product => {
      if (product.id != excludeProductId) {
        return (
          <div className="col-md-4">
            <ProductThumb product={ product } key={ product.id } />
          </div>
        )
      }
      else {
        return false;
      }
    });
    return (
      <div className="row">
        { productList }
      </div>
    )
  }
}
