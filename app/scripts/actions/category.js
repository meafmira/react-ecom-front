import Reflux from 'reflux';
import Api from 'lib/api';
import Cache from 'lib/cache';

let CategoryActions = Reflux.createActions({
  load: { asyncResult: true },
  loadRandomProducts: { asyncResult: true },
  loadProducts: { asyncResult: true },

  update: { asyncResult: true },
  remove: { asyncResult: true },
  create: { asyncResult: true }
});

CategoryActions.load.listen(function (categoryId) {
  let category = undefined;
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

CategoryActions.loadProducts.listen(function (categoryId) {
  this.promise(Api.get(`categories/${categoryId}/products`))
})

CategoryActions.loadRandomProducts.listen(function (categoryId) {
  this.promise(Api.get(`categories/${categoryId}/products?random=1`))
});

CategoryActions.update.listen(function (category) {
  this.promise(Api.patch(`categories/${category.id}`, category))
});

CategoryActions.remove.listen(function (categoryId) {
  this.promise(Api.delete(`categories/${categoryId}`))
});

CategoryActions.create.listen(function (category) {
  this.promise(Api.post(`categories`, category))
})

export default CategoryActions;
