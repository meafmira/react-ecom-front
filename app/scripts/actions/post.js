import Reflux from 'reflux';
import Api from 'lib/api';

let PostActions = Reflux.createActions({
  loadOne: { asyncResult: true },
  save: { asyncResult: true },
  create: { asyncResult: true },
  delete: { asyncResult: true }
});

PostActions.loadOne.listen(function (postId) {
  this.promise(Api.get(`posts/${postId}`))
});

PostActions.create.listen(function (post) {
  this.promise(Api.post(`posts`, post))
})

PostActions.save.listen(function (post) {
  this.promise(Api.patch(`posts/${post.id}`, post))
});

PostActions.delete.listen(function (postId) {
  this.promise(Api.delete(`posts/${postId}`, postId))
})

export default PostActions;
