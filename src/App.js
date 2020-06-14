import React from 'react';
import Header from './comps/Header';
import Navbar from './comps/Navbar';
import About from './comps/About';
import Experience from './comps/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

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
