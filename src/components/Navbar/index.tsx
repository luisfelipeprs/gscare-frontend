import { Link } from 'react-router-dom';
import { Action, Contact, Container, ImageIconLogo, ImageLogo, Infos, Navigationbar, Notification } from './styled';
import { User } from 'phosphor-react';
import logo from './../../assets/logo.svg'
import iconLogo from './../../assets/iconLogo.png'

function Navbar() {
    return (
      <>
        <Container>
          <Navigationbar>
              <Infos>
                <ImageLogo>
                  <img src={logo} alt="logo" width='200px' />
                </ImageLogo>
                <ImageIconLogo>
                  <img src={iconLogo} alt="icone Logo" height='50px' />
                </ImageIconLogo>
                <ul>
                  <li>Suporte</li>
                  <li>Empresa</li>
                  <li>Service</li>
                </ul>
              </Infos>
              <Action>
                <Contact>
                  <a href="">Entre em contato</a>
                  <p>40 2809 9022</p>
                </Contact>
                <Link className='gotoLoginButton' to="/login">
                  <User size={24} />
                  Login
                </Link>
                <Link className='linkButton' to="/form">
                  Teste Gratis
                </Link>
              </Action>
          </Navigationbar>
        </Container>
        <Notification>
          <h2>
            Conheça a empresa que vai revolucinar a sua empresa de homecare.
          </h2>
        </Notification>
      </>
    )
}
export default Navbar;