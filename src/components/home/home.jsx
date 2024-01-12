import {
  faAngellist, faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import resume from '../../downloads/resume.pdf';
import Itadori from '../../img/itadori.png';
import './dark-theme.scss';
import './light-theme.scss';

const Home = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <section id="home" className={isDarkMode ? 'dark-theme-homepage-section' : 'light-theme-homepage-section'}>
      <div className="homepage-content">
        <img src={Itadori} alt="Yuji itadori" className="itadori-img display-mobile" />
        <div className="intro-text">
          <h2 className="title">
            Full-Stack
            <br />
            Web Developer
          </h2>
          <p className="subtitle">
            I enjoy building web applications with
            <span className="highlight"> React, Redux, and Ruby on Rails</span>
          </p>
          <div className="group-socials">
            <p className="socials-text">Find me on</p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/nicolas-olaya/">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </a>
              <a href="https://github.com/NicolasAndrehh">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://wellfound.com/u/nicolas-andres-olaya-gamba">
                <FontAwesomeIcon icon={faAngellist} className="icon" />
              </a>
              <a href="mailto:nicolasolaya22@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
            </div>
          </div>
          <a href={resume} className="download-button" download="Nicolas-Olaya-CV">
            Download CV
            <FontAwesomeIcon icon={faDownload} className="icon" />
          </a>
        </div>
        <img src={Itadori} alt="Yuji itadori" className="itadori-img display-desktop" />
      </div>
    </section>
  );
};

export default Home;
