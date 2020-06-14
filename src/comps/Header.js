import React from 'react';
import ContactBtn from './ContactBtn.js';


function Header() {
  return (
    <div className="Header">
      <div className="headerTextBox">
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
            link="./Resume.pdf" //this is not working!!!
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
