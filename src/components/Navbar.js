import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {setClick(false)};

    const showButton = () => {

        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

useEffect(() => {
    showButton()
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/trust-website/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img src='/public/logo.png'></img><p>Tiaki</p><p>Taonga</p><p>Trust</p>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/trust-website/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/donate' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Donate
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>DONATE</Button>}
            </div>
        </nav>

    </>
  )
}

export default Navbar