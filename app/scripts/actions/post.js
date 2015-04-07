import Reflux from 'reflux';
import Api from 'lib/api';

let PostActions = Reflux.createActions({
  loadOne: { asyncResult: true }
});

PostActions.loadOne.listen(function (postId) {
  Api.get(`posts/${postId}`)
    .then(this.completed)
    .catch(this.failed);
});

export default PostActions;
