import styled from 'styled-components';

const CenterStyled = styled.div`
  width: 552px;
  .inviations {
    background-color: white;
    height: 48px;
    margin: 0 0 16px 0;
  }
  .youMayKnow {
    background-color: white;
    .profiles {
      display: flex;
      flex-wrap: wrap;
      .profile {
        max-height: 256px;
        max-width: 183.75px;
        text-align: center;
        outline: #cdcfd2 solid 1px;
        overflow: hidden;
        img {
          width: 104px;
          height: 104px;
          border-radius: 50%;
          margin: 12px 0 0 0;
        }
        .person-info {
          width: 167.75;
          height: 92;
          padding: 0 8px;
          margin: 4px 0 0 0;
          h4 {
            font-weight: 600;
            color: rgba(0,0,0,0.9);
            font-size: 14px;
            font-family: BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,sans-serif;
            line-height: 20px;
          }
          p {
            font-weight: 400;
            font-size: 12px;
            font-family: BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,sans-serif;
            line-height: 16px;
            color: rgba(0,0,0,0.6);
          }
          .NoLinks {
            img {
              height: 15px;
              width: 18px;
              margin: auto 0;
            }
          }
        }
      }
    }
  }
`

export default CenterStyled;