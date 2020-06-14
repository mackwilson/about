import React from 'react';
import Button from 'react-bootstrap/Button';


function ContactBtn(props) {
  return (
    <Button variant="outline-light" className="ContactBtn" href={props.link} target="_blank">
      {props.text}
    </Button>
  );
}

export default ContactBtn;
