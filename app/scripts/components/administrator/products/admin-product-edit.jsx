import React from 'react';
import ProductActions from 'actions/product';
import ProductStore from 'stores/product';
import CategoryActions from 'actions/category';
import CategoryStore from 'stores/category';

export default class AdminProductEdit extends React.Component {
  constructor() {
    this.state = {
      product: {
        images: []
      },
      category: {
        params: []
      }
    }
    this.onLoadProduct = this.onLoadProduct.bind(this);
    this.onLoadCategory = this.onLoadCategory.bind(this);
    this.handleChangeParam = this.handleChangeParam.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  static willTransitionTo(_, params) {
    ProductActions.loadOne(params.productId);
  }

  componentDidMount() {
    this.unsubscribe = ProductStore.listen(this.onLoadProduct);
    this.unsubscribeCategory = CategoryStore.listen(this.onLoadCategory);
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.unsubscribeCategory();
  }

  onLoadProduct(product) {
    let paramsMap = {};
    product.params.forEach(param => {
      paramsMap[param.param_id] = param;
    });
    this.setState({ product, paramsMap });
    CategoryActions.load(product.category.id);
  }

  onLoadCategory(category) {
    this.setState({category});
  }

  handleChangeParam(e) {
    let param_id = e.target.dataset.paramId
      , value = e.target.value
      , paramsMap = this.state.paramsMap
      , product = this.state.product;
    if (paramsMap[param_id]) {
      product.params.forEach(param => {
        if (param.param_id == param_id) {
          param.value = value;
        }
      });
      paramsMap[param_id].value = value;
    }
    else {
      paramsMap[param_id] = { param_id, value };
      product.params.push({ param_id, value });
    }
    this.setState({ product });
  }

  handleProductChange(e) {
    let product = this.state.product
      , param = e.target.dataset.param
      , value = e.target.value;
    product[param] = value;
    this.setState({product});
  }

  handleSubmit(e) {
    let product = this.state.product;
    ProductActions.save(product)
      .then(() => {
        this.context.router.transitionTo('administrator-category-products', { categoryId: product.category.id });
      });
    e.preventDefault();
  }

  removeImage(e) {
    let imageId = e.target.dataset.id
      , product = this.state.product;
    product.images = product.images.filter(image => { return image.id != imageId });
    this.setState({product});
  }

  render() {
    let product = this.state.product;
    let category = this.state.category;
    let paramsMap = this.state.paramsMap;
    let paramList = category.params.map(param => {
      let paramInput;
      if (paramsMap[param.id]) {
        paramInput = (
          <input value={ paramsMap[param.id].value } className="form-control" data-param-id={ param.id } onChange={ this.handleChangeParam } />
        )
      }
      else {
        paramInput = (
          <input value="" className="form-control" data-param-id={ param.id } onChange={ this.handleChangeParam } />
        )
      }
      return (
        <div className="form-group" key={ param.id }>
          <label>{ param.name }</label>
          { paramInput }
        </div>
      )
    });

    let imagesList = product.images.map(image => {
      return (
        <tr key={ image.id }>
          <td width="100">
            <img src={ image.path } className="img-responsive" />
          </td>
          <td>
            <button type="button" onClick={ this.removeImage } className="btn btn-danger" data-id={ image.id }>Удалить</button>
          </td>
        </tr>
      )
    })

    return (
      <div>
        <h1 className="page-header">{ product.title }</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Название:</label>
            <input className="form-control" value={ product.title } onChange={ this.handleProductChange } data-param="title" />
          </div>
          <div className="form-group">
            <label>Описание:</label>
            <textarea className="form-control" onChange={ this.handleProductChange } data-param="description" value={ product.description }></textarea>
          </div>
          <div className="form-group">
            <label>Цена:</label>
            <input className="form-control" value={ product.price } onChange={ this.handleProductChange } data-param="price" />
          </div>
          <div className="form-group">
            <label>Скидка:</label>
            <input className="form-control" value={ product.discount } onChange={ this.handleProductChange } data-param="discount" />
          </div>
          { paramList }
          <table className="table table-striped">
            <tbody>
            { imagesList }
            </tbody>
          </table>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Сохранить</button>
            <a className="btn btn-default" href="#">Отмена</a>
          </div>
        </form>
      </div>
    )
  }
}

AdminProductEdit.contextTypes = {
  router: React.PropTypes.func
};
