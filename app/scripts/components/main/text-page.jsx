import React from 'react';
import LoadingText from 'components/common/loading-text';

export default class TextPage extends React.Component {
  render() {
    let page = this.props.page;
    return (
      <div>
        <h1 className="page-header">{ page.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: page.text } }></div>
      </div>
    )
  }
}
