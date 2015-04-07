import Reflux from 'reflux';
import Api from 'lib/api';

let UserActions = Reflux.createActions({
  login: { asyncResult: true }
});

UserActions.login.listen(function (credentials) {
  Api.post('signin', credentials)
    .then(this.completed)
    .catch(this.failed);
})

export default UserActions;
