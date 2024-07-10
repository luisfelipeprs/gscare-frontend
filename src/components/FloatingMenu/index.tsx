import { useState } from 'react';
import { Container, Infos, ContentIcon, StyledFloatingMenu, MenuIcon, ImageLogo, MenuButton, LeftContainer, RightContainer, IconAndInfos } from './styled';
// import { SignOut } from 'phosphor-react';

import { AvatarIconAndOption } from '../AvatarIconAndOption';
import { BellIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import TextGscare from '../TextGscare';


interface IProps {
  handleIsOpen: () => void;
}

function FloatingMenu ({ handleIsOpen }: IProps) {

  const navigate = useNavigate();

  function goToHome () {
    navigate('/')
  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <ImageLogo onClick={goToHome}>
            <TextGscare />
          </ImageLogo>
        </LeftContainer>

        <RightContainer>

          {/* <ContentIcon>
            <SignOut size={32} />
          </ContentIcon> */}

          <ContentIcon>
            <BellIcon />
          </ContentIcon>

          {/* <ContentIcon>
            <EnvelopeClosedIcon />
          </ContentIcon> */}

          <IconAndInfos>
            <Infos>
              <p>Fernando Franco</p>
              <p>GsCare company</p>
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
