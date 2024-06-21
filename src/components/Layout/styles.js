import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

const Header = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.textColor};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.bgColor};
  overflow: hidden;
  box-sizing: border-box;
  & .window_circles {
    max-width: 81px;
    margin-right: 33px;
  }

  & .user {
    display: flex;
    align-items: center;
    margin-right: 82px;
    & .initial {
      color: rgb(78 146 233 / 54%);
      box-shadow: 30px 0 100px 150px ${props => props.theme.userInitialColor};
      //box-shadow: 30px 0 100px 150px rgb(78 146 233 / 54%);
      width: 20px;
      height: 20px;
      margin-right: 10px;
      border-radius: 4px;
    }
  }

  & .repo {
    display: flex;
    align-items: center;

    & img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  & .settings {
    width: 20px;
    height: 20px;
  }

  & .linkCircles_wrap {
    position: relative;
    display: flex;
    gap: 12px;
    margin-right: 33px;
    & img{
      opacity: 0;
    }
    &:hover{
      & img{
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 600px) {
    & .user{
      margin-right: 0;
      & span{
        width: 70px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    & .repo{
      display: none;
    }
  }
`

const Sidebar = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 235px;
  //color: #fff;
  color: ${props => props.theme.textColor};
  //background: #2A2C2F;
  background: ${props => props.theme.bgColor};
  border-right: 1px solid ${props => props.theme.borderColor};

  & .project_wrap {
    width: 60px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid ${props => props.theme.borderColor};
    flex-shrink: 0;
    & .mobileIcon_wrap{
      display: flex;
      flex-direction: column;
    }
   

    & .repo {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 600px) {
    width: auto;
    & .project_wrap{
      border-right: none;
    }
  }
`
const SidebarRoot = styled.div`
  flex-grow: 1;
  overflow: hidden;

  & .root_wrap {
    padding: 0 10px;
  }

  & .title {
    height: 45px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    padding: 0 14px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }

  & .root {
    width: fit-content;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  & .module_icon {
    margin-right: 5px;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Contents = styled.div`
  //background: #1E1F22;
  background: ${props => props.theme.contentBgColor};
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  & .tabs {
    overflow: auto;
    height: 45px;
    display: flex;
    flex-shrink: 0;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  & .container {
    overflow-y: scroll;
    border-right: 3px solid transparent;
    box-sizing: border-box;

    & .container_wrap {
      padding: 25px;
      max-width: 820px;
    }
  }

  & .section_01 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 46px;
    border-bottom: 2px solid ${props => props.theme.sectionBorderColor};

    & .wrap {
      position: relative;
    }

    & .title {
      font-size: 48px;
      margin-top: 15px;
      font-weight: 600;
    }

    & .sub_title {
      font-size: 24px;
      font-weight: 500;
    }

    & img {
      display: block;
      width: 200px;
      height: 200px;
    }


  }

  & .section_02 {
    margin-top: 46px;
    padding: 10px 20px 30px;
    font-weight: 500;
    line-height: 1.4;
    border-left: 5px solid #4A88C7;
    background: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    & .title{
      color: #4A88C7;
      font-size: 24px;
    }
    & .text{
      font-size: 16px;
      margin-top: 20px;
    }
  }

  & .skills {
    margin-top: 36px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.sectionBorderColor};
    padding: 20px 20px 30px;
      // border-bottom: 1px solid ${props => props.theme.bgColor};

    & > .title {
      font-size: 24px;
      font-weight: bold;
      color: ${props => props.theme.skillTitleColor};
    }

    & .skill_list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 18px;

      & .skill {
        display: flex;
        align-items: baseline;

        & .title {
          font-size: 16px;
          font-weight: 800;
          min-width: 100px;
          color: ${props => props.theme.skillTextColor};
        }

        & .tags {
          //display: flex;
        }
      }

    }
  }

  & .Career {
    margin-top: 30px;
    font-weight: 500;
    line-height: 1.4;

    & > .title {
      font-size: 36px;
      font-weight: bold;
    }

    & .info_wrap {
      margin-top: 20px;
      padding: 20px 20px 50px 20px;
      background: ${props => props.theme.bgColor};
      & img{
        display: block;
        width: 200px;
      }
      & .head {
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      & .info_text {
        margin-top: 20px;
      }
      
      & .mid_line{
        width: 100%;
        height: 1px;
        background: #4A88C7;
        margin-top: 20px;
      }
      
      & .description{
        margin-top: 20px;
        & .text{
          margin-top: 10px;
          padding-left: 10px;
          font-size: 15px;
          font-weight: 300;
        }
      }
    }
    & .more_info{
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 20px auto 0;
      width: fit-content;
      padding: 5px 10px;
      border: 2px solid ${props => props.theme.sectionBorderColor};
      & .icon{
        width: 30px;
        height: 30px;
      }
    }
  }

  & .Project {
    margin-top: 58px;

    & .title {
      font-size: 36px;
    }
  }
  @media (max-width: 900px) {
    & .section_01 {
      flex-direction: column;
      & img{
        margin-top: 25px;
        margin-left: auto;
        width: 100px;
        height: 100px;
      }
    }
  }
  @media (max-width: 600px) {
    & .section_01 {
      & .title{
        font-size: 40px;
      }
      & .sub_title{
        font-size: 18px;
      }
    }
  }
`

const StyeldLinkCircles = styled(Link)`
  width: 19px;
  height: 19px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.close {
    background: ${props => props.$modalVisible ? props.theme.activeColor : '#ED6A5F'};
    & img{
      width: 13px;
    }
  }

  &.hide {
    background: ${props => props.$modalVisible ? props.theme.activeColor : '#FFBB2E'};
  }

  &.full_screen {
    background: ${props => props.$modalVisible ? props.theme.activeColor : '#61C454'};
  }
`
const StyeldLinkContact = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 164px;
  height: 44px;
  background: #4A88C7;
  border: 0;
  border-radius: 5px;
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  &.mobile{
    display: none;
    margin-left: auto;
  }
  @media (max-width: 900px) {
    display: none;
    position: unset;
    margin-top: 20px;
    &.mobile{
      display: flex;
    }
  }
`

const StyeldLinkRoot = styled(Link)`
  padding: 5px 0px 5px 55px;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 4px;
  &.active {
    background: ${props => props.theme.activeColor};;
  }

`;

const StyeldLinkTab = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 20px;
  //color: #fff;
  color: ${props => props.theme.textColor};
  gap: 5px;

  & img {
    width: 20px;
    height: 20px;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 4px;
    background: #4A88C7;
    border-radius: 5px;
    width: 100%;
  }
`;

const StyeldLinkProject = styled(Link)`
  color: #56C2FF;
  margin-top: 10px;
  display: inline-block;
`;

const StyeldLinkMobile = styled(Link)`
  padding: 10px;
  border-radius: 4px;
  &.active {
    background: ${props => props.theme.activeColor};;
  }
`

const Footer = styled.div`
  background: ${props => props.theme.bgColor};
  border-top: 1px solid ${props => props.theme.borderColor};
  height: 40px;
  box-sizing: border-box;
`

export {
    Header,
    Sidebar,
    SidebarRoot,
    Contents,
    StyeldLinkTab,
    StyeldLinkRoot,
    StyeldLinkContact,
    StyeldLinkProject,
    StyeldLinkCircles,
    StyeldLinkMobile,
    Footer,
}

export default {
    Header,
    Sidebar,
    SidebarRoot,
    Contents,
    StyeldLinkTab,
    StyeldLinkRoot,
    StyeldLinkContact,
    StyeldLinkProject,
    StyeldLinkCircles,
    StyeldLinkMobile,
    Footer,
}