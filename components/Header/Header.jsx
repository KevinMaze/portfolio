import React, { useState} from 'react'
import './header.css'
import '../../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
    /* Toggle menu */
    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className='nav__logo'>MAZE</Link>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Accueil
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/about" className="nav__link">
                                <i className="uil uil-presentation nav__icon"></i>  Présentation 
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/portfolio" className="nav__link">
                                <i className="uil uil-bag nav__icon"></i> Portfolio 
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/services" className="nav__link">
                                <i className="uil uil-desktop nav__icon"></i> Services 
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/contact" className="nav__link">
                                <i className="uil uil-at nav__icon"></i> Contact 
                            </Link>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
