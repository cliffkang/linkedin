import React from 'react';

function ProfilePreview(props) {
  return(
    <div>
      <img alt='profile'/>
      <p className="name">{}</p>
      <p className='title'>{}</p>
      <div className='NoLinks'>
        <img alt='link'/>
        <p>{} and {} others</p>
      </div>
      <button />
    </div>
  )
}

export default ProfilePreview;