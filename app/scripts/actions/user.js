import Reflux from 'reflux';
import Api from 'lib/api';

let UserActions = Reflux.createActions({
  login: { asyncResult: true },
  loadCurrentUser: { asyncResult: true },
  logout: {},
  register: { asyncResult: true }
});

UserActions.login.listen(function (credentials) {
  this.promise(Api.post('signin', credentials))
});

UserActions.loadCurrentUser.listen(function () {
  this.promise(Api.get('current-user'))
});

UserActions.register.listen(function (credentials) {
  this.promise(Api.post('signup', credentials))
})

export default UserActions;
