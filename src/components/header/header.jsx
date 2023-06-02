import {
  faBriefcase, faEnvelope,
  faHouse, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      console.log(position, scrolled);
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

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <h1>Welcome!</h1>

      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" end>
              <FontAwesomeIcon icon={faHouse} className="icon" />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">
              <FontAwesomeIcon icon={faUser} className="icon" />
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects">
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
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
