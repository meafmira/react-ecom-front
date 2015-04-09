import React from 'react';
import RegisterStore from 'stores/register';
import UserActions from 'actions/user';

export default class Registration extends React.Component {
  constructor() {
    this.onRegister = this.onRegister.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: null
    }
  }

  componentDidMount() {
    this.unsubscribe = RegisterStore.listen(this.onRegister);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onRegister(data) {
    if (data.error !== undefined) {
      this.setState({ error: 'Пользователь с таким email уже зарегистрирован' });
    }
    else {
      this.context.router.transitionTo('main');
    }
  }

  handleSubmit(e) {
    let email = React.findDOMNode(this.refs.emailInput).value
      , password = React.findDOMNode(this.refs.passwordInput).value
      , passwordConfirm = React.findDOMNode(this.refs.passwordConfirmInput).value;
    if (password === passwordConfirm) {
      UserActions.register({ email, password });
    }
    else {
      this.setState({
        error: "Пароль и подтверждение не совпадают"
      })
    }
    e.preventDefault();
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
      <div>
        <h1 className="page-header">Регистрация</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" ref="emailInput" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input type="password" ref="passwordInput" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Подтверждение:</label>
            <input type="password" ref="passwordConfirmInput" className="form-control" required />
          </div>
          { errorElement }
          <input type="submit" value="Войти" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

Registration.contextTypes = {
  router: React.PropTypes.func
};
