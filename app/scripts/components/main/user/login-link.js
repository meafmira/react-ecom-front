import React from 'react';
import CurrentUserStore from 'stores/current-user';
import { Link } from 'react-router';

export default class LoginLink extends React.Component {
  constructor() {
    this.state = {
      user: CurrentUserStore.data.user
    }
    this.onUserLoad = this.onUserLoad.bind(this);
  }

  onUserLoad(data) {
    this.setState({user: data.user});
  }

  componentDidMount() {
    this.unsubscribe = CurrentUserStore.listen(this.onUserLoad);
  }

  render() {
    let user = this.state.user;
    if (user) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="login">{ user.email }</Link></li>
          <li><a href="#">Выход</a></li>
        </ul>
      )
    }
    else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="login">Вход / Регистрация</Link></li>
        </ul>
      )
    }
  }
}
