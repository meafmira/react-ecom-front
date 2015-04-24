import React from 'react';
import AdminPostForm from 'components/administrator/posts/admin-post-form'
import PostActions from 'actions/post'

export default class AdminPostAdd extends React.Component {
  constructor() {
    this.state = {
      post: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    let post = post;
    post.post_category_id = this.context.router.getCurrentParams().categoryId;
    PostActions.create(post)
      .then(() => {
        this.context.router.transitionTo('administrator-posts-category', { categoryId: post.post_category_id });
      })
  }

  render() {
    let post = this.state.post;
    return (
      <AdminPostForm post={ post } onChange={ this.handleSubmit } />
    )
  }
}

AdminPostAdd.contextTypes = {
  router: React.PropTypes.func
};
