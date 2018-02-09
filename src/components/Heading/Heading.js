import React from 'react';

function Heading(props) {
  return (
    <li>
      <a href={props.nav.link}>
        <img className="icon" src={props.nav.icon} alt="corresponding icon" />
        <p className="navText">{props.nav.title}</p>
      </a>
    </li>
  )
}

export default Heading;