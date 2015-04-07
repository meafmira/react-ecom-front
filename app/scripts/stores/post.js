import Reflux from 'reflux';
import PostActions from 'actions/post';

let PostStore = Reflux.createStore({
  listenables: PostActions,

  onLoadOneCompleted(post) {
    this.trigger(post);
  }
});

export default PostStore
