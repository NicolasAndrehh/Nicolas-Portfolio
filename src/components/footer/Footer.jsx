/* eslint-disable indent */
import {
  faGithub, faInstagram, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import './dark-theme.scss';
import './light-theme.scss';

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <footer className={isDarkMode ? 'dark-theme-footer' : 'light-theme-footer'}>
      <div className="socials">
        <a href="https://www.linkedin.com/in/nicolas-olaya/">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          Linkedin
        </a>
        <a href="https://github.com/NicolasAndrehh">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          Github
        </a>
        <a href="https://twitter.com/nicolasolaya22">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          Twitter
        </a>
        <a href="https://www.instagram.com/nicolasandrehh/">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          Instagram
        </a>
      </div>
      <hr />
      <a href="mailto:nicolasolaya22@gmail.com" className="email">
        nicolasolaya22@gmail.com
      </a>
    </footer>
);
};

export default Footer;
