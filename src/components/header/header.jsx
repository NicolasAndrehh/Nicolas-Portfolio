import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';
import './dark-theme.scss';
import './light-theme.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState('ES');
  const [active, setActive] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

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

  const handleNavigation = (activeLink) => {
    setMobileNavOpen(false);
    setActive(activeLink);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  let headerClassName = '';
  if (isDarkMode) {
    headerClassName += ' dark-theme-header';
  } else {
    headerClassName += ' light-theme-header';
  }
  if (scrolled && isDarkMode) {
    headerClassName += ' dark-theme-scrolled';
  } else if (scrolled && !isDarkMode) {
    headerClassName += ' light-theme-scrolled';
  }

  return (

    <header className={headerClassName}>
      <div className="header-group">
        <h2 className="logo">
          {'<'}
          {' '}
          Nicolas Olaya
          {' '}
          {'/>'}
        </h2>

        <div className="hamburger" onClick={toggleMobileNav} onKeyUp={toggleMobileNav} role="button" tabIndex={0}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
      <nav className={`navbar ${mobileNavOpen ? 'mobile-nav-open' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#home" className={`link ${active === 'home' && 'active'}`} onClick={() => handleNavigation('home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`link ${active === 'about' && 'active'}`} onClick={() => handleNavigation('about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`link ${active === 'projects' && 'active'}`} onClick={() => handleNavigation('projects')}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`link ${active === 'contact' && 'active'}`} onClick={() => handleNavigation('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="options">
        <div className={`switch ${isDarkMode ? 'checked' : ''}`} onClick={() => handleToggleTheme()} onKeyDown={() => handleToggleTheme()} role="button" tabIndex={0}>
          <input type="checkbox" />
          <span className="slider" />
        </div>
        <div className="languages">
          <button type="button" className={`language-button ${language === 'ES' && 'active-language'} button`} onClick={() => setLanguage('ES')}>Español</button>
          <button type="button" className={`language-button ${language === 'EN' && 'active-language'} button`} onClick={() => setLanguage('EN')}>English</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
