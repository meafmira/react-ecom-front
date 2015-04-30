import React from 'react';
import { Link } from 'react-router';
import CartStore from 'stores/cart';
import CartLink from 'components/main/cart/cart-link';
import LoginLink from 'components/main/user/login-link';
import SiteValueActions from 'actions/site-value'
import SiteValueStore from 'stores/site-value'
import PagesActions from 'actions/pages'
import PagesStore from 'stores/pages'
import classnames from 'classnames'

export default class Navbar extends React.Component {
  constructor() {
    this.onTitleLoaded = this.onTitleLoaded.bind(this);
    this.state = {
      title: 'Ecommerce',
      pages: [],
      menuOpen: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.onPagesLoaded = this.onPagesLoaded.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  componentDidMount() {
    SiteValueActions.get(1);
    SiteValueStore.listen(this.onTitleLoaded);
    this.unsubscribe = PagesStore.listen(this.onPagesLoaded);
    PagesActions.loadAll();
  }

  componentWillUnmount() {
    this.ubsubscribe();
  }

  onTitleLoaded(siteValue) {
    let title = siteValue.value;
    this.setState({title});
  }

  handleSearch(e) {
    e.preventDefault();
    let query = React.findDOMNode(this.refs.searchInput).value;
    this.context.router.transitionTo('search', { query });
  }

  onPagesLoaded(pages) {
    this.setState({pages});
  }

  handleMenuOpen(e) {
    e.preventDefault();
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    let pagesList = this.state.pages.map(page => {
      return (
        <li>
          <Link to="page" params={{ pageId: page.id }}>{ page.title }</Link>
        </li>
      )
    });

    let menuClasses = classnames('navbar-collapse', { collapse: !this.state.menuOpen });

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={ this.handleMenuOpen }>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="main">{this.state.title}</Link>
          </div>

          <div className={ menuClasses } id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              { pagesList }
              <li>
                <Link to="post-category" params={{ categoryId: 1 }}>Новости</Link>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search" onSubmit={ this.handleSearch }>
              <div className="form-group">
                <input type="text" ref="searchInput" className="form-control" placeholder="поиск..." />
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

Navbar.contextTypes = {
  router: React.PropTypes.func
};
