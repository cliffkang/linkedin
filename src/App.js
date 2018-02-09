import React, { Component } from 'react';
import './App.css';
import dummyData from './dummyData';
import Heading from './components/Heading/Heading.js';
import LeftColumn from './components/LeftColumn/LeftColumn.js';
import CenterColumn from './components/CenterColumn/CenterColumn.js';
import RightColumn from './components/RightColumn/RightColumn.js';
import ellipsis from './assets/ellipsis.png';
import icon from './assets/icon.png';
import work from './assets/Work.png';
import AppStyled from './AppStyled';

class App extends Component {
  state=dummyData;

  render() {
    return (
      <AppStyled>
        <div className="Heading">
          <div>
            <img src={icon} alt="LinkedIn logo" />
            <input type='text' placeholder='Search' />
            <ul>
              {
                this.state.nav.map(nav => {
                  return(<Heading 
                    nav={nav}
                  />);
                })
              }
            </ul>
            <div className="workIcon">
              <div>
                <a href="">
                  <img className="icon" src={work} alt="corresponding icon" />
                  <p className="navText">Work v</p>
                </a>
              </div>
              <p>Free Upgrade to Premium</p>
            </div> {/* workIcon */}
          </div>
        </div> {/* Heading */}

        <div className="Ad">
          <a href="https://www.linkedin.com/csp/cat?v=1&action=click&trk=CwEAAAFhd5Ps63z4rc8a2x04aJm2E3L4CqpuHaBjGHs8vhqCh3-sA5raysq40YjnNwK1cUGoN-Q4CFS_VH42SYwAzFGK2TgB4kee4FYqZWBRO1qVFOVCtKnGlsIAL_jcu9fZ1C46r49WvrPXlZlMG6eovnwCE_UifEkOJLJ1OkhofwFDtuKGoh91sR55QMIRP-uet4R-t_IVvJJnEQ0Ww98oV8lMO6Hsiiv9g0ds4dORlc-Og3qTtbJe7qnrDiBEB71xreQRgVZz1syb2JymDHFB-b2w8IRubtXwhwt_rrI5lH5r0uwXQy9R07nQHULMiF14TM2Yf5pAAcCU18QO1Xmi3cFVGVBHbjaL2rVqFFRPmOD4fZFVp3qVE4dE9C-50gd5AqcgYWB_fYecHHsEIA_PSFcKXx1RuoGEIxlB2PUbFmmjxrPQYZfn9-6t-JgVgpn4AIud5biEgo85ClguNMjgMX5LP3KJA9quDvbJWSasCa7Da0V5AjHBEcdZ_2idFyoSEhayflRP4WVoVvMSrMiO9m-JhWYoDtp9RNPI4q0lfMVhkAAJoPXsnxg6ykXsItc9g4DqwIBCfxmEi80ptNZI0oN20k1F1Pko3m30hdUiB-FMbxbEHDVTz1k1fvXW-qwrkwaYE_F8EqBa70CMpFoMZuuplkWmMnQWQjbS4UltCENSV8CJz21NtJ_mXARyYPQySrBtO2p3K5ysX5jsN2f6f_nmLtSCXAN3PRhSPOi0qelMBcm_FBhrPEbw8tOoKXkG0op3i6M9aJJpCSjGc8EoHuhPMl289iUkEpm5H__VknnDyDZZLrFV_Q-9f0vzRj7PfHbyItyd5B7JyUvKxKQQqfWs_CYFTT99wZseEwPPIa3Qevz3lfSfm3Qlxka9e_mKg69mSB8YTLaNXAFk4Tsaj6paOYROvshfVsPoem7_-dFZlvAM31-zYFQBn3orjx266KIfuUrgLdVySvIZsBpW3D52F-rUuOMXKsEnHqRFfzh4EN7FpMz51j-tZrxtFLFz4BLjyLqJ05epTwOge_K7kLm6urxnVhXpU5l44HIYGzHW9n67_NGESbBr0R1UqRuFxFDb7_D4cmD-ivJCVdE6ojcxSTuCZwr7jz1Hcnm_5higfoPZ3rkSdiYAKQ8txisSuk2pzObolMJGabqEuIBmVfhVLxY4tSUrWORs7EDuyeH_7cOgvGqItRn5wM0nuPbhtgOKpAfxxKc-LpY7qyYmWiMnbiS95rTSRoK0T2eUqD-WAGXu7Hc6J-erzZpn15IZQkVuUlCvbz1KE8uzFKxZ5P79yUdEDN0x1nii1IMrFhQwxonAp9eVPkeZN9hrOzy7rGmKgyZzoRvNnr8sD8105BX3gNICfRdw-T0eAD8xMTJeRMgnSTtP8YcbouIQfQ0ZCOeJuaPj3f-P1tPnOY6YsxtluZjcWSs6z9HKZkn6iO6pGKQWb9p6Vb4i3-0agO9gki-Tqn4u1pObqYKhfjQ5L-hcre8b3ZRWQ4pWIkJEd9BAiSN83KwFcHqa-0acXIXnp_E&pageKey=d_flagship3_people"><strong>MBA. ASAP. - </strong>Discover the Johnson One-Year MBA. Check your eligibility.</a>
          <p>Ad</p>
          <img src={ellipsis} alt='options' />
        </div>
        <div className='main'>
          <LeftColumn />
          <CenterColumn 
            profile={this.state.profile}
          />
          <RightColumn 
            ad={this.state.promoted}  
          />
        </div>
      </AppStyled>
    );
  }
}

export default App;
