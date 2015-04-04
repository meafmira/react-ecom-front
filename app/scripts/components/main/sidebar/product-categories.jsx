import React from 'react'
import { Link } from 'react-router'

export default class ProductCategories extends React.Component {
  render () {
    let categories = [
      {
        title: "Планшеты"
      },
      {
        title: "Мобильные телефоны"
      }
    ];

    let categoryList = categories.map(category => {
      return (
        <li>
          <Link to="product-category">{category.title}</Link>
        </li>
      )
    });

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          Категории товаров
        </div>
        <div className="panel-body">
          <ul className="nav nav-pills nav-stacked">
            { categoryList }
          </ul>
        </div>
      </div>
    )
  }
}
