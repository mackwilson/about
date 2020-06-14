import React from 'react';
import ContactBtn from './ContactBtn.js';
import pdf from '../assets/Resume.pdf';


function Header() {
  return (
    <div className="Header" id="dark-section">
      <div className="headerTextBox" id="text">
        <h1>Mack Wilson</h1>
        <div className="topContactButtons">
          <ContactBtn
            text="Email"
            link="mailto:mackenziewilson@runbox.com"
          />
          <ContactBtn
            text="LinkedIn"
            link="https://www.linkedin.com/in/mack-wilson"
          />
          <ContactBtn
            text="Resume"
            link={pdf} //this is not working!!!
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
