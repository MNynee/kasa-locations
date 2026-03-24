import React from 'react'
import logo from '../../assets/logo-footer.png'
import '../../main.css'

const Footer = () => {
  return (
        <footer>
            <div className="footer__container">
                <img src={logo} alt="Logo Kasa" className="footer__logo" />
                <p className="footer__text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer