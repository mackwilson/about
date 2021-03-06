import React from 'react';
import ContactBtn from '../comps/ContactBtn.js';
import pdf from '../assets/Resume.pdf';


function Header() {
  return (
    <div id="Header" className="dark-section">
      <div className="headerTextBox" id="text">
        <h1>Mack Wilson</h1>
        <div className="contactButtons">
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
            link={pdf}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
