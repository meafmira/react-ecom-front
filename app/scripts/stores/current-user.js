import Reflux from 'reflux';
import UserActions from 'actions/user';

let CurrentUserStore = Reflux.createStore({
  listenables: UserActions,

  init() {
    this.data = {
      user: null
    }
  },

  onLoadCurrentUserCompleted(data) {
    this.data = data;
    this.trigger(this.data);
  }
})

export default CurrentUserStore;
