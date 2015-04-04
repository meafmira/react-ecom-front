import React from 'react'
import ProductThumb from 'components/main/products/product-thumb'

export default class Latest extends React.Component {
  render () {
    let product = {
      img: "http://avtech.uz/3086-home_default/planshet-acer-iconia-tab-7-a1-713.jpg",
      title: "ACER TM8473-32374G50",
      shortDescription: "-5% Ноутбук ACER TM8473-32374G50 Mnkk 14.0\" / CPU Core i3-2370M / DDR 4 GB / HDD 500 GB"
    };
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          Новинки
        </div>
        <div className="panel-body">
          <ProductThumb product={ product } />
        </div>
      </div>
    )
  }
}
