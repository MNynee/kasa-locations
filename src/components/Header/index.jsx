import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-header'
import './Header.css'

function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Kasa logo" className="header-logo" />
                <nav className="nav">
                    <NavLink to="/" end="" className="nav-link">Accueil</NavLink>
                    <NavLink to="/about" className="nav-link">À Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header