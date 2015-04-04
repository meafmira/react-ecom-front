import React from 'react'
import { Link } from 'react-router'

export default class ProductThumb extends React.Component {
  render () {
    let product = this.props.product;
    return (
      <div className="thumbnail">
        <img src={ product.img } />
        <div className="caption">
          <h4>
            <Link to="products">{ product.title }</Link>
          </h4>
          <p>{ product.shortDescription }</p>
        </div>
      </div>
    )
  }
}
