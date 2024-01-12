import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import animeGenreBrowserSS from '../../img/projects-thumbnails/anime-genre-browser.png';
import awesomeBooksSS from '../../img/projects-thumbnails/awesome-books.png';
import leaderboardSS from '../../img/projects-thumbnails/leaderboard.png';
import mathMagiciansSS from '../../img/projects-thumbnails/math-magicians-react.png';
import railsBudgetSS from '../../img/projects-thumbnails/rails-budget.png';
import rickAndMortySS from '../../img/projects-thumbnails/rick-and-morty-characters.png';
import toDoListSS from '../../img/projects-thumbnails/to-do-list.png';
import videogamesRentalSS from '../../img/projects-thumbnails/videogames-rental.png';
import './dark-theme.scss';
import './light-theme.scss';

const projects = [
  {
    id: 1,
    title: 'To Do List',
    description: 'Website that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    image: toDoListSS,
    techStack: ['HTML', 'SCSS', 'JavaScript'],
    live: 'http://nicolasolaya.me/To-Do-List/',
    github: 'https://github.com/NicolasAndrehh/To-Do-List',
  },
  {
    id: 2,
    title: 'Awesome Books',
    description: 'Website that displays a list of books and allows you to add and remove books from that list. UI created from a Medium-fidelity wireframe.',
    image: awesomeBooksSS,
    techStack: ['HTML', 'SCSS', 'JavaScript'],
    live: 'http://nicolasolaya.me/Awesome-Books-ES6/',
    github: 'https://github.com/NicolasAndrehh/Awesome-Books-ES6',
  },
  {
    id: 3,
    title: 'Leaderboard',
    description: 'Website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    image: leaderboardSS,
    techStack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    live: 'http://nicolasolaya.me/Leaderboard/',
    github: 'https://github.com/NicolasAndrehh/Leaderboard',
  },
  {
    id: 4,
    title: 'Rick and Morty Characters',
    description: 'Website that provides a complete database of characters from the show, accessed through the Rick and morty API.',
    image: rickAndMortySS,
    techStack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    live: 'http://nicolasolaya.me/Rick-and-Morty-Characters/',
    github: 'https://github.com/NicolasAndrehh/Rick-and-Morty-Characters',
  },
  {
    id: 5,
    title: 'Math Magicians React',
    description: 'Website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    image: mathMagiciansSS,
    techStack: ['React', 'JavaScript', 'SCSS'],
    live: 'http://nicolasolaya.me/Math-Magicians-React/',
    github: 'https://github.com/NicolasAndrehh/Math-Magicians-React',
  },
  {
    id: 6,
    title: 'Anime Genre Browser',
    description: 'Open-source platform for exploring anime by genre, powered by the Jikan API. It aims to make discovering new titles based on preferred genres easy and accessible for anime lovers.',
    image: animeGenreBrowserSS,
    techStack: ['React', 'Redux', 'JavaScript', 'API'],
    live: 'https://anime-genre-browser-4bkg.onrender.com/',
    github: 'https://github.com/NicolasAndrehh/Anime-Genre-Browser',
  },
  {
    id: 7,
    title: 'Rails Budget',
    description: 'Mobile web app for budget management. Track your transactions, categorize expenses, and gain insights into your spending habits. Stay in control of your finances with ease.',
    image: railsBudgetSS,
    techStack: ['Ruby on Rails', 'Postgresql'],
    live: 'https://budget-app-gzlz.onrender.com',
    github: 'https://github.com/NicolasAndrehh/Rails-Budget-App',
  },
  {
    id: 8,
    title: 'Videogames Rental',
    description: 'Website project created with React, Ruby on Rails, Postgresql and Redux that offers videogames for rent. The user can create a new account and log in with email and password.',
    image: videogamesRentalSS,
    techStack: ['React', 'Redux', 'Ruby on Rails', 'Postgresql'],
    live: 'https://videogames-capstone.onrender.com',
    github: 'https://github.com/DavidEspinoG/mc_videogames_front',
  },
];

const projectsInOrder = projects.reverse();

const Projects = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleShowAll = () => {
    if (showAll) {
      setItemsToShow(6);
      setShowAll(false);
    } else {
      setItemsToShow(projects.length);
      setShowAll(true);
    }
  };

  return (
    <section id="projects" className={isDarkMode ? 'dark-theme-projects-section' : 'light-theme-projects-section'}>
      <h2 className="title">My Recent Projects</h2>
      <p className="subtitle">Here are a few of the things I&apos;ve been working on lately.</p>
      <div className="projects-container">
        {projectsInOrder.slice(0, itemsToShow).map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-group">
              <div className="project-info">
                <div className="project-tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
              </div>
            </div>
            <div className="overlay">
              <div className="overlay-group">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.live}>
                  <FontAwesomeIcon icon={faGlobe} className="icon" />
                  Live Demo
                </a>
                <a href={project.github}>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  Source code
                </a>
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="button" onClick={() => handleShowAll()}>
          {showAll ? 'See less' : 'See more'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
