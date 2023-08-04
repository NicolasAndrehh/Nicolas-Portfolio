import { useEffect } from 'react';
import {
  Route, Routes, useLocation,
} from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
