import React from 'react';
import link from './link.png';

function ProfilePreview(props) {
  return(
    <div className='profile'>
      <img src={props.profile.imageUrl} alt='profile'/>
      <div className='person-info'>
        <h4 className="name">{props.profile.name}</h4>
        <p className='title'>{props.profile.position}</p>
        <div className='NoLinks'>
          <p><span><img src={link} alt='link'/></span>{props.profile.mutualConnect} and {props.profile.numMutual} others</p>
        </div>
      </div>
      <button />
    </div>
  )
}

export default ProfilePreview;