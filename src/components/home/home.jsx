import {
  faAngellist, faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import resume from '../../downloads/resume.pdf';
import Itadori from '../../img/itadori.png';
import javascriptLogo from '../../img/javascript-logo.png';
import railsLogo from '../../img/rails-logo.png';
import reactLogo from '../../img/react-logo.png';
import reduxLogo from '../../img/redux-logo.png';
import sassLogo from '../../img/sass-logo.png';
import './home.scss';

const skills = [
  { id: 0, name: 'JavaScript', logo: javascriptLogo },
  { id: 1, name: 'React', logo: reactLogo },
  { id: 2, name: 'Redux', logo: reduxLogo },
  { id: 3, name: 'Sass', logo: sassLogo },
  { id: 4, name: 'Ruby on Rails', logo: railsLogo },
];

const Home = () => (
  <section id="home" className="homepage-section">
    <div className="homepage-content">
      <img src={Itadori} alt="Yuji itadori" className="itadori-img display-mobile" />
      <div className="intro-text">
        <h2 className="title">
          I&apos;m a Full-Stack
          <br />
          Developer
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
    <hr className="separator" />
    <div className="introduction">
      <h2>Let me introduce myself</h2>
      <p>
        I&apos;m a Full-stack Developer from Colombia, and I have a true passion for
        creating engaging and responsive UI designs that captivate users.
        With a keen eye for aesthetics and functionality,
        I take pride in crafting seamless user experiences that leave a lasting impact
      </p>
      <p>
        I enjoy working with [
        {' '}
        {skills.map((skill, index) => (
          <React.Fragment key={skill.id}>
            {index > 0 && index < skills.length && ', '}
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
          </React.Fragment>
        ))}
        ] to build exceptional web applications.
      </p>
      <p>
        My passion for continuous learning drives me to deliver cutting-edge solutions and create
        intuitive digital experiences that leave a lasting impact.
        Let&apos;s collaborate and bring your ideas to life with exceptional web development.
      </p>
    </div>
  </section>
);

export default Home;
