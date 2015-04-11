import React from 'react';
import AdminCategory from 'components/administrator/categories/admin-category';
import CategoryActions from 'actions/category'

export default class AdminCategoryCreate extends React.Component {
  constructor() {
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(category) {
    CategoryActions.create(category)
      .then(() => {
        this.context.router.transitionTo('administrator-categories');
      });
  }

  render() {
    let category = {
      title: "",
      params: []
    }
    return (
      <AdminCategory category={ category } onSave={ this.handleSave } />
    )
  }
}

AdminCategoryCreate.contextTypes = {
  router: React.PropTypes.func
};
