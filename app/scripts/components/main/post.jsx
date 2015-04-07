import React from 'react';
import TextPage from 'components/main/text-page';
import PostStore from 'stores/post';
import PostActions from 'actions/post'

export default class Post extends React.Component {
  constructor() {
    this.onLoadPost = this.onLoadPost.bind(this);
    this.state = {
      post: {
        title: "Загрузка",
        text: ""
      }
    }
  }

  static willTransitionTo(transition, params) {
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

  render() {
    let post = this.state.post;
    return (
      <TextPage page={post} />
    )
  }
}
