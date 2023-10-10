import  { useState } from 'react';
import {
  SidebarContainer,
  TopSection,
  Logo,
  LinkText,
  NavLinkStyled,
} from './styled'; // Importe os estilos do arquivo styled.ts

import {
  List,
  House,
  Calendar,
  IdentificationCard,
  UsersThree,
  Chats,
} from 'phosphor-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SidebarContainer isOpen={isOpen}>
      <TopSection>
        <Logo style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Saas Care</Logo>
        <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
          <List onClick={toggle} />
        </div>
      </TopSection>

      <NavLinkStyled to="/admin/" className="link">
        <div className="icon">
          <House size={24} />
        </div>
        <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>House</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/calendar/" className="link">
        <div className="icon">
          <Calendar size={24} />
        </div>
        <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Calendar</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/employee/" className="link">
        <div className="icon">
          <IdentificationCard size={24} />
        </div>
        <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Employee</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/patients/" className="link">
        <div className="icon">
          <UsersThree size={24} />
        </div>
        <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Patients</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/feedback/" className="link">
        <div className="icon">
          <Chats size={24} />
        </div>
        <LinkText style={{ display: isOpen ? 'block' : 'none' }} isOpen={isOpen}>Feedbacks</LinkText>
      </NavLinkStyled>
    </SidebarContainer>
  );
};

export default Sidebar;
