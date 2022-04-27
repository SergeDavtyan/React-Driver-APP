import React, {useState} from 'react';
import {FaBars, FaTimes, FaFacebook, FaInstagram} from "react-icons/fa";
import {GiCarWheel} from "react-icons/gi";
import { Link } from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const handleClose = () => setNav(false);

    return (
        <div name="navbar" className='navbar'>
            <div className='container'>

                <div className={nav ? 'logo slide-right' : 'logo'}>
                    <h3>Race.</h3>
                </div>

                <ul className={nav ? "nav-menu active" : "nav-menu"}>
                    <li><Link onClick={handleClose} activeClass="active" to="power" spy={true} smooth={true} duration={700}>Power</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="speed" spy={true} smooth={true} duration={700}>Speed</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="handling" spy={true} smooth={true} duration={700}>Handling</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true} duration={700}>Options</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={700}>Contact</Link></li>
                    <div className='mobile-menu'>
                        <button>Shop</button>
                        <button>Account</button>
                        <div className='social-icons'>
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiCarWheel className='icon' />
                        </div>
                    </div>
                </ul>

                <ul className='nav-menu hide'>
                    <li><a href='/'>Shop</a></li>
                    <li><a href='/'>Account</a></li>
                </ul>

                <div className='hamburger' onClick={handleNav}>
                    {nav ? <FaTimes style={{color: "#fff"}} /> : <FaBars style={{color: "#fff"}} />}
                </div>

            </div>
        </div>
    )
}

export default Navbar