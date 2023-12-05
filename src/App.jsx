import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
} from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>

      <Header />

      <main>
        <Home />
        <hr className="separator" />
        <Projects />
        <hr className="separator" />
        <About />
        <Contact />
      </main>

    </div>
  );
}

export default App;
