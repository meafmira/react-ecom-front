import Reflux from 'reflux'
import Api from 'lib/api'

let PostCategoryActions = Reflux.createActions({
  loadOne: { asyncResult: true }
});

PostCategoryActions.loadOne.listen(function (categoryId) {
  Api.get(`post-categories/${categoryId}`)
    .then(this.completed)
    .catch(this.failed);
});

export default PostCategoryActions
