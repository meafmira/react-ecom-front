import React from 'react';
import { Link } from 'react-router';
import CartStore from 'stores/cart';
import CartLink from 'components/main/cart/cart-link';
import LoginLink from 'components/main/user/login-link';
import SiteValueActions from 'actions/site-value'
import SiteValueStore from 'stores/site-value'

export default class Navbar extends React.Component {
  constructor() {
    this.onTitleLoaded = this.onTitleLoaded.bind(this);
    this.state = {
      title: 'Ecommerce'
    }
  }

  componentDidMount() {
    SiteValueActions.get(1);
    SiteValueStore.listen(this.onTitleLoaded);
  }

  onTitleLoaded(siteValue) {
    let title = siteValue.value;
    this.setState({title});
  }

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
            <Link className="navbar-brand" to="main">{this.state.title}</Link>
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
            <LoginLink />
            <ul className="nav navbar-nav navbar-right">
              <li>
                <CartLink />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
