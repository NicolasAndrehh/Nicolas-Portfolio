import {
  faBriefcase,
  faEnvelope,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
        <h1>Welcome!</h1>

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
              <FontAwesomeIcon icon={faHouse} className="icon" />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" onClick={closeNav}>
              <FontAwesomeIcon icon={faUser} className="icon" />
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" onClick={closeNav}>
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" onClick={closeNav}>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
