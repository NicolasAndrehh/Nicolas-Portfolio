/* eslint-disable jsx-a11y/label-has-associated-control */
import './contact.scss';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="title">Contact me.</h2>
    <form action="https://formsubmit.co/nicolasolaya22@gmail.com" method="POST" className="contact-form">
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
