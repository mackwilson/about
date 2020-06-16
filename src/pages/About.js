import React from 'react';
import text from '../assets/text.json';

function About() {
  return (
    <div className="About" id="dark-section">
      <div id="text">

        <h2>About</h2>

        <p>{text.about}</p>

      </div>
    </div>
  );
}

export default About;