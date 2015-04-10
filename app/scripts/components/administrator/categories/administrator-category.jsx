import React from 'react';
import CategoryStore from 'stores/category';
import CategoryActions from 'actions/category';
import { Link } from 'react-router';

import AdminCategoryParams from 'components/administrator/categories/admin-category-params';

export default class AdministratorCategory extends React.Component {
  constructor() {
    this.onCategoryLoad = this.onCategoryLoad.bind(this);
    this.state = {
      category: {
        params: []
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleParamsChange = this.handleParamsChange.bind(this);
  }

  static willTransitionTo(_, params) {
    CategoryActions.load(params.categoryId);
  }

  componentDidMount() {
    this.unsubscribe = CategoryStore.listen(this.onCategoryLoad);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCategoryLoad(category) {
    let category = category;
    category.params = category.params.map((param, order) => {
      param.order = order;
      return param;
    })
    this.setState({category});
  }

  handleSubmit(e) {
    CategoryActions.update(this.state.category)
      .then((category) => {
        this.context.router.transitionTo('administrator-categories');
      });
    e.preventDefault();
  }

  handleTitleChange(e) {
    let category = this.state.category;
    category.title = e.target.value;
    this.setState({category});
  }

  handleParamsChange(params) {
    let category = this.state.category;
    category.params = params;
    this.setState({category});
  }

  render() {
    let category = this.state.category;
    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Название</label>
            <input type="text" className="form-control" ref="categoryTitleInput" value={ this.state.category.title } onChange={ this.handleTitleChange } />
          </div>
          <hr />
          <AdminCategoryParams params={ category.params } onChange={ this.handleParamsChange } />
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Сохранить</button>
            <Link className="btn btn-default" to="administrator-categories">Отмена</Link>
          </div>
        </form>
      </div>
    )
  }
}

AdministratorCategory.contextTypes = {
  router: React.PropTypes.func
};
