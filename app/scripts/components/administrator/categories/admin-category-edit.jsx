import React from 'react';
import CategoryStore from 'stores/category';
import CategoryActions from 'actions/category';
import AdminCategory from 'components/administrator/categories/admin-category';

export default class AdministratorCategory extends React.Component {
  constructor() {
    this.state = {
      category: {
        params: []
      }
    }
    this.onCategoryLoad = this.onCategoryLoad.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  handleSave(category) {
    CategoryActions.update(category)
      .then((category) => {
        this.context.router.transitionTo('administrator-categories');
      });
  }

  render() {
    let category = this.state.category;
    return (
      <AdminCategory category={ category } onSave={ this.handleSave } />
    )
  }
}

AdministratorCategory.contextTypes = {
  router: React.PropTypes.func
};
