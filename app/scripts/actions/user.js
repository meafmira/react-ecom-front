import Reflux from 'reflux';
import Api from 'lib/api';

let UserActions = Reflux.createActions({
  login: { asyncResult: true },
  loadCurrentUser: { asyncResult: true },
  logout: {},
  register: { asyncResult: true }
});

UserActions.login.listen(function (credentials) {
  Api.post('signin', credentials)
    .then(this.completed)
    .catch(this.failed);
});

UserActions.loadCurrentUser.listen(function () {
  Api.get('current-user')
    .then(this.completed)
    .catch(this.failed);
});

UserActions.register.listen(function (credentials) {
  Api.post('signup', credentials)
    .then(this.completed)
    .catch(this.failed);
})

export default UserActions;
