import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ES');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeNav = () => {
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <div className="header-group">
        <h2 className="logo">Nicolas Olaya</h2>

        <div className="hamburger" onClick={toggleMobileNav} onKeyUp={toggleMobileNav} role="button" tabIndex={0}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
      <nav className={`navbar ${mobileNavOpen ? 'mobile-nav-open' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" end onClick={closeNav}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" onClick={closeNav}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" onClick={closeNav}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" onClick={closeNav}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="options">
        <div className={`switch ${darkMode ? 'checked' : ''}`} onClick={() => setDarkMode(!darkMode)} onKeyDown={() => setDarkMode(!darkMode)} role="button" tabIndex={0}>
          <input type="checkbox" />
          <span className="slider" />
        </div>
        <div className="languages">
          <button type="button" className={`language-button ${language === 'ES' && 'active-language'}`} onClick={() => setLanguage('ES')}>Español</button>
          <button type="button" className={`language-button ${language === 'EN' && 'active-language'}`} onClick={() => setLanguage('EN')}>English</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
