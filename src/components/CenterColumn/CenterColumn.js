import React from 'react';
import ProfilePreview from './ProfilePreview/ProfilePreview.js';
import CenterStyled from '../../styled-components/CenterStyled';

function CenterColumn(props) {
  return(
    <CenterStyled>
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
    </CenterStyled>
  )
}

export default CenterColumn;