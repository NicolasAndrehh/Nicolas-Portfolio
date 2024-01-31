import {
  faAngellist, faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import resume from '../../downloads/resume.pdf';
import Itadori from '../../img/itadori.webp';
import './dark-theme.scss';
import './light-theme.scss';

const Home = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { t } = useTranslation();

  return (
    <section id="home" className={isDarkMode ? 'dark-theme-homepage-section' : 'light-theme-homepage-section'}>
      <link rel="preload" href={Itadori} as="image" />
      <div className="homepage-content">
        <img src={Itadori} alt="Yuji itadori" className="itadori-img display-mobile" />
        <div className="intro-text">
          <h2 className="title">
            {t('home.title1')}
            <br />
            {t('home.title2')}
          </h2>
          <img src={Itadori} alt="Yuji itadori" className="itadori-img display-desktop" />
          <p className="subtitle">
            {t('home.subtitle.normalText')}
            <span className="highlight">{t('home.subtitle.highlight')}</span>
          </p>
          <div className="group-socials">
            <p className="socials-text">{t('home.socialsText')}</p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/nicolas-olaya/" aria-labelledby="js_1">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </a>
              <a href="https://github.com/NicolasAndrehh" aria-labelledby="js_1">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://wellfound.com/u/nicolas-andres-olaya-gamba" aria-labelledby="js_1">
                <FontAwesomeIcon icon={faAngellist} className="icon" />
              </a>
              <a href="mailto:nicolasolaya22@gmail.com" aria-labelledby="js_1">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
            </div>
          </div>
          <a href={resume} className="download-button" download="Nicolas-Olaya-CV">
            {t('home.downloadText')}
            <FontAwesomeIcon icon={faDownload} className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
