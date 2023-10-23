import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IisOpen{
  isOpen: boolean

}

export const SidebarContainer = styled.div<IisOpen>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(35 39 47); ;
  color: #fff;
  transition: width 0.3s ease-in-out;
  position: fixed;
  display:flex;
  width:100%;
  top: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

`;

export const Logo = styled.h1<IisOpen>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 1.5rem;
  margin: 0;
  
`;

export const LinkIcon = styled.div<IisOpen>`
  font-size: 1.2rem;
  margin-right: 10px;
`;

export const LinkText = styled.div<IisOpen>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 1.5rem;
`;

export const NavLinkStyled = styled(NavLink)<IisOpen>`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  margin: 3px;

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
  margin-left: 15px;
  margin-top: 25px;
  margin-right: 10px;
`