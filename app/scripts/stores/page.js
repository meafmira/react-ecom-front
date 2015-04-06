import Reflux from 'reflux'
import PageActions from 'actions/pages'

let PageStore = Reflux.createStore({
  listenables: PageActions,
  onLoadOneCompleted(page) {
    this.trigger(page);
  }
})

export default PageStore;
