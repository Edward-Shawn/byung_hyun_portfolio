import styled, { css } from 'styled-components';
const Container = styled.div`
  padding: 35px;
  max-width: 1200px;
  & .pageTitle{
    font-size: 48px;
    font-weight: bold;
  }
  & .list_wrap{
    margin-top: 55px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 25px;
    grid-row-gap: 40px;
  }
  & .item{
    border-radius: 5px;
    overflow: hidden;
    background: ${props => props.theme.projectBgColor};
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
    & .img_wrap{
      min-height: 120px;
      & .img_inner{
        padding-bottom: 100%;
        position: relative;
        & img{
          width: 100%;
          position: absolute;
          display: block;
        }  
      }
        
    }
    
    & .wrap{
      padding: 13px 13px 30px 13px;
    }
    & .title{
      font-size: 18px;
      font-weight: 600;
    }
    & .description{
      margin-top: 20px;
      font-size: 14px;
      line-height: 1.2;
    }
    & .tags{
      margin-top: 20px;
    }
    & .button_group{
      display: inline-flex;
      margin-top: 30px;
      border-radius: 4px;
      overflow: hidden;
      & button{
        color: #fff;
        background: #5F5F5F;
        border: 0;
        padding: 8px 20px;
        &:nth-child(2) {
          background: #4FC921;
        }
      }
    }
  }
  @media (max-width: 960px) {
    & .list_wrap{
      grid-template-columns: repeat(2,1fr);
    }
  }
  @media (max-width: 768px) {
    & .list_wrap{
      grid-template-columns: repeat(1,1fr);
    }
  }
`



export { Container };

export default { Container };