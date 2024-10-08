import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
