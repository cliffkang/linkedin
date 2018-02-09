import React from 'react';
import link from './link.png';

function ProfilePreview(props) {
  return(
    <div>
      <img src={props.profile.imageUrl} alt='profile'/>
      <p className="name">{props.profile.name}</p>
      <p className='title'>{props.profile.position}</p>
      <div className='NoLinks'>
        <img src={link} alt='link'/>
        <p>{props.profile.mutualConnect} and {props.profile.numMutual} others</p>
      </div>
      <button />
    </div>
  )
}

export default ProfilePreview;