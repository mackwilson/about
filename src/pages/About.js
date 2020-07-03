import React from 'react';
import text from '../assets/text.json';
import {getTextElementArray} from '../util/utils.js'

function About() {
  return (
    <div id="About" className="dark-section">
      <div id="text">

        <h2>About</h2>
        <div className="about-text">
          {getTextElementArray(text.about)}
        </div>
      </div>
    </div>
  );
}

export default About;
