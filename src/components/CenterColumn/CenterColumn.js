import React from 'react';
import ProfilePreview from './ProfilePreview/ProfilePreview.js';

function CenterColumn(props) {
  return(
    <div>
      <div className='invitations'>
        <h3>No pending invitations</h3>
        <p>Manage All</p>
      </div>
      <div className='youMayKnow'>
        <h3>People you may know</h3>
        <div className='profiles'>
          {
            props.profile.map(profile => {
              return <ProfilePreview 
                profile={profile}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CenterColumn;