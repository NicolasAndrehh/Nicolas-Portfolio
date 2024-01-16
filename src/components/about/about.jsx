import React from 'react';
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

  return (
    <div id="about" className={isDarkMode ? 'dark-theme-about-page' : 'light-theme-about-page'}>
      <section className="experience-education-section">
        <h3 className="title">
          Experience and education
        </h3>
        <div className="education-container">
          <div className="timeline">
            <span className="date">Now</span>
            <span className="circle" />
            <hr className="line" />
          </div>
          <div className="education-card">
            <img src={microverseLogo} alt="Microverse logo" className="education-logo microverse-logo" />
            <h4>Full-stack Web Development</h4>
            <small className="date">Jan 2023 - Aug 2023</small>
            <p className="education-description">
              Accumulated over 1300 hours dedicated to mastering algorithms, data structures,
              and full-stack development. Simultaneously, I crafted projects using Ruby, Rails,
              JavaScript, React, and Redux. Gained expertise in remote pair programming through
              GitHub, employing industry-standard git-flow and participating in daily standups for
              seamless communication and collaboration with international remote developers.
            </p>
          </div>
        </div>
        <div className="experience-container">
          <div className="timeline">
            <span className="date">2023</span>
            <span className="circle" />
            <hr className="line-professional" />
            <span className="professional-highlight">Professional Experience</span>
          </div>
          <div className="experience-card">
            <img src={rappiLogo} alt="Rappi company logo" className="company-logo" />
            <div className="card-info">
              <h4>Back-end Developer</h4>
              <p className="date">
                July 2022 - July 2023 (1 Year)
              </p>
              <p className="experience-description">
                Collaborated with senior developers to design
                and implement RESTful APIs using
                {' '}
                <span className="highlight">Spring Boot</span>
                {' '}
                and
                {' '}
                <span className="highlight">Kotlin</span>
                . Notably,
                I contributed to creating the
                {' '}
                authentication and authorization endpoint for the About Rappi page.
                Managing HTTP
                {' '}
                <span className="highlight">requests / responses</span>
                {' '}
                and handling
                {' '}
                <span className="highlight">exceptions / errors</span>
                {' '}
                refined my backend development skills
                and provided insights into maintaining a robust tech ecosystem at Rappi.
              </p>
            </div>
          </div>
        </div>
        <div className="education-container">
          <div className="timeline">
            <span className="date">2022</span>
            <span className="circle" />
            <hr className="line" />
          </div>
          <div className="education-card">
            <img src={senaLogo} alt="Sena logo" className="education-logo sena-logo" />
            <h4>Software Analysis and Development</h4>
            <small className="date">Jan 2021 - June 2022</small>
            <p className="education-description">
              Introduced to programming here, I built a strong base for a software analyst
              and developer role. This career involves mastering software application tasks
              like analysis, design, development, and maintenance. Proficiency in programming
              languages, collaboration, and crafting efficient solutions are crucial.
              In today&apos;s tech-focused world, software analysis and development
              offer substantial growth and innovation opportunities.
            </p>
          </div>
        </div>
      </section>
      <hr className="separator" />
      <section className="about-section">
        <h2 className="title">About me.</h2>
        <div className="about-group">
          <p>
            👋 Hey there! I&apos;m Nicolas Olaya, a Full Stack Web Developer with
            {' '}
            <span className="highlight">1 year of hands-on experience.</span>
          </p>
          <p>
            Specializing in
            {' '}
            <span className="highlight">React</span>
            {' '}
            for dynamic front-end experiences and
            {' '}
            <span className="highlight">Ruby on Rails </span>
            {' '}
            for
            robust back-end solutions and proficient in
            {' '}
            <span className="highlight">SQL</span>
            {' '}
            for effective database management.
          </p>
          <p>
            I&apos;ve had the privilege of contributing to diverse projects,
            ensuring both
            {' '}
            <span className="highlight">functionality</span>
            {' '}
            and a great
            {' '}
            <span className="highlight">user experience.</span>
            {' '}
            Let&apos;s connect and explore how my skills can elevate your next
            web development endeavor!
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
