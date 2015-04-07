import React from 'react';
import ProductThumb from 'components/main/products/product-thumb';
import HomeCategoriesStore from 'stores/home-categories';
import CategoriesActions from 'actions/categories';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor() {
    this.onLoadCategories = this.onLoadCategories.bind(this);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.unsubscribe = HomeCategoriesStore.listen(this.onLoadCategories);
    CategoriesActions.loadHomeCategories();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadCategories(categories) {
    this.setState({ categories });
  }

  render() {
    let categories = this.state.categories;
    let categoryMap = categories.map(category => {
      let categoryProducts = category.limited_products;
      let categoryProductMap = categoryProducts.map(product => {
        return (
          <div className="col-md-4" key={product.id}>
            <ProductThumb product={ product } />
          </div>
        )
      })
      return (
        <div className="panel panel-default" key={category.id}>
          <div className="panel-heading">
            <Link to="product-category" params={{ categoryId: category.id }}>{ category.title }</Link>
          </div>
          <div className="panel-body">
            <div className="row">
              { categoryProductMap }
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        { categoryMap }
      </div>
    );
  }
}

export default Home;
