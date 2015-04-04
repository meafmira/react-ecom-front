import Reflux from 'reflux'
import Api from 'lib/api'

let CategoryActions = Reflux.createActions({
  load: { asyncResult: true }
});

CategoryActions.load.listen(function (categoryId) {
  Api.get(`categories/${categoryId}`)
    .then(this.completed)
    .catch(this.failed);
})

export default CategoryActions;
