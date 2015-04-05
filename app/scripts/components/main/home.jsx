import React from 'react'
import ProductThumb from 'components/main/products/product-thumb'

var Home = React.createClass({

  render: function() {
    let product = {
      id: 1,
      img: "http://avtech.uz/3086-home_default/planshet-acer-iconia-tab-7-a1-713.jpg",
      title: "ACER TM8473-32374G50",
      shortDescription: "-5% Ноутбук ACER TM8473-32374G50 Mnkk 14.0\" / CPU Core i3-2370M / DDR 4 GB / HDD 500 GB"
    };
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Планшеты
          </div>
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
        <div className="panel panel-default">
          <div className="panel-heading">
            Мобильные телефоны
          </div>
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
    );
  }
});

module.exports = Home;
