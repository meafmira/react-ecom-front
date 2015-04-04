import React from 'react'
import ProductCategories from 'components/main/sidebar/product-categories'
import LatestProducts from 'components/main/sidebar/latest-products'

export default
class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <ProductCategories />
        <LatestProducts />
      </div>
    )
  }
}
