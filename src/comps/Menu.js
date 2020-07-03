import React from 'react';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png';

function Menu() {
  // return (
  //   <div className="Navbar">
  //     <Button variant="outline-secondary" className="navBtn" href="#About" >
  //       About
  //     </Button>
  //     <Button variant="outline-secondary" className="navBtn" href="#Experience" >
  //       Experience
  //     </Button>
  //     <Button variant="outline-secondary" className="navBtn" href="#Projects" >
  //       Projects
  //     </Button>
  //     <Button variant="outline-secondary" className="navBtn" href="#Interests" >
  //       Interests
  //     </Button>
  //     <Button variant="outline-secondary" className="navBtn" href="#Contact" >
  //       Contact
  //     </Button>
  //   </div>
  // );

  return (
    <Navbar className="Menu" expand="md">
    <Navbar.Brand href="#Header">
      <img
        alt=""
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top menu-logo"
      />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">
      <i className="material-icons">menu</i>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link className="navBtn" href="#About">About</Nav.Link>
        <Nav.Link className="navBtn" href="#Experience">Experience</Nav.Link>
        <Nav.Link className="navBtn" href="#Projects">Projects</Nav.Link>
        <Nav.Link className="navBtn" href="#Interests">Interests</Nav.Link>
        <Nav.Link className="navBtn" href="#Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}


export default Menu;
