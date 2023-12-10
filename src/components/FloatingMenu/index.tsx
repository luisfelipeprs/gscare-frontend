import { useState } from 'react';
import { Container, Infos, ContentIcon, StyledFloatingMenu, MenuIcon, ImageLogo, MenuButton, LeftContainer, RightContainer, IconAndInfos } from './styled';
// import { SignOut } from 'phosphor-react';

import logo from './../../assets/logo.svg'
import { AvatarIconAndOption } from '../AvatarIconAndOption';
import { BellIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'


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
      <Container>
        <LeftContainer>
          
          <ContentIcon>
            <MenuButton onClick={handleIsOpen}>
              <MenuIcon onClick={toggleMenu} />
            </MenuButton>
          </ContentIcon>

          <ImageLogo>
            <img src={logo} alt="logo" width='200px' />
          </ImageLogo>
        </LeftContainer>

        <RightContainer>
          
          {/* <ContentIcon>
            <SignOut size={32} />
          </ContentIcon> */}
          
          <ContentIcon>
            <BellIcon />
          </ContentIcon>
          
          <ContentIcon>
            <EnvelopeClosedIcon />
          </ContentIcon>
          
          <IconAndInfos>
            <Infos>
              <p>Neymar JR</p>
              <p>Microsoft Windows</p>
            </Infos>
            
            <ContentIcon>
              <AvatarIconAndOption />
            </ContentIcon>
          </IconAndInfos>
        </RightContainer>
      </Container>

    </StyledFloatingMenu>
  );
}

export default FloatingMenu;