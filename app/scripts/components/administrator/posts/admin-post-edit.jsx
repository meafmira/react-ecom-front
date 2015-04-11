import React from 'react';
import PostActions from 'actions/post';
import PostStore from 'stores/post';

export default class AdminPostEdit extends React.Component {
  constructor() {
    this.state = {
      post: {}
    }
    this.onLoadPost = this.onLoadPost.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static willTransitionTo(_, params) {
    PostActions.loadOne(params.postId);
  }

  componentDidMount() {
    this.unsubscribe = PostStore.listen(this.onLoadPost);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoadPost(post) {
    this.setState({post});
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
    let post = this.state.post;
    PostActions.save(post)
      .then(() => {
        this.context.router.transitionTo('administrator-posts-category', { categoryId: post.post_category_id });
      })
    e.preventDefault();
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

AdminPostEdit.contextTypes = {
  router: React.PropTypes.func
};
