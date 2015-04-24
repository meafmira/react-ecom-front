import Reflux from 'reflux'
import Api from 'lib/api'

let PostCategoryActions = Reflux.createActions({
  loadOne: { asyncResult: true }
});

PostCategoryActions.loadOne.listen(function (categoryId) {
  this.promise(Api.get(`post-categories/${categoryId}`))
});

export default PostCategoryActions
