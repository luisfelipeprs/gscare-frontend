import { Action, Contact, Container, Infos, Logo, Navbar, Notification } from './styled';

function index() {
    return (
      <>
        <Container>
          <Navbar>
              <Infos>
                <Logo src='https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg'/>
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
                <button>Teste gratis</button>
              </Action>
          </Navbar>
        </Container>
        <Notification>
          <h2>
            Acompanhe a magia do Dreamforce, ao vivo no Salesforce+, de 12 a 14 de  setembro.
          </h2>
        </Notification>
      </>
    )
}
export default index;