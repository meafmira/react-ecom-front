import React from 'react'
import ProductThumb from 'components/main/products/product-thumb'

export default class ProductList extends React.Component {
  render() {
    let products = this.props.products;
    let productList = products.map(product => {
      return (
        <div className="col-md-4" key={ product.id }>
          <ProductThumb product={product} />
        </div>
      );
    });

    return (
      <div>
        { productList }
      </div>
    )
  }
}
