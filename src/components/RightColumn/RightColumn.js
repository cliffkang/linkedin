import React from 'react';
import PromotedContent from './PromotedContent/PromotedContent';
import icon from './linkedin.png';

function RightColumn(props) {
  return(
    <div>
      <h4>Promoted</h4>
      <div className='promotedItems'>
        {
          props.ad.map(ad => {
            return <PromotedContent 
              ad = {ad}
            />
          })
        }
      </div>
      <div className='footer'>
        <div>
          <a href='https://www.linkedin.com/about-us?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_people-rightfooter.about'>About</a>
          <a href='https://www.linkedin.com/help/linkedin?trk=d_flagship3_people&lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_people-rightfooter.help'>Help Center</a>
          <a href='https://www.linkedin.com/static?key=privacy_policy&lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D'>Privacy & Terms</a>
          <a href='https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_people-rightfooter.advertising'>Advertising</a>
          <a href='https://business.linkedin.com/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control&src=li-nav&lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_people-.business_talent_solutions'>Business Services</a>
          <a href=''>Get the LinkedIn app</a>
          <a href=''>More</a>
        </div>
        <img src={icon} alt='lettering and logo' />
        <p className='copyright'>LinkedIn Corporation &copy; 2018</p>
      </div>
    </div>
  )
}

export default RightColumn;