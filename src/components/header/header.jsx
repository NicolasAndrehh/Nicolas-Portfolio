import { NavLink } from 'react-router-dom';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faUser, faBriefcase, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="header">
    <h1>Welcome!</h1>

    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" end>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="icon" />
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active">
            <FontAwesomeIcon icon={faBriefcase} className="icon" />
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
