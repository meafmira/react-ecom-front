import React from 'react';
import PostActions from 'actions/post';
import PostStore from 'stores/post';
import AdminPostForm from 'components/administrator/posts/admin-post-form'

export default class AdminPostEdit extends React.Component {
  constructor() {
    this.state = {
      post: {}
    }
    this.onLoadPost = this.onLoadPost.bind(this);
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

  handleSubmit(post) {
    PostActions.save(post)
      .then(() => {
        this.context.router.transitionTo('administrator-posts-category', { categoryId: post.post_category_id });
      });
  }

  render() {
    return (
      <AdminPostForm onChange={ this.handleSubmit } post={ this.state.post } />
    )
  }

}

AdminPostEdit.contextTypes = {
  router: React.PropTypes.func
};
