import React from 'react'
import { Link } from 'react-router'

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
                <Link to="category">Новости</Link>
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
          </div>
        </div>
      </nav>
    )
  }
}
