import Reflux from 'reflux';
import Api from 'lib/api';

let PageActions = Reflux.createActions({
  loadOne: { asyncResult: true },
  loadAll: { asyncResult: true },
  save: { asyncResult: true }
});

PageActions.loadOne.listen(function (pageId) {
  Api.get(`pages/${pageId}`)
    .then(this.completed)
    .catch(this.failed);
});

PageActions.loadAll.listen(function () {
  Api.get('pages')
    .then(this.completed)
    .catch(this.failed);
});

PageActions.save.listen(function (page) {
  Api.patch(`pages/${page.id}`, page)
    .then(this.completed)
    .catch(this.failed);
})

export default PageActions;
