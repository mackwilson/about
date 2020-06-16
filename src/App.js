import React from 'react';
import Header from './pages/Header';
import Navbar from './comps/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="appBody">
        <Header />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
