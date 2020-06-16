import React from 'react';
import text from '../assets/text.json';
import ContactBtn from '../comps/ContactBtn.js';
import pdf from '../assets/Resume.pdf';

function Contact() {
  return (
    <div id="Contact" className="dark-section">
      <div id="text">

        <h2>Contact</h2>

        <p>{text.contact}</p>

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

export default Contact;
