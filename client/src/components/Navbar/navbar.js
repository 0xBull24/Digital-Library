import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <nav className='amber'>
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
            </div>
        </nav>
    )
}

export default Navbar;