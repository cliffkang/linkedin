import styled from 'styled-components';

const AppStyled = styled.div`
  .Heading {
    height: 52px;
    width: 100%;
    margin: auto;
    padding: 0 30px;
    background-color: #293E49;
    display: flex;
    justify-content: center;
    
    div {
      max-width: 1128px;
      display: flex;
      flex-direction: row;
      img {
        height: 35px;
        width: 35px;
        margin: auto auto;
      }
      input {
        height: 29px;
        margin: auto auto;
      }
      ul {
        margin: 0 0 0 auto;
        display: flex;
        flex-direction: row;
        li {
          min-width: 80px;
          height: 44px;
          text-align: center;
          margin: auto auto;
          img {
            height: 24px;
            width: 24px;
          }
          p {
            font-family: BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,san-serif;
            font-size: 12px;
            color: #c7d1d8;
            height: 16px;
            width: 80px;
            &:hover {
              font-weight: bold;
              color: white;
            }
          }
        } 
      } /* ul */
      .workIcon {
        div {
          min-width: 80px;
          height: 44px;
          text-align: center;
          margin: auto auto;
          img {
            height: 24px;
            width: 24px;
          }
          p {
            font-family: BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,san-serif;
            font-size: 12px;
            color: #c7d1d8;
            height: 16px;
            width: 80px;
            &:hover {
              font-weight: bold;
              color: white;
            }
          }
        }
        p {
          text-align: center;
          color: #C7C3A8;
          height: 40px;
          width: 100px;
          margin: auto 0;
        }
      } /* workIcon */
    } /* div */
  } /* .Heading */
  background-color: #F5F5F5;
  .Ad {
    margin: 16px 0;
    height: 17px;
    width: 1128px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
      margin: 0 7px;
    }
    img {
      height: 16px;
      width: 20px;
    }
  } /* .Ad */

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export default AppStyled;