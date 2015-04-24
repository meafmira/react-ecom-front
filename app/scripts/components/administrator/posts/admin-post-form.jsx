import React from 'react'

export default class AdminPostForm extends React.Component {
  constructor() {
    this.state = {
      post: {
        title: "",
        text: ""
      }
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({post: this.props.post});
  }

  componentWillReceiveProps(props) {
    this.setState({post: props.post});
  }

  handleChangeTitle(e) {
    let title = e.target.value
      , post = this.state.post;
    post.title = title;
    this.setState({post});
  }

  handleChangeText(e) {
    let text = e.target.value
      , post = this.state.post;
    post.text = text;
    this.setState({post});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onChange(this.state.post);
  }

  render() {
    let post = this.state.post;
    return (
      <div>
        <h1 className="page-header">{ post.title }</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Заголовок</label>
            <input className="form-control" value={ post.title } onChange={ this.handleChangeTitle } />
          </div>
          <div className="form-group">
            <label>Текст</label>
            <textarea rows="10" className="form-control" value={ post.text } onChange={ this.handleChangeText }></textarea>
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Сохранить</button>
          </div>
        </form>
      </div>
    )
  }
}
