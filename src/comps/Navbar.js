import React from 'react';
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div className="Navbar">
      <Button variant="outline-secondary" className="navBtn" href="/about" >
        About
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="/experience" >
        Experience
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="/projects" >
        Projects
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="/interests" >
        Interests
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="/contact" >
        Contact
      </Button>
    </div>
  );
}


export default Navbar;
