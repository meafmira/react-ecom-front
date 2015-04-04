import React from 'react'
import { TabbedArea, TabPane } from 'react-bootstrap'
import ProductThumb from 'components/main/products/product-thumb'

export default class Product extends React.Component {
  render () {
    const product = {
      img: "http://avtech.uz/2568-large_default/planshet-acer-iconia-one-7-b1-730hd.jpg",
      title: "Samsung Galaxy S6",
      weight: 0.2,
      price: "900000",
      warranty: 3,
      description: "Cursus dis et enim dignissim! Mauris lectus montes, dictumst amet purus penatibus? Ultrices a, phasellus, nec nec proin dapibus adipiscing amet. Magna nascetur sit. Turpis, a vel amet aliquam, facilisis cras! Porta enim, placerat urna! Non mid tempor tempor? Aenean? Cursus, vut duis! Augue massa purus massa magna, etiam a, magna? Proin vel ut vut nec mattis. Non urna ac, ac risus placerat aliquam, porta nunc turpis lacus rhoncus dis! Turpis augue? Platea sit habitasse montes nunc lundium, placerat lorem elementum? Placerat? Pulvinar non, nunc mid tempor a odio etiam scelerisque hac pellentesque mid turpis integer, scelerisque ac! Phasellus ut, mus purus aliquam ultrices velit in parturient diam parturient odio aenean penatibus, diam platea odio augue vel. Parturient vel pulvinar.",
      params: [
        {
          name: "Диагональ",
          value: "5.5"
        },
        {
          name: "Процессор",
          value: "Qualcomm Snapdragon 810"
        },
        {
          name: "Операционная система",
          value: "Android 5.0.2"
        }
      ]
    };

    let paramsTable = product.params.map(param => {
      return (
        <tr>
          <th>{ param.name }</th>
          <td>{ param.value }</td>
        </tr>
      )
    });

    return (
      <div>
        <h1 className="page-header">{ product.title }</h1>
        <div className="row">
          <div className="col-md-4">
            <img src={ product.img } />
          </div>
          <div className="col-md-8">
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TabbedArea defaultActiveKey={2}>
              <TabPane eventKey={1} tab='Описание'>
                <p>{ product.description }</p>
              </TabPane>
              <TabPane eventKey={2} tab='Характеристики'>
                <table className="table table-striped">
                { paramsTable }
                </table>
              </TabPane>
            </TabbedArea>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Похожие товары</div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <ProductThumb product={ product } />
              </div>
              <div className="col-md-4">
                <ProductThumb product={ product } />
              </div>
              <div className="col-md-4">
                <ProductThumb product={ product } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
