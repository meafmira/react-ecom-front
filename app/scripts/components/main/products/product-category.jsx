import React from 'react'
import ProductThumb from 'components/main/products/product-thumb'
import CategoryActions from 'actions/category'
import CategoryStore from 'stores/category'

export default class ProductCategory extends React.Component {
  constructor() {
    this.categoryLoaded = this.categoryLoaded.bind(this);
    this.state = {
      category: {
        title: "",
        description: ""
      }
    };
  }

  static willTransitionTo(transition, params) {
    this.categoryId = params.categoryId;
    CategoryActions.load(this.categoryId);
  }

  categoryLoaded(category) {
    this.setState({category});
  }

  componentDidMount() {
    this.loadCategory();
    this.unsubscribe = CategoryStore.listen(this.categoryLoaded);
  }

  loadCategory() {

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    let category = this.state.category;
    let categoryDescription = false;
    let product = {
      img: "http://avtech.uz/3086-home_default/planshet-acer-iconia-tab-7-a1-713.jpg",
      title: "ACER TM8473-32374G50",
      shortDescription: "-5% Ноутбук ACER TM8473-32374G50 Mnkk 14.0\" / CPU Core i3-2370M / DDR 4 GB / HDD 500 GB"
    };

    if (category.description != "") {
      categoryDescription = <p className="lead">{ category.description }</p>
    }

    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
        { categoryDescription }
        <div className="row">
          <div className="col-md-4">
            <ProductThumb product={product} />
          </div>
          <div className="col-md-4">
            <ProductThumb product={product} />
          </div>
          <div className="col-md-4">
            <ProductThumb product={product} />
          </div>
          <div className="col-md-4">
            <ProductThumb product={product} />
          </div>
          <div className="col-md-4">
            <ProductThumb product={product} />
          </div>
          <div className="col-md-4">
            <ProductThumb product={product} />
          </div>
        </div>
      </div>
    )
  }
}
