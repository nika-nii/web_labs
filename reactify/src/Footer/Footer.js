import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import './Footer.css'

function Footer(props) {
    return (
        <footer className="container-fluid text-center site-footer">
            <p>Контакты</p>
            <div className="container pb-4">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <p className="mr-3">
                            <a href="https://tg.me" className="text-info"><i className="fab fa-telegram" aria-hidden="true"> </i>Telegram</a>
                        </p>
                    </div>
                    <div className="col-3">
                        <p className="mr-3">
                            <a href="https://vk.com" className="text-info"><i className="fab fa-vk"
                                                                      aria-hidden="true"> </i>VK</a>
                        </p>
                    </div>
                    <div className="col-3">
                        <p className="mr-3">
                            <a href="https://twitter.com" className="text-info"><i className="fab fa-twitter"
                                                                           aria-hidden="true"> </i>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;