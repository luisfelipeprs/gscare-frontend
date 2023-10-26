import { Container, Content, Copyright, FooterLinks } from './styled';

function Footer() {
  return (
    <Container>
      <Content>
        <Copyright>
          <p>© Copyright 2022 Salesforce, Inc. <a href="https://google.com">All rights reserved.</a> Various trademarks held by their respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p>
        </Copyright>
        <FooterLinks>
          <ul>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Legal</a></li>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Termos de Servicos</a></li>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Declaração de privacidade</a></li>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Divulgação responsável</a></li>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Segurança</a></li>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Contato</a></li>
            <li><a href="https://cdn.discordapp.com/attachments/920700154204553226/1154199226255949894/timbo.png">Preferências de cookies</a></li>
          </ul>
        </FooterLinks>
      </Content>
    </Container>
  )
}
export default Footer;
