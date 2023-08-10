import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import microverseCertificate from '../../downloads/microverse-certificate.pdf';
import senaDegree from '../../downloads/sena-degree.pdf';
import cssLogo from '../../img/css-logo.png';
import gitLogo from '../../img/git-logo.png';
import htmlLogo from '../../img/html-logo.png';
import javascriptLogo from '../../img/javascript-logo.png';
import laravelLogo from '../../img/laravel-logo.png';
import locationIcon from '../../img/location-icon.png';
import microverseLogo from '../../img/microverse-logo.png';
import mysqlLogo from '../../img/mysql-logo.png';
import phpLogo from '../../img/php-logo.png';
import postgresqlLogo from '../../img/postgresql-logo.png';
import railsLogo from '../../img/rails-logo.png';
import rappiLogo from '../../img/rappi-logo.webp';
import reactLogo from '../../img/react-logo.png';
import reduxLogo from '../../img/redux-logo.png';
import rubyLogo from '../../img/ruby-logo.png';
import senaLogo from '../../img/sena-logo.jpg';
import othersIcon from '../../img/tools-icon.png';
import './about.scss';

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

const About = () => (
  <div className="about-page">
    <section className="about-section">
      <h2 className="title">About me.</h2>

      <p>
        I&apos;m a passionate Full-stack Developer dedicated to crafting exceptional digital
        experiences.
        <br />
        My expertise spans from React-powered front-ends to Ruby on Rails-driven back-ends,
        where I specialize in creating robust APIs.
        <br />
        Excelling in both realms, I seamlessly unite aesthetics and functionality,
        translating complexity into elegance.
      </p>

      <h4>Some interesting things about me:</h4>
      <ul>
        <li>I love workout, you could even say that I&apos;m a gymrat</li>
        <li>I enjoy watching all kind of anime</li>
        <li>I&apos;m 20 years old</li>
        <li>
          <span className="strong">Spanish</span>
          {' '}
          is my native language, and I have a solid upper-intermediate level of English
        </li>
      </ul>

    </section>
    <hr className="separator" />
    <section className="skills-section">
      <h3 className="title">My skills</h3>

      <div className="skills-container">
        <div className="stack-card">
          <div className="card-header">
            <img src={reactLogo} alt="React logo" className="stack-img" />
            <h5>Front-end Stack</h5>
          </div>
          <div className="card-details">
            <div className="decoration-tag">
              <p>{'<ul>'}</p>
              <div className="tag-delimiter" />
              <p>{'</ul>'}</p>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS [Sass]</li>
              <li>JavaScript</li>
              <li>React [ViteJS]</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
        <div className="stack-card">
          <div className="card-header">
            <img src={railsLogo} alt="Rails logo" className="stack-img" />
            <h5>Back-end Stack</h5>
          </div>
          <div className="card-details">
            <div className="decoration-tag">
              <p>{'<ul>'}</p>
              <div className="tag-delimiter" />
              <p>{'</ul>'}</p>
            </div>
            <ul>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className="stack-card">
          <div className="card-header">
            <img src={othersIcon} alt="Tools icon" className="stack-img" />
            <h5>Others</h5>
          </div>
          <div className="card-details">
            <div className="decoration-tag">
              <p>{'<ul>'}</p>
              <div className="tag-delimiter" />
              <p>{'</ul>'}</p>
            </div>
            <ul>
              <li>Git</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="icons-container">
        {skills.map((skill) => (
          <div className="icon-card" key={skill.name}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="icon" />
          </div>
        ))}
      </div>
    </section>
    <hr className="separator" />
    <section className="experience-section">
      <h3 className="title">
        My working
        <br />
        experience
      </h3>
      <div className="experience-container">
        <div className="experience-card">
          <img src={rappiLogo} alt="Rappi company logo" className="company-logo" />
          <div className="card-header">
            <h4>Back-end Developer</h4>
            <p className="experience-description">
              During my internship at Rappi as a Back End Developer,
              I focused on designing and implementing RESTful APIs using Spring Boot.
              I was responsible for managing HTTP requests and responses, as well as effectively
              handling exceptions and errors in API responses.
              This experience strengthened my skills in backend development and provided valuable
              insights into maintaining a robust and user-friendly tech ecosystem at Rappi.
            </p>
          </div>
          <div className="card-details">
            <div className="responsabilities">
              <h5>Responsabilities</h5>
              <ul>
                <li>Designing and implementing RESTful APIs using Spring Boot.</li>
                <li>Handling HTTP requests and responses.</li>
                <li>Handling exceptions and errors in API responses.</li>
              </ul>
            </div>
            <div className="abilities-learned">
              <h5>Abilities learned</h5>
              <p>
                I&apos;ve developed strong teamwork and collaboration skills, mastering effective
                communication and adaptability. These soft skills have shown me the importance
                of diverse perspectives and leveraging individual strengths for shared success.
              </p>
            </div>
          </div>
          <div className="card-footer">
            <p className="location">
              <img src={locationIcon} alt="Location icon" />
              Colombia, Remote
            </p>
            <p className="date">
              Jul 2022 - Jan 2023
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr className="separator" />
    <section className="education-section">
      <h3 className="title">My education</h3>
      <div className="education-container">
        <div className="education-card">
          <img src={microverseLogo} alt="Microverse logo" className="education-logo microverse-logo" />
          <div className="card-info">
            <div className="card-header">
              <h4>Full Stack Web Development</h4>
              <small className="end-date">01 August 2023</small>
            </div>
            <div className="card-body">
              <p className="description">
                Accumulated over 1300 hours dedicated to mastering algorithms, data structures,
                and full-stack development. Simultaneously, I crafted projects using Ruby, Rails,
                JavaScript, React, and Redux. Gained expertise in remote pair programming through
                GitHub, employing industry-standard git-flow and participating in daily standups for
                seamless communication and collaboration with international remote developers.
              </p>
              <div className="education-skills">
                <p>
                  <span className="strong">Skills:</span>
                  {' '}
                  English, communication, collaboration
                </p>
                <p>
                  <span className="strong">Stack:</span>
                  {' '}
                  React, Redux, Sass, Ruby, Ruby on Rails, PostgreSQL
                </p>
              </div>
            </div>
          </div>
          <a href={microverseCertificate} className="download-certificate microverse" download="Nicolas microverse certificate">
            <FontAwesomeIcon icon={faFile} className="icon" />
          </a>
        </div>
        <div className="education-card">
          <img src={senaLogo} alt="Sena logo" className="education-logo sena-logo" />
          <div className="card-info">
            <div className="card-header">
              <h4>Software analyst and developer</h4>
              <small className="end-date">01 January 2023</small>
            </div>
            <div className="card-body">
              <p className="description">
                Introduced to programming here, I built a strong base for a software analyst
                and developer role. This career involves mastering software application tasks
                like analysis, design, development, and maintenance. Proficiency in programming
                languages, collaboration, and crafting efficient solutions are crucial.
                In today&apos;s tech-focused world, software analysis and development
                offer substantial growth and innovation opportunities.
              </p>
              <div className="education-skills">
                <p>
                  <span className="strong">Skills:</span>
                  {' '}
                  Agile Methodologies, Database Design, Systems Development Life Cycle (SDLC)
                </p>
                <p>
                  <span className="strong">Stack:</span>
                  {' '}
                  HTML, CSS, Javascript, PHP, Laravel, MySQL
                </p>
              </div>
            </div>
          </div>
          <a href={senaDegree} className="download-certificate sena" download="Nicolas sena degree">
            <FontAwesomeIcon icon={faFile} className="icon" />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default About;
