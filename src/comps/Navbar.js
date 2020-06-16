import React from 'react';
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div className="Navbar">
      <Button variant="outline-secondary" className="navBtn" href="#About" >
        About
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="#Experience" >
        Experience
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="#Projects" >
        Projects
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="#Interests" >
        Interests
      </Button>
      <Button variant="outline-secondary" className="navBtn" href="#Contact" >
        Contact
      </Button>
    </div>
  );
}


export default Navbar;
