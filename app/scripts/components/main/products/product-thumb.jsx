import React from 'react'
import { Link } from 'react-router'

class ProductThumb extends React.Component {
  render () {
    let product = this.props.product
      , img = false;

    if (product.thumb) {
      img = (
        <Link to="product" params={{ productId: product.id }}>
          <img src={ product.thumb.path } />
        </Link>
      );
    }

    return (
      <div className="thumbnail">
        { img }
        <div className="caption">
          <h4>
            <Link to="product" params={{ productId: product.id }}>{ product.title }</Link>
          </h4>
          <p>{ product.shortDescription }</p>
        </div>
      </div>
    )
  }
}

export default ProductThumb;
