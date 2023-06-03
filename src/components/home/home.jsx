import {
  faAngellist, faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from '../../downloads/resume.pdf';
import picture from '../../img/my-picture.webp';
import './home.scss';

const Home = () => (
  <section className="homepage-section">
    <div className="homepage-content">
      <div className="intro-text">
        <h2 className="title">
          Hi, I&apos;m
          <br />
          <span className="name">
            Nicolas Andres Olaya
          </span>
        </h2>
        <p className="subtitle">Full-stack developer</p>
        <div className="group-socials">
          <a href={resume} className="download-button" download="Nicolas-Olaya-CV">
            Download CV
            <FontAwesomeIcon icon={faDownload} className="icon" />
          </a>
          <div className="socials">
            <a href="https://www.linkedin.com/in/nicolas-olaya/">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/NicolasAndrehh">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://wellfound.com/u/nicolas-andres-olaya-gamba">
              <FontAwesomeIcon icon={faAngellist} className="icon" />
            </a>
            <a href="mailto:nicolasolaya@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
        </div>
      </div>
      <img src={picture} alt="Nicolas Olaya" className="nicolas-picture" />
    </div>
  </section>
);

export default Home;
