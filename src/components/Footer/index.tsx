import { Container, Content, Copyright, FooterLinks } from './styled';

function Footer() {
  return (
    <Container>
      <Content>
        <Copyright>
          projeto pessoal: equipe GSCare
          {/* <p>© Copyright 2022 Salesforce, Inc. <a href="https://google.com">All rights reserved.</a> Various trademarks held by their respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p> */}
        </Copyright>
        <FooterLinks>
          <ul>
            <li><a href="https://www.linkedin.com/in/fernandofrancovalle/">Fernando Franco</a></li>
            <li> - </li>
            <li><a href="https://www.linkedin.com/in/luisfelipeprs/">Luis Felipe</a></li>
            <li> - </li>
            <li><a href="https://www.linkedin.com/in/gabriel-athayde/">Gabriel Athayde</a></li>
          </ul>
          Responsáveis pelo projeto.
        </FooterLinks>
      </Content>
    </Container>
  )
}
export default Footer;
