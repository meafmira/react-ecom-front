import React from 'react';
import UserActions from 'actions/user';
import AuthStore from 'stores/auth';

export default class Login extends React.Component {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAuth = this.onAuth.bind(this);
    this.state = {
      error: null
    }
  }

  handleSubmit(e) {
    let email = React.findDOMNode(this.refs.emailInput).value
      , password = React.findDOMNode(this.refs.passwordInput).value;
    UserActions.login({ email, password });
    e.preventDefault();
  }

  componentDidMount() {
    this.unsubscribe = AuthStore.listen(this.onAuth);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAuth(data) {
    if (data.error) {
      this.setState({ error: data.error });
    }
    else {
      this.context.router.transitionTo('main');
    }
  }

  render() {
    let errorElement = false;
    if (this.state.error) {
      errorElement = (
        <div className="alert alert-danger">
          { this.state.error }
        </div>
      )
    }
    return (
      <div className="row">
        <div className="col-md-6">
          <h1 className="page-header">Вход</h1>
          <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" ref="emailInput" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Пароль:</label>
              <input type="password" ref="passwordInput" className="form-control" required />
            </div>
            { errorElement }
            <input type="submit" value="Войти" className="btn btn-primary" />
          </form>
        </div>
        <div className="col-md-6">
          <h1 className="page-header">Регистрация</h1>
          <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" ref="regEmailInput" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Пароль:</label>
              <input type="password" ref="regPasswordInput" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Подтверждение:</label>
              <input type="password" ref="regPasswordConfirmInput" className="form-control" required />
            </div>
            { errorElement }
            <input type="submit" value="Войти" className="btn btn-primary" />
          </form>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};
