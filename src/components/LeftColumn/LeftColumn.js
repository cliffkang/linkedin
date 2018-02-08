import React from 'react';

function LeftColumn(props) {
  return (
    <div>
      <div className='top'>
        <h3 className="numConnections">{}</h3>
        <h4>Your connections</h4>
        <a href="">See all</a>
        <div>{}</div>
      </div>
      <div className='mid'>
        <h3>Add personal contact</h3>
        <input />
        <button />
        <a href=''>More options</a>
      </div>
      <div>
        <p>We'll import your address book to 
          suggest connections. <span><a href =''>Learn more</a></span></p>
      </div>
    </div>
  )
}

export default LeftColumn;