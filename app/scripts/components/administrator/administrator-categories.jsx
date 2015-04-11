import React from 'react';
import CategoriesActions from 'actions/categories';
import CategoryActions from 'actions/category';
import CategoriesStore from 'stores/categories';
import { Link } from 'react-router';

import ConfirmModal from 'components/common/confirm-modal';

export default class AdministratorCategories extends React.Component {
  constructor() {
    this.onCategoriesLoaded = this.onCategoriesLoaded.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.unsubscribe = CategoriesStore.listen(this.onCategoriesLoaded);
    CategoriesActions.loadAll();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCategoriesLoaded(categories) {
    this.setState({categories});
  }

  removeCategory(categoryId) {
    CategoryActions.remove(categoryId)
      .then(CategoriesActions.loadAll);
  }

  render() {
    let categories = this.state.categories;
    let categoryList = categories.map(category => {
      return (
        <tr key={ category.id }>
          <td>
            <Link to="administrator-category" params={{ categoryId: category.id }}>{ category.title }</Link>
          </td>
          <td>
            <div className="btn-group">
              <Link to="administrator-category-products" params={{ categoryId: category.id }} className="btn btn-small btn-default">Товары</Link>
              <ConfirmModal text="Удалить категорию?" onYes={ () => this.removeCategory(category.id) }>
                <button type="button" className="btn btn-small btn-danger">Удалить</button>
              </ConfirmModal>
            </div>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <h1 className="page-header">Категории</h1>
        <table className="table table-striped">
          <theader>
            <th>Название</th>
            <th>Действия</th>
          </theader>
          <tbody>
            { categoryList }
          </tbody>
        </table>
        <Link to="administrator-category-create" className="btn btn-primary">Добавить</Link>
      </div>
    )
  }
}
