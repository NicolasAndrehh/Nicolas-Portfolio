import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>

      </BrowserRouter>

    </div>
  );
}

export default App;
