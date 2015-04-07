import React from 'react';
import PageActions from 'actions/pages';
import PageStore from 'stores/page';
import TextPage from 'components/main/text-page'

export default class Page extends React.Component {
  constructor() {
    this.onLoadPage = this.onLoadPage.bind(this);
    this.state = { page: { title: 'Загрузка', text: '' } };
  }

  static willTransitionTo(_, params) {
    PageActions.loadOne(params.pageId);
  }

  componentDidMount() {
    this.unsubscribe = PageStore.listen(this.onLoadPage);
  }

  onLoadPage(page) {
    this.setState({page});
  }

  render () {
    let page = this.state.page;
    return (
      <TextPage page={page} />
    )
  }
}
