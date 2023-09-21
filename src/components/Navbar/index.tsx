import { Action, Contact, Container, Infos, Logo, Navigationbar, Notification } from './styled';

function Navbar() {
    return (
      <>
        <Container>
          <Navigationbar>
              <Infos>
                <a href="https://www.salesforce.com/br/"><Logo src='https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg'/></a>
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
          </Navigationbar>
        </Container>
        <Notification>
          <h2>
            Acompanhe a magia do Dreamforce, ao vivo no Salesforce+, de 12 a 14 de  setembro.
          </h2>
        </Notification>
      </>
    )
}
export default Navbar;