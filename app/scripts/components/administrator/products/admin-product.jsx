import React from 'react';
import CategoryStore from 'stores/category';
import CategoryActions from 'actions/category';
import AdminProductParams from 'components/administrator/products/admin-product-params';
import Dropzone from 'react-dropzone';

export default class AdminProduct extends React.Component {
  constructor() {
    this.state = {
      product: {
        images: [],
        params: []
      },
      category: {
        params: []
      },
      fileList: []
    }
    this.onLoadCategory = this.onLoadCategory.bind(this);
    this.handleChangeParams = this.handleChangeParams.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    let product = this.props.product;
    this.setState({ product });
    this.loadProduct(product);
    this.unsubscribe = CategoryStore.listen(this.onLoadCategory);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentWillReceiveProps(props) {
    let product = props.product;
    this.setState({ product });
    this.loadProduct(product);
  }

  loadProduct(product) {
    if (product.category_id) {
      CategoryActions.load(product.category_id);
    }
  }

  onLoadCategory(category) {
    this.setState({category});
  }

  handleChangeParams(params) {
    let product = this.state.product;
    product.params = params;
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
    this.props.onChange(this.state.product, this.state.fileList);
    e.preventDefault();
  }

  removeImage(e) {
    let imageId = e.target.dataset.id
      , product = this.state.product;
    product.images = product.images.filter(image => { return image.id != imageId });
    this.setState({product});
  }

  onDrop(files) {
    let fileList = this.state.fileList.concat(files);
    this.setState({ fileList });
  }

  render() {
    let product = this.state.product;
    let category = this.state.category;

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
    });

    let fileList = this.state.fileList.map((file, index) => {
      return (
        <tr key={ index }>
          <td colSpan={ 2 }>{ file.name }</td>
        </tr>
      )
    });

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
          <AdminProductParams productParams={ product.params } onChange={ this.handleChangeParams } categoryParams={ category.params } />
          <table className="table table-striped">
            <tbody>
            { imagesList }
            { fileList }
            </tbody>
          </table>
          <Dropzone size={ 200 } onDrop={ this.onDrop }>
            <div>
              Выберите файлы
            </div>
          </Dropzone>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Сохранить</button>
            <a className="btn btn-default" href="#">Отмена</a>
          </div>
        </form>
      </div>
    )
  }
}
