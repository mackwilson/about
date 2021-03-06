import React from 'react';
import Header from './pages/Header';
import Menu from './comps/Menu';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="appBody">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Interests />
        <Contact />
      </div>
    </div>
  );
}

export default App;
