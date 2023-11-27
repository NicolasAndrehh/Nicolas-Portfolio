/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  faGithub, faInstagram, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import githubPicture from '../../img/shikimori.webp';
import './contact.scss';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-group">
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
      <hr className="separator display-mobile-contact" />
      <div className="image-container">
        <img src={githubPicture} alt="Github profile pic" />
        <div className="image-text">Thank you for exploring my portfolio!</div>
      </div>
    </div>
    <hr className="separator" />
    <form action="https://formsubmit.co/nicolasolaya22@gmail.com" method="POST" className="contact-form">
      <h2 className="title">Send me a message</h2>
      <input type="hidden" name="_next" value="https://nicolasandrehh.github.io/portfolio/#/contact" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I will get back to you as soon as possible." />
      <input type="hidden" name="_replyto" value="" />

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" required />
      </div>
      <button type="submit" className="submit-btn">Send</button>
    </form>
  </section>

);

export default Contact;
