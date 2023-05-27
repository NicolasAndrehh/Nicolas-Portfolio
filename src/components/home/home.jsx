import picture from '../../img/my-picture.webp';
import resume from '../../downloads/resume.pdf';
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
        <a href={resume} className="download-button" download="Nicolas-Olaya-CV">Download CV</a>
      </div>
      <img src={picture} alt="Nicolas Olaya" className="nicolas-picture" />
    </div>
  </section>
);

export default Home;
