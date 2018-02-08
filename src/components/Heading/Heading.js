import React from 'react';
import NavIcons from './NavigationIcons/NavigationIcons.js';

function Heading(props) {
  return (
    <div>
      <img src="" alt="LinkedIn logo" />
      <input />
      <div>
        <NavIcons />
      </div>
      <div className="workIcon">
        <NavIcons />
        <p>Free Upgrade to Premium</p>
      </div>
    </div>
  )
}

export default Heading;