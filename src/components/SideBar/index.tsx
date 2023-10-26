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

const Sidebar = ({isOpenSideBar}:any) => {
  const isMenuOpen = isOpenSideBar;

  return (
    <SidebarContainer isOpen={isOpenSideBar}>
      <TopSection>
        <Logo style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Saas Care</Logo>
        <div style={{ marginLeft: isOpenSideBar ? '50px' : '0px' }} className="bars">
        </div>
      </TopSection>

      <NavLinkStyled to="/admin/" className="link">
        <div className="icon">
          <House size={24} />
        </div>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>House</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/calendar/" className="link">
        <div className="icon">
          <Calendar size={24} />
        </div>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Calendar</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/employee/" className="link">
        <div className="icon">
          <IdentificationCard size={24} />
        </div>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Employee</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/patients/" className="link">
        <div className="icon">
          <UsersThree size={24} />
        </div>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Patients</LinkText>
      </NavLinkStyled>

      <NavLinkStyled to="/admin/feedback/" className="link">
        <div className="icon">
          <Chats size={24} />
        </div>
        <LinkText style={{ display: isOpenSideBar ? 'block' : 'none' }} isOpen={isOpenSideBar}>Feedbacks</LinkText>
      </NavLinkStyled>
    </SidebarContainer>
  );
};

export default Sidebar;