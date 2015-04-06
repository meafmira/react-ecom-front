import Reflux from 'reflux'
import Api from 'lib/Api'

let PageActions = Reflux.createActions({
  loadOne: { asyncResult: true }
});

PageActions.loadOne.listen(function (pageId) {
  Api.get(`pages/${pageId}`)
    .then(this.completed)
    .catch(this.failed);
});

export default PageActions;
