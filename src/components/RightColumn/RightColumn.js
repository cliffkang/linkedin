import React from 'react';
import PromotedContent from './PromotedContent/PromotedContent';

function RightColumn(props) {
  return(
    <div>
      <h4>Promoted</h4>
      <div className='promotedItems'>
        <PromotedContent />
      </div>
      <div className='footer'>
        <div>
          <a href=''>About</a>
          <a href=''>Help Center</a>
          <a href=''>Privacy & Terms</a>
          <a href=''>Advertising</a>
          <a href=''>Business Services</a>
          <a href=''>Get the LinkedIn app</a>
          <a href=''>More</a>
        </div>
        <img alt='lettering and logo' />
        <p className='copyright'>LinkedIn Corporation C 2018</p>
      </div>
    </div>
  )
}

export default RightColumn;