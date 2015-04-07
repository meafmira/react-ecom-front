import React from 'react'
import { Link } from 'react-router'
import CategoriesActions from 'actions/categories'
import CategoriesStore from 'stores/categories'

export default class ProductCategories extends React.Component {
  constructor() {
    this.state = { categories: [] };
    this.categoriesLoaded = this.categoriesLoaded.bind(this);
  }

  categoriesLoaded(categories) {
    this.setState({categories: categories});
  }

  componentDidMount() {
    CategoriesActions.loadAll();
    this.unsubscribeCategories = CategoriesStore.listen(this.categoriesLoaded);
  }

  componentWillUnmount() {
    this.unsubscribeCategories();
  }

  render () {
    let categories = this.state.categories;

    let categoryList = categories.map(category => {
      return (
        <li key={ category.id }>
          <Link to="product-category" params={{ categoryId: category.id }}>{category.title}</Link>
        </li>
      )
    });

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          Категории товаров
        </div>
        <div className="panel-body">
          <ul className="nav nav-pills nav-stacked">
            { categoryList }
          </ul>
        </div>
      </div>
    )
  }
}
