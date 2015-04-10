import React from 'react';
import CategoriesActions from 'actions/categories';
import CategoriesStore from 'stores/categories';

export default class AdministratorCategories extends React.Component {
  constructor() {
    this.onCategoriesLoaded = this.onCategoriesLoaded.bind(this);
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

  render() {
    let categories = this.state.categories;
    let categoryList = categories.map(category => {
      return (
        <tr>
          <td>{ category.title }</td>
          <td>
            <div className="btn-group">
              <a href="#" className="btn btn-small btn-default">Товары</a>
              <a href="#" className="btn btn-small btn-danger">Удалить</a>
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
      </div>
    )
  }
}
