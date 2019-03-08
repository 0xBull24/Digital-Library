import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav className='green'>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                    <Link to="/">
                        Google Books
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        Search
                    </Link>
                </li>
                <li>
                    <Link to="/saved">
                        Saved
                    </Link>
                </li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href='https://github.com/DBiles/Digital-Library' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;