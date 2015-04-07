import Api from 'lib/api';
import Reflux from 'reflux';

let CategoriesActions = Reflux.createActions({
  loadAll: { asyncResult: true },
  loadHomeCategories: { asyncResult: true }
});

CategoriesActions.loadAll.listen(function () {
  Api.get('categories')
    .then(this.completed)
    .catch(this.failed);
});

CategoriesActions.loadHomeCategories.listen(function () {
  Api.get('categories/random')
    .then(this.completed)
    .catch(this.failed);
})

export default CategoriesActions;
