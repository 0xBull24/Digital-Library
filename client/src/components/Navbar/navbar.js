import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <nav className='amber'>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html" className="logo">Google Books</a></li>
                    <li><a href="badges.html">Search</a></li>
                    <li><a href="collapsible.html">Saved</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;