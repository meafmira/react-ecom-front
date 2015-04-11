import React from 'react';
import { Link } from 'react-router';
import CartStore from 'stores/cart';
import CartLink from 'components/main/cart/cart-link';
import LoginLink from 'components/main/user/login-link';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="administrator">Administrator</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to="administrator-categories">Категории</Link>
              </li>
              <li>
                <Link to="administrator-pages">Страницы</Link>
              </li>
              <li>
                <Link to="administrator-posts-category" params={{ categoryId: 1 }}>Новости</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
