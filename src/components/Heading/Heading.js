import React from 'react';

function Heading(props) {
  return (
    <div>
      <a href={props.nav.link}>
        <img className="icon" src={props.nav.icon} alt="corresponding icon" />
        <p className="navText">{props.nav.title}</p>
      </a>
      
    </div>
  )
}

export default Heading;