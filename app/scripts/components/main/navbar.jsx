import React from 'react';
import { Link } from 'react-router';
import CartStore from 'stores/cart';
import CartLink from 'components/main/cart/cart-link';

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
            <Link className="navbar-brand" to="main">Ecommerce</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to="page" params={{ pageId: 1 }}>Рассрочка</Link>
              </li>
              <li>
                <Link to="page" params={{ pageId: 2 }}>Сервис-центр</Link>
              </li>
              <li>
                <Link to="page" params={{ pageId: 3 }}>Бонусы</Link>
              </li>
              <li>
                <Link to="page" params={{ pageId: 4 }}>О нас</Link>
              </li>
              <li>
                <Link to="post-category" params={{ categoryId: 1 }}>Новости</Link>
              </li>
              <li>
                <Link to="page" params={{ pageId: 5 }}>Оплата и доставка</Link>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="поиск..." />
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <CartLink />
              </li>
              <li>
                <Link to="login">Войти</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
