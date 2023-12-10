import styled from 'styled-components';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';


export const StyledFloatingMenu = styled.div`
  z-index: 11;
  background-color: #fff;
  color: #0000008c;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  /* position: relative; */
  /* border: none; */
  /* border-radius: 5px; */
  button{
    background-color: transparent;
    border: none;
    /* margin-left: 10px; */
  }
  @media screen and (max-width: 1000px) {
    
    z-index: 8;
  //  border: none;
    border-radius: 0px;
  }

`;


export const ImageLogo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  img {
    height: 35px;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
      display: none;
  }
`


export const Img = styled.img`
  width: 50px;
  border: 1px solid black;
  border-radius: 40px;
  margin: 10px;
`

export const IconAndInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Infos = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  
  @media screen and (max-width: 768px) {
      display: none;
  }
  
  p {
    display: flex;
    margin: 3px;
    margin: 0;

    &:first-child {
      font-size: 1rem;
      justify-content: end;
    }

    &:nth-child(2) {
      font-size: 0.55rem;
      justify-content: end;
    }
  }
`

export const ContentIcon = styled.div`
  margin: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
`
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const SidebarMenu = styled.div`
  margin-bottom: 20px;
`

export const MenuButton = styled.button``

export const MenuIcon = styled(HamburgerMenuIcon)`
  height: 20px;
  width: 20px;
  color: #0000008c;
  `

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
`

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 25px;
  
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`