import React from 'react'

class Register extends React.Component {

    //authservice = new this.authservice()

    constructor(props) {
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onClick = this.onClick.bind(this)
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

    onClick() {
        const { username, password } = this.state
        console.log(username, password)
        /*this.authservice.login(username, password)
            .then(() => {
                const history = createBrowserHistory()
                history.push('/preferences')
                window.location.reload()
            })*/
    }

    render() {
        return (
            <div className="container text-center mt-5">
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>

                    <label htmlFor="inputEmail" className="sr-only">E-Mail</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="E-Mail" 
                        onChange={this.onChangeUsername} required autoFocus />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Пароль" 
                        onChange={this.onChangePassword} required />

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Получать новостную рассылку
                        </label>
                        <label>
                            <input type="checkbox" value="remember-me" /> Я согласен с правилами
                        </label>
                    </div>
                    <button className="btn btn-lg btn-dark btn-block" type="submit" onClick={this.onClick}>Войти</button>
                </form>
            </div>
        );
    }
}

export default Register;