import React from 'react';
import { Container, Img, Infos, SidebarMenu, SignOutInfo, StyledFloatingMenu } from './styled';
import { List, SignOut } from 'phosphor-react';
import Sidebar from '../SideBar';

interface IProps{
  handleIsOpen: () => void;
}

function FloatingMenu({handleIsOpen}:IProps){
  return (
    <StyledFloatingMenu>
        <button onClick={handleIsOpen}>
          <List size={32} />
          </button>
      <Img src='https://i.pinimg.com/564x/85/71/72/8571727e081f426167ac04b819ce8dbf.jpg'></Img>
      <Container>
        <Infos>
          <p>Neymar JR</p>
          <p>Microsoft Windows</p>
        </Infos>
        <SignOutInfo>
          <SignOut size={32} />
        </SignOutInfo>
      </Container>
    </StyledFloatingMenu>
  );
};

export default FloatingMenu;
