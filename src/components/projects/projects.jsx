import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import animeGenreBrowserSS from '../../img/projects-thumbnails/anime-genre-browser.webp';
import awesomeBooksSS from '../../img/projects-thumbnails/awesome-books.webp';
import leaderboardSS from '../../img/projects-thumbnails/leaderboard.webp';
import mathMagiciansSS from '../../img/projects-thumbnails/math-magicians-react.webp';
import railsBudgetSS from '../../img/projects-thumbnails/rails-budget.webp';
import rickAndMortySS from '../../img/projects-thumbnails/rick-and-morty-characters.webp';
import toDoListSS from '../../img/projects-thumbnails/to-do-list.webp';
import videogamesRentalSS from '../../img/projects-thumbnails/videogames-rental.webp';
import './dark-theme.scss';
import './light-theme.scss';

const projects = [
  {
    id: 1,
    title: 'To Do List',
    image: toDoListSS,
    techStack: ['HTML', 'SCSS', 'JavaScript'],
    live: 'http://nicolasolaya.me/To-Do-List/',
    github: 'https://github.com/NicolasAndrehh/To-Do-List',
  },
  {
    id: 2,
    title: 'Awesome Books',
    image: awesomeBooksSS,
    techStack: ['HTML', 'SCSS', 'JavaScript'],
    live: 'http://nicolasolaya.me/Awesome-Books-ES6/',
    github: 'https://github.com/NicolasAndrehh/Awesome-Books-ES6',
  },
  {
    id: 3,
    title: 'Leaderboard',
    image: leaderboardSS,
    techStack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    live: 'http://nicolasolaya.me/Leaderboard/',
    github: 'https://github.com/NicolasAndrehh/Leaderboard',
  },
  {
    id: 4,
    title: 'Rick and Morty Characters',
    image: rickAndMortySS,
    techStack: ['HTML', 'SCSS', 'JavaScript', 'API'],
    live: 'http://nicolasolaya.me/Rick-and-Morty-Characters/',
    github: 'https://github.com/NicolasAndrehh/Rick-and-Morty-Characters',
  },
  {
    id: 5,
    title: 'Math Magicians React',
    image: mathMagiciansSS,
    techStack: ['React', 'JavaScript', 'SCSS'],
    live: 'http://nicolasolaya.me/Math-Magicians-React/',
    github: 'https://github.com/NicolasAndrehh/Math-Magicians-React',
  },
  {
    id: 6,
    title: 'Anime Genre Browser',
    image: animeGenreBrowserSS,
    techStack: ['React', 'Redux', 'JavaScript', 'API'],
    live: 'https://anime-genre-browser-4bkg.onrender.com/',
    github: 'https://github.com/NicolasAndrehh/Anime-Genre-Browser',
  },
  {
    id: 7,
    title: 'Rails Budget',
    image: railsBudgetSS,
    techStack: ['Ruby on Rails', 'Postgresql'],
    live: 'https://budget-app-gzlz.onrender.com',
    github: 'https://github.com/NicolasAndrehh/Rails-Budget-App',
  },
  {
    id: 8,
    title: 'Videogames Rental',
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
  const { t } = useTranslation();

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
      <h2 className="title">{t('projects.title')}</h2>
      <p className="subtitle">{t('projects.subtitle')}</p>
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
                <p>{t(`projects.descriptions.${project.id}`)}</p>
                <div className="project-tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.live}>
                  <FontAwesomeIcon icon={faGlobe} className="icon" />
                  {t('projects.liveDemo')}
                </a>
                <a href={project.github}>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  {t('projects.sourceCode')}
                </a>
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="button" onClick={() => handleShowAll()}>
          {showAll ? t('projects.seeLess') : t('projects.seeMore')}
        </button>
      </div>
    </section>
  );
};

export default Projects;
