import React from 'react'
import './Login.css'
import AuthService from '../Services/AuthServices'
import { createBrowserHistory } from 'history'

export default class Login extends React.Component {

    authservice = new AuthService()

    constructor(props) {
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        username: null,
        password: null
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        const { username, password } = this.state
        this.authservice.login(username, password)
            .then(() => {
                const history = createBrowserHistory()
                history.push('/')
                window.location.reload()
            })
    }

    render() {
        return (
            <div className="container text-center mt-5">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Вход в систему</h1>
                    <label htmlFor="inputUsername" className="sr-only">Логин</label>
                    <input  id="inputUsername" className="form-control" placeholder="Логин"
                        autoFocus onChange={this.onChangeUsername} />
                    <label htmlFor="inputPassword" className="sr-only">Пароль</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Пароль"
                        onChange={this.onChangePassword} />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Запомнить меня
                        </label>
                        <div>Нет учетной записи? <a href="/register">Регистрация</a></div>
                    </div>
                    <button className="btn btn-lg btn-dark btn-block" type='submit'>Войти</button>
                </form>
            </div>
        );
    }
}