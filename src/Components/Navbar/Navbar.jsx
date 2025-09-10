import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? 'mobile-menu-active' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth offset={-260} duration={500}>Program</Link></li>
        <li><Link to='abouts' smooth offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='compus' smooth offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testmonials' smooth offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
