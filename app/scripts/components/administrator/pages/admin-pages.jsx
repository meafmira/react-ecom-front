import React from 'react';
import PageActions from 'actions/pages';
import PagesStore from 'stores/pages';
import { Link } from 'react-router';

export default class AdminPages extends React.Component {
  constructor() {
    this.onLoadPages = this.onLoadPages.bind(this);
    this.state = {
      pages: []
    }
  }

  componentDidMount() {
    this.unsubscribe = PagesStore.listen(this.onLoadPages);
    PageActions.loadAll();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadPages(pages) {
    this.setState({pages});
  }

  render() {
    let pages = this.state.pages;
    let pagesList = pages.map(page => {
      return (
        <tr key={ page.id }>
          <td>
            <Link to="administrator-page" params={{ pageId: page.id }}>{ page.title }</Link>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <h1 className="page-header">Страницы</h1>
        <table className="table table-striped">
          <tbody>
          { pagesList }
          </tbody>
        </table>
      </div>
    )
  }
}
