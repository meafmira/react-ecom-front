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
        description: "",
        products: []
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
    this.unsubscribe = CategoryStore.listen(this.categoryLoaded);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    let category = this.state.category;
    let categoryDescription = false;

    if (category.description != "") {
      categoryDescription = <p className="lead">{ category.description }</p>
    }

    let categoryProducts = category.products.map(product => {
      return (
        <div className="col-md-4" key={ product.id }>
          <ProductThumb product={product} />
        </div>
      );
    })

    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
        { categoryDescription }
        <div className="row">
          { categoryProducts }
        </div>
      </div>
    )
  }
}
