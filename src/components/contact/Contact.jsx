import {
  faGithub, faInstagram, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import githubPicture from '../../img/shikimori.webp';
import './contact.scss';

const Contact = () => (
  <section className="contact-section">
    <div className="contact-info">
      <h2 className="title">Contact.</h2>
      <p>
        Feel free to reach out
        <br />
        to me through social media platforms
        <br />
        or by sending an email.
      </p>
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
      <a href="mailto:nicolasolaya22@gmail.com" className="email">
        nicolasolaya22@gmail.com
      </a>
    </div>
    <div className="image-container">
      <img src={githubPicture} alt="Github profile pic" />
      <div className="image-text">Thank you for exploring my portfolio!</div>
    </div>
  </section>
);

export default Contact;
