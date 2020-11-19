import React from 'react'
import './Header.css'
import logo from '../static/images/logo.png'

function Header(props) {
    return (
        <header>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-left">
                    <a className="p-2" href="index.html">
                        <img className="rounded-circle border" width="30" height="30" src={logo} alt="Логотип"/>
                            <strong>МойбЛог</strong>
                    </a>
                    <a className="p-2 d-none d-md-inline-block" href="#">О себе</a>
                    <a className="p-2 d-none d-md-inline-block" href="#">Навигация</a>
                    <a className="p-2 d-none d-md-inline-block" href="signin.html">Вход</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;