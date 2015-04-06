import Reflux from 'reflux'
import PostCategoryActions from 'actions/post-category'


let PostCategoryStore = Reflux.createStore({
  listenables: PostCategoryActions,
  onLoadOneCompleted(category) {
    this.trigger(category);
  }
});

export default PostCategoryStore;
