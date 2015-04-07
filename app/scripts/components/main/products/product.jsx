import React from 'react';
import { TabbedArea, TabPane } from 'react-bootstrap';
import RandomCategoryProducts from 'components/main/products/random-category-products';
import ProductActions from 'actions/product';
import ProductStore from 'stores/product';
import LightBox from 'components/common/lightbox';

export default class Product extends React.Component {
  constructor() {
    this.onLoadProduct = this.onLoadProduct.bind(this);
    this.state = {};
  }

  static willTransitionTo(transition, params) {
    ProductActions.loadOne(params.productId);
  }

  onLoadProduct(product) {
    this.setState({product});
  }

  componentDidMount() {
    this.unsubscribe = ProductStore.listen(this.onLoadProduct);
  }

  render () {
    const product = this.state.product;
    let productElement;

    if (product) {
      let paramsTable = product.params.map(param => {
        return (
          <tr key={param.id}>
            <th>{ param.param.name }</th>
            <td>{ param.value }</td>
          </tr>
        )
      });
      productElement = (
        <div>
          <h1 className="page-header">{ product.title }</h1>
          <div className="row">
            <div className="col-md-4">
              <img src={ product.thumb.path } className="img-responsive" />
            </div>
            <div className="col-md-8">
              <div className="row">
              {
                product.images.map(image => {
                  return (
                    <div className="col-md-3">
                      <LightBox src={ image.path } className="img-responsive" />
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TabbedArea defaultActiveKey={2}>
                <TabPane eventKey={1} tab='Описание'>
                  <p>{ product.description }</p>
                </TabPane>
                <TabPane eventKey={2} tab='Характеристики'>
                  <table className="table table-striped params-table">
                  { paramsTable }
                  </table>
                </TabPane>
              </TabbedArea>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">Похожие товары</div>
            <div className="panel-body">
              <RandomCategoryProducts categoryId={ product.category.id } excludeProductId={ product.id } />
            </div>
          </div>
        </div>
      )
    }
    else {
      productElement = <h1 className="loading page-header">Загрузка...</h1>
    }

    return <div>{ productElement }</div>;
  }
}
