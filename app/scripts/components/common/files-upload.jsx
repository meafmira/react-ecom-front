import React from 'react';

export default class FilesUpload extends React.Component {
  constructor() {
    this.state = {
      fileList: []
    }
    this.onFileAdd = this.onFileAdd.bind(this);
  }

  componentDidMount() {
    this.fileInput = React.findDOMNode(this.refs.fileInput);
    $(this.fileInput).fileupload({
      add: this.onFileAdd
    });
  }

  componentWillUnmount() {
    $(this.fileInput).fileupload('destroy');
  }

  onFileAdd(e, data) {
    let fileList = this.state.fileList.concat(data.files);
    console.log(fileList);
    this.setState({ fileList: fileList });
    $(this.fileInput).fileupload();
    $(this.fileInput).fileupload('send', fileList);
  }

  render() {
    let fileList = this.state.fileList.map((file, index) => {
      return (
        <tr key={ index }>
          <td>{ file.name }</td>
        </tr>
      )
    });
    return (
      <div>
        <table className="table table-striped">
          <tbody>
            { fileList }
          </tbody>
        </table>
        <input type="file" ref="fileInput" />
      </div>
    )
  }
}
