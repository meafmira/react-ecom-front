import React from 'react';
import { Link } from 'react-router';

class ProductThumb extends React.Component {
  render () {
    let product = this.props.product
      , img = false
      , productPrice;

    if (product.thumb) {
      img = (
        <Link to="product" params={{ productId: product.id }}>
          <img src={ product.thumb.path } className="product-thumb-image" />
        </Link>
      );
    }

    if (product.discount > 0) {
      productPrice = (
        <div>
          <p>Цена: <span className="text-danger">{ product.price * (1 - product.discount/100) }</span> $</p>
          <p>Скидка: <span className="text-danger">{ product.discount }</span> %</p>
        </div>
      )
    }
    else {
      productPrice = <p>Цена: <span className="text-primary">{ product.price }</span> $</p>
    }

    return (
      <div className="thumbnail">
        { img }
        <div className="caption">
          <h4>
            <Link to="product" params={{ productId: product.id }}>{ product.title }</Link>
          </h4>
          <p>{ product.shortDescription }</p>
          { productPrice }
        </div>
      </div>
    )
  }
}

export default ProductThumb;
