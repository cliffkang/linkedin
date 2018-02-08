import React from 'react';

function LeftColumn(props) {
  return (
    <div>
      <div className='top'>
        <h3 className="numConnections">1157</h3>
        <h4>Your connections</h4>
        <a href="https://www.linkedin.com/mynetwork/invite-connect/connections/">See all</a>
        <div>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/000/1fa/2d3/1d178c4.jpg" alt="scott delahunt"/>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAIA_wDGAAAAAQAAAAAAAA1hAAAAJDA1ZDdhYjQwLWI3MDUtNDg1OS04MDIwLWQ1ZjZkMTMzODkwZg.jpg" alt="joanna wang"/>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAagAAAAJDhmMDNjNjVmLTdkNDItNDM0NC1iNjc1LTg4OTEyNDMyNTkyZg.jpg" alt="brian luong"/>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAkZAAAAJDdmNTA2NmIzLTI0NzgtNDQ2Yi05NDlkLWNmOTllMWI5N2M5Mw.jpg" alt="jon bae"/>
        </div>
      </div>
      <div className='mid'>
        <h3>Add personal contact</h3>
        <input />
        {/*'https://www.linkedin.com/mynetwork/import-contacts/results/?isOrganic=true&transactionId=FyNYo7SfRoyin9bsQOCdOQ%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_people-wylo_get_started'*/}
        <button />
        <a href='https://www.linkedin.com/mynetwork/import-contacts/?transactionId=FyNYo7SfRoyin9bsQOCdOQ%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3Brtsr9h8xQSqbSqKCFYIQMg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_people-more_options'>More options</a>
      </div>
      <div>
        <p>We'll import your address book to 
          suggest connections. Learn more</p>
      </div>
    </div>
  )
}

export default LeftColumn;