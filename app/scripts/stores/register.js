import Reflux from 'reflux';
import UserActions from 'actions/user';
import Api from 'lib/api'

let RegisterStore = Reflux.createStore({
  listenables: UserActions,

  onRegisterCompleted(data) {
    localStorage['token'] = data.token;
    Api.headers.Authorization = `Bearer ${localStorage.token}`;
    UserActions.loadCurrentUser();
    this.trigger(data);
  },

  onRegisterFailed(data) {
    this.trigger(data);
  }
})

export default RegisterStore;
