import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cssLogo from '../../img/css-logo.webp';
import gitLogo from '../../img/git-logo.webp';
import htmlLogo from '../../img/html-logo.webp';
import javascriptLogo from '../../img/javascript-logo.webp';
import laravelLogo from '../../img/laravel-logo.webp';
import microverseLogo from '../../img/microverse-logo.webp';
import mysqlLogo from '../../img/mysql-logo.webp';
import phpLogo from '../../img/php-logo.webp';
import postgresqlLogo from '../../img/postgresql-logo.webp';
import railsLogo from '../../img/rails-logo.webp';
import rappiLogo from '../../img/rappi-logo.webp';
import reactLogo from '../../img/react-logo.webp';
import reduxLogo from '../../img/redux-logo.webp';
import rubyLogo from '../../img/ruby-logo.webp';
import senaLogo from '../../img/sena-logo.webp';
import zeroTwo from '../../img/zero-two.webp';
import './dark-theme.scss';
import './light-theme.scss';

const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Redux', logo: reduxLogo },
  { name: 'Ruby', logo: rubyLogo },
  { name: 'Ruby on Rails', logo: railsLogo },
  { name: 'PHP', logo: phpLogo },
  { name: 'Laravel', logo: laravelLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'Git', logo: gitLogo },
];

const About = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { t } = useTranslation();

  return (
    <div id="about" className={isDarkMode ? 'dark-theme-about-page' : 'light-theme-about-page'}>
      <section className="experience-education-section">
        <h3 className="title">
          {t('about.experienceAndEducation.title')}
        </h3>
        <div className="education-container">
          <div className="timeline">
            <span className="date">
              {t('about.experienceAndEducation.microverse.timeline')}
            </span>
            <span className="circle" />
            <hr className="line" />
          </div>
          <div className="education-card">
            <img src={microverseLogo} alt="Microverse logo" className="education-logo microverse-logo" />
            <h4>
              {t('about.experienceAndEducation.microverse.title')}
            </h4>
            <small className="date">
              {t('about.experienceAndEducation.microverse.date')}
            </small>
            <p className="education-description">
              {t('about.experienceAndEducation.microverse.description')}
            </p>
          </div>
        </div>
        <div className="experience-container">
          <div className="timeline">
            <span className="date">
              {t('about.experienceAndEducation.rappi.timeline')}
            </span>
            <span className="circle" />
            <hr className="line-professional" />
            <span className="professional-highlight">
              {t('about.experienceAndEducation.rappi.professionalHighlight')}
            </span>
          </div>
          <div className="experience-card">
            <img src={rappiLogo} alt="Rappi company logo" className="company-logo" />
            <div className="card-info">
              <h4>
                {t('about.experienceAndEducation.rappi.title')}
              </h4>
              <p className="date">
                {t('about.experienceAndEducation.rappi.date')}
              </p>
              <p className="experience-description">
                {t('about.experienceAndEducation.rappi.description.paragraphs.1')}
                <span className="highlight">
                  {t('about.experienceAndEducation.rappi.description.highlights.1')}
                </span>
                {t('about.experienceAndEducation.rappi.description.paragraphs.2')}
                <span className="highlight">
                  {t('about.experienceAndEducation.rappi.description.highlights.2')}
                </span>
                {t('about.experienceAndEducation.rappi.description.paragraphs.3')}
                <span className="highlight">
                  {t('about.experienceAndEducation.rappi.description.highlights.3')}
                </span>
                {t('about.experienceAndEducation.rappi.description.paragraphs.4')}
                <span className="highlight">
                  {t('about.experienceAndEducation.rappi.description.highlights.4')}
                </span>
                {t('about.experienceAndEducation.rappi.description.paragraphs.5')}
              </p>
            </div>
          </div>
        </div>
        <div className="education-container">
          <div className="timeline">
            <span className="date">
              {t('about.experienceAndEducation.sena.timeline')}
            </span>
            <span className="circle" />
            <hr className="line" />
          </div>
          <div className="education-card">
            <img src={senaLogo} alt="Sena logo" className="education-logo sena-logo" />
            <h4>
              {t('about.experienceAndEducation.sena.title')}
            </h4>
            <small className="date">
              {t('about.experienceAndEducation.sena.date')}
            </small>
            <p className="education-description">
              {t('about.experienceAndEducation.sena.description')}
            </p>
          </div>
        </div>
      </section>
      <hr className="separator" />
      <section className="about-section">
        <h2 className="title">About me.</h2>
        <div className="about-group">
          <p>
            {t('about.aboutMe.description.paragraphs.1')}
            <span className="highlight">
              {t('about.aboutMe.description.highlights.1')}
            </span>
          </p>
          <p>
            {t('about.aboutMe.description.paragraphs.2')}
            <span className="highlight">
              {t('about.aboutMe.description.highlights.2')}
            </span>
            {t('about.aboutMe.description.paragraphs.3')}
            <span className="highlight">
              {t('about.aboutMe.description.highlights.3')}
            </span>
            {t('about.aboutMe.description.paragraphs.4')}
            <span className="highlight">
              {t('about.aboutMe.description.highlights.4')}
            </span>
            {t('about.aboutMe.description.paragraphs.5')}
          </p>
          <p>
            {t('about.aboutMe.description.paragraphs.6')}
            <span className="highlight">
              {t('about.aboutMe.description.highlights.5')}
            </span>
            {t('about.aboutMe.description.paragraphs.7')}
            <span className="highlight">
              {t('about.aboutMe.description.highlights.6')}
            </span>
          </p>
          <p>
            {t('about.aboutMe.description.paragraphs.8')}
          </p>
          <img src={zeroTwo} alt="Sakura Chiyo" />
        </div>
      </section>
      <section className="skills-section">
        <h3 className="title">Tech Stack</h3>
        <div className="icons-container">
          {skills.map((skill) => (
            <div className="icon-card" key={skill.name}>
              <img src={skill.logo} alt={`${skill.name} logo`} className="icon" />
            </div>
          ))}
        </div>
      </section>
      <hr className="separator" />
    </div>
  );
};

export default About;
