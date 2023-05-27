import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>

      </BrowserRouter>

    </div>
  );
}

export default App;
