import React from 'react'
import { Link } from 'react-router-dom';

function Navbar ({ isHeader }) {
    return (
        <nav  className={isHeader ? 'navbar-header' : 'navbar-footer'}>
            <ul>
                <li>
                    <Link className='home__nav' to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar