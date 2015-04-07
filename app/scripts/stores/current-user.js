import Reflux from 'reflux';
import UserActions from 'actions/user';
import Api from 'lib/api';

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
  },

  onLogout() {
    localStorage['token'] = null;
    Api.headers.Authorization = null;
    this.data = {
      user: null
    }
    this.trigger(this.data);
  }
})

export default CurrentUserStore;
