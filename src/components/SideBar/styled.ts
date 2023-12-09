import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IisOpen{
  isOpen: boolean

}

export const SidebarContainer = styled.div<IisOpen>`
  width: ${(props) => (props.isOpen ? '300px' : '60px')};
  height: 100vh;
  background-color: #333; 
  color: #fff;
  transition: width 0.3s ease-in-out;
  @media screen and (max-width: 1000px) {
    display: ${(props) => (props.isOpen ? '' : 'none')};
    width: 100%;
    top: 70px;
    position: fixed;
    text-align: center;
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 2px;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #555;
    margin: 0 25px;
  }
`;

export const Logo = styled.h1<IisOpen>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 1.5rem;
  margin: 10px;
  @media screen and (max-width: 600px) {
    font-size: 1.8;
  }
  
`;

export const LinkIcon = styled.div<IisOpen>`
  font-size: 1.2rem;
  margin-right: 10px;
    @media screen and (max-width: 1000px) {
   font-size: 1.8rem;
  }
`;

export const LinkText = styled.div<IisOpen>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 1.4rem;
  margin-left:5px;
  @media screen and (max-width: 1000px) {
   font-size: 1.8rem;
  }
`;

export const NavLinkStyled = styled(NavLink)<IisOpen>`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  margin: 3px;
  @media screen and (max-width: 600px) {
    padding: 30px;
    justify-content: center;
    font-size: 2rem;
    div{
      svg{
        height: 30px;
        width: 30px;
      }
    }


  }

  &:hover {
    background-color: #555;
    
  }
`;
export const Menu = styled.div`
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 5px;
`
export const Icons = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 10px;
`