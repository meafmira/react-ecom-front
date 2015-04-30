//подключение необходимых модулей
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
    //слушаем изменения в хранилище категорий для главной страницы
    this.unsubscribe = HomeCategoriesStore.listen(this.onLoadCategories);
    //загружаем категории главной страницы
    CategoriesActions.loadHomeCategories();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadCategories(categories) {
    //при получении категорий меняем состояние компонента
    this.setState({ categories });
  }

  render() {
    let categories = this.state.categories;
    //отображение категорий
    let categoryMap = categories.map(category => {
      let categoryProducts = category.limited_products;
      let categoryProductMap = categoryProducts.map(product => {
        return (
          <div className="col-md-4" key={product.id}>
            <ProductThumb product={ product } />
          </div>
        )
      })
      //отображение главной страницы
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
