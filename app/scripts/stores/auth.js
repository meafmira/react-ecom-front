import Reflux from 'reflux';
import UserActions from 'actions/user';

let AuthStore = Reflux.createStore({
  listenables: UserActions,

  onLoginCompleted(data) {
    this.trigger(data);
  },

  onLoginFailed(data) {
    console.log(data);
    this.trigger(data);
  }
});

export default AuthStore;
