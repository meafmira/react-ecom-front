import React from 'react'
import ProductActions from 'actions/product'
import ProductSearchStore from 'stores/product-search'
import ProductList from 'components/main/products/product-list'

export default class ProductSearch extends React.Component {
  constructor() {
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      products: []
    }
  }

  static willTransitionTo(_, params) {
    let query = params.query;
    ProductActions.search(query);
  }

  componentDidMount() {
    this.unsubscribe = ProductSearchStore.listen(this.onSearch);
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onSearch(results) {
    this.setState({
      products: results
    })
  }

  render() {
    let query = this.context.router.getCurrentParams().query;
    return (
      <div>
        <h1 className="page-header">Поиск: { query }</h1>
        <ProductList products={ this.state.products } />
      </div>
    )
  }
}

ProductSearch.contextTypes = {
  router: React.PropTypes.func
}
