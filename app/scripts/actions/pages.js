import Reflux from 'reflux';
import Api from 'lib/api';

let PageActions = Reflux.createActions({
  loadOne: { asyncResult: true },
  loadAll: { asyncResult: true },
  save: { asyncResult: true }
});

PageActions.loadOne.listen(function (pageId) {
  this.promise(Api.get(`pages/${pageId}`))
});

PageActions.loadAll.listen(function () {
  this.promise(Api.get('pages'))
});

PageActions.save.listen(function (page) {
  this.promise(Api.patch(`pages/${page.id}`, page))
})

export default PageActions;
