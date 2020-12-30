import React from 'react'
import './Header.css'
import logo from '../static/images/logo.png'
import { Link } from "react-router-dom";
import AuthService from '../Services/AuthServices';
import { createBrowserHistory } from 'history'

export default class Header extends React.Component {

    authservice = new AuthService()

    constructor(props) {
        super(props)
        this.onExitClicked = this.onExitClicked.bind(this)
    }

    onExitClicked() {
        this.authservice.logout()
        const history = createBrowserHistory()
        history.push('/')
        window.location.reload()
    }

    renderButton() {
        if (this.authservice.isLogged()) {
            return <Link className="p-2 d-none d-md-inline-block" onClick={this.onExitClicked}>Выход</Link>
        } else {
            return <Link className="p-2 d-none d-md-inline-block" to="/login">Вход</Link>
        }
    }

    render() {
        return (
            <header>
                <nav className="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-left">
                        <Link className="p-2" to="/">
                            <img className="rounded-circle border mx-3" width="30" height="30" src={logo}
                                alt="Логотип" />
                            <strong>МойбЛог</strong>
                        </Link>
                        <Link className="p-2 d-none d-md-inline-block" to="/about">Мои посты</Link>
                        {this.renderButton()}
                    </div>
                </nav>
            </header>
        );
    }
}
