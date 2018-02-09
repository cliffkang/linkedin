import React from 'react';
import right from './rightArrow.png';

function PromotedContent(props) {
  return(
    <div>
      <img src={props.ad.iconUrl} alt='icon' />
      <div>
        <h4>{props.ad.title}</h4>
        <p>{props.ad.text}</p>
      </div>
      <img src={right} alt='right arrow' />
    </div>
  )
}

export default PromotedContent;