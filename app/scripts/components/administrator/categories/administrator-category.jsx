import React from 'react';
import CategoryStore from 'stores/category';
import CategoryActions from 'actions/category';
import { Link } from 'react-router';
import { addons } from 'react/addons';
import _ from 'lodash';

export default class AdministratorCategory extends React.Component {
  constructor() {
    this.onCategoryLoad = this.onCategoryLoad.bind(this);
    this.state = {
      category: {
        params: []
      }
    }
    this.addParam = this.addParam.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.onParamChange = this.onParamChange.bind(this);
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
    this.setState({category});
  }

  handleSubmit(e) {
    CategoryActions.update(this.state.category)
      .then((category) => {
        this.context.router.transitionTo('administrator-categories');
      });
    e.preventDefault();
  }

  onParamChange(e) {
    let paramId = e.target.dataset.id
      , category = this.state.category;
    category.params.forEach(param => {
      if (param.id == paramId) {
        param.name = e.target.value;
      }
    });
    this.setState({category});
  }

  addParam() {
    let id = _.max(this.state.category.params, param => { return param.id }).id + 1 || 1;
    console.log("new id: ", id);
    let category = addons.update(this.state.category, {
      params: {
        $push: [ { id, name: '' } ]
      }
    });
    this.setState({ category });
  }

  handleTitleChange(e) {
    let category = this.state.category;
    category.title = e.target.value;
    this.setState({category});
  }

  render() {
    let category = this.state.category;
    let categoryParamsList = category.params.map(param => {
      return (
        <div className="form-group" key={ param.id }>
          <label>Название параметра</label>
          <input className="form-control" value={ param.name } ref={ "param" + param.id } onChange={ this.onParamChange } data-id={ param.id } />
        </div>
      )
    })
    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Название</label>
            <input type="text" className="form-control" ref="categoryTitleInput" value={ this.state.category.title } onChange={ this.handleTitleChange } />
          </div>
          <hr />
          <h3>Параметры</h3>
          { categoryParamsList }
          <div className="form-group">
            <button type="button" className="btn btn-default" onClick={ this.addParam }>Добавить параметр</button>
          </div>
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
