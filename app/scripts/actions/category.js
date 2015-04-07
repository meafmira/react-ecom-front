import Reflux from 'reflux';
import Api from 'lib/api';
import Cache from 'lib/cache';

let CategoryActions = Reflux.createActions({
  load: { asyncResult: true },
  loadRandomProducts: { asyncResult: true }
});

CategoryActions.load.listen(function (categoryId) {
  let category = Cache.getItem(`category:${categoryId}`);
  if (!category) {
    Api.get(`categories/${categoryId}`)
      .then(category => {
        Cache.setItem(`category:${categoryId}`, category);
        this.completed(category);
      })
      .catch(this.failed);
  }
  else {
    this.completed(category);
  }
});

CategoryActions.loadRandomProducts.listen(function (categoryId) {
  Api.get(`categories/${categoryId}/products?random=1`)
    .then(this.completed)
    .catch(this.failed);
})

export default CategoryActions;
