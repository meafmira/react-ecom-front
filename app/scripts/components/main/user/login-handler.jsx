import React from 'react';
import Login from 'components/main/user/login';
import Registration from 'components/main/user/registration';

export default class LoginHandler extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Login />
        </div>
        <div className="col-md-6">
          <Registration />
        </div>
      </div>
    )
  }
}
