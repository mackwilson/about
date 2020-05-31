import React from 'react';
import Header from './comps/Header';
import Navbar from './comps/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
