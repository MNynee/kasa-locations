import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-header.png'
import '../../main.css'

function Header() {
    return (
        <header>
            <div className="header__container">
                <img src={logo} alt="Kasa logo" className="header__logo" />
                <nav className="header__nav">
                    <NavLink to="/" end="" className="nav__link">Accueil</NavLink>
                    <NavLink to="/about" className="nav__link">À Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header