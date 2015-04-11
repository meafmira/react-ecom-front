import React from 'react';
import PageStore from 'stores/page';
import PageActions from 'actions/pages';
import { Link } from 'react-router'

export default class AdminPage extends React.Component {
  constructor() {
    this.state = {
      page: {}
    }
    this.onLoadPage = this.onLoadPage.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static willTransitionTo(_, params) {
    PageActions.loadOne(params.pageId);
  }

  componentDidMount() {
    this.unsubscribe = PageStore.listen(this.onLoadPage);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadPage(page) {
    this.setState({page});
  }

  handleChangeTitle(e) {
    let title = e.target.value
      , page = this.state.page;
    page.title = title;
    this.setState({page});
  }

  handleChangeText(e) {
    let text = e.target.value
      , page = this.state.page;
    page.text = text;
    this.setState({page});
  }

  handleSubmit(e) {
    let page = this.state.page;
    PageActions.save(page)
      .then(() => {
        this.context.router.transitionTo('administrator-pages');
      })
    e.preventDefault();
  }

  render() {
    let page = this.state.page;
    return (
      <div>
        <h1 className="page-header">{ page.title }</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Название</label>
            <input value={ page.title } className="form-control" onChange={ this.handleChangeTitle } />
          </div>
          <div className="form-group">
            <label>Текст</label>
            <textarea value={ page.text } rows="10" className="form-control" onChange={ this.handleChangeText }></textarea>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary">Сохранить</button>
            <Link to="administrator-pages" className="btn btn-default">Отмена</Link>
          </div>
        </form>
      </div>
    )
  }
}

AdminPage.contextTypes = {
  router: React.PropTypes.func
};
