import Api from 'lib/api';
import Reflux from 'reflux';

let CategoriesActions = Reflux.createActions({
  loadAll: { asyncResult: true },
  loadHomeCategories: { asyncResult: true }
});

CategoriesActions.loadAll.listen(function () {
  this.promise(Api.get('categories'))
});

CategoriesActions.loadHomeCategories.listen(function () {
  this.promise(Api.get('categories/random'))
})

export default CategoriesActions;
