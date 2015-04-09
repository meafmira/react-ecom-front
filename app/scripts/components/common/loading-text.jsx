import React from 'react';

export default class LoadingText extends React.Component {
  render() {
    let lineCount = this.props.lineCount || 1
      , fontSize = this.props.fontSize || 12
      , lineHeight = this.props.lineHeight || fontSize * 1.5
      , linesElement = [];
    for (let i = 0; i < lineCount; i++) {
      if (lineCount > 1 && i == lineCount - 1) {
        linesElement.push(
          <div>
            <div style={{ height: lineHeight - fontSize / 1.5 }} />
            <div style={{ height: fontSize / 1.5, width: '35%' }} className="loading-gradient" />
          </div>
        )
      }
      else {
        linesElement.push(
          <div>
            <div style={{ height: lineHeight - fontSize / 1.5 }} />
            <div style={{ height: fontSize / 1.5 }} className="loading-gradient" />
          </div>
        )
      }
    };

    return (
      <div>
        { linesElement }
        <div style={{ height: lineHeight - fontSize / 1.5 }} />
      </div>
    )
  }
}
