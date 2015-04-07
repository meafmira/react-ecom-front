import Reflux from 'reflux';
import UserActions from 'actions/user';
import Api from 'lib/api';

let AuthStore = Reflux.createStore({
  listenables: UserActions,

  onLoginCompleted(data) {
    localStorage['token'] = data.token;
    Api.headers.Authorization = `Bearer ${localStorage.token}`;
    UserActions.loadCurrentUser();
    this.trigger(data);
  },

  onLoginFailed(data) {
    this.trigger(data);
  }
});

export default AuthStore;
