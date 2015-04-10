import React from 'react';
import AdminCategoryParams from 'components/administrator/categories/admin-category-params';
import { Link } from 'react-router';

export default class AdminCategory extends React.Component {
  constructor() {
    this.state = {
      category: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleParamsChange = this.handleParamsChange.bind(this);
  }

  componentWillReceiveProps(props) {
    let category = props.category;
    this.setState({category});
  }

  handleSubmit(e) {
    this.props.onSave(this.state.category);
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
