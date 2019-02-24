import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <nav className='green'>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <a href='/' className="logo"> Google Books</a>
                    </li>
                    <li>
                        <a href='/search'>Search</a>
                    </li>
                    <li>
                        <a href='/saved'> Saved</a>
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