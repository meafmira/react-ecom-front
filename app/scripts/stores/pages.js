import Reflux from 'reflux';
import PageActions from 'actions/pages';

let PagesStore = Reflux.createStore({
  listenables: PageActions,

  onLoadAllCompleted(pages) {
    this.trigger(pages);
  }
})

export default PagesStore;
