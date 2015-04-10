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
    this.removeParam = this.removeParam.bind(this);
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

  onParamChange(e) {
    let paramOrder = e.target.dataset.id
      , category = this.state.category;
    category.params.forEach(param => {
      if (param.order == paramOrder) {
        param.name = e.target.value;
      }
    });
    this.setState({category});
  }

  addParam() {
    let order = _.max(this.state.category.params, param => { return param.order }).order + 1 || 1;
    let category = addons.update(this.state.category, {
      params: {
        $push: [ { order, name: '', type: 'new' } ]
      }
    });
    this.setState({ category });
  }

  handleTitleChange(e) {
    let category = this.state.category;
    category.title = e.target.value;
    this.setState({category});
  }

  removeParam(e) {
    let category = this.state.category;
    let paramOrder = e.target.dataset.paramOrder;
    category.params = category.params.filter(param => { return param.order != paramOrder });
    this.setState({category});
  }

  render() {
    let category = this.state.category;
    let categoryParamsList = category.params.map(param => {
      return (
        <div className="form-group" key={ param.order }>
          <div className="row">
            <div className="col-md-9">
              <input className="form-control" value={ param.name } ref={ "param" + param.order } onChange={ this.onParamChange } data-id={ param.order } />
            </div>
            <div className="col-md-3">
              <button type="button" className="btn btn-danger" onClick={ this.removeParam } data-param-order={ param.order }>Удалить</button>
            </div>
          </div>
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
