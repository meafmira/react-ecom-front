import Api from 'lib/api'
import Reflux from 'reflux'

let CategoriesActions = Reflux.createActions({
  loadAll: { asyncResult: true }
});

CategoriesActions.loadAll.listen(function (test) {
  Api.get('categories')
    .then(this.completed)
    .catch(this.failed);
});

export default CategoriesActions;
