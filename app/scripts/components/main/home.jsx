import React from 'react';
import ProductThumb from 'components/main/products/product-thumb';
import HomeCategoriesStore from 'stores/home-categories';
import CategoriesActions from 'actions/categories';

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
          <div className="col-md-4">
            <ProductThumb product={ product } />
          </div>
        )
      })
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            { category.title }
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
