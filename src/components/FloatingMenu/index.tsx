import { useState } from 'react';
import { Container, Img, Infos, SignOutInfo, StyledFloatingMenu } from './styled';
import { List, SignOut, X } from 'phosphor-react';
// import Sidebar from '../SideBar';

interface IProps{
  handleIsOpen: () => void;
}

function FloatingMenu({handleIsOpen}:IProps){
  // const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <StyledFloatingMenu>
        <button onClick={handleIsOpen}>
        {isMenuOpen ? (
          <div onClick={toggleMenu}><X size={35} color="#ffffff"/></div>
        ) : (
          <List size={35} color="#ffffff" onClick={toggleMenu} />
        )}
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
}

export default FloatingMenu;