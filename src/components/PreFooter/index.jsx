import React from 'react'
import { About, Container, Content, Demo, FooterContact, Links, Logos } from './styled'
import { InstagramLogo } from "phosphor-react";


function PreFooter() {
  return (
    <Container>
      <Content>
        <FooterContact>
          <img src="https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg" alt=""/>
          <Logos> 
            <InstagramLogo size={32}/>
            <InstagramLogo size={32}/>
            <InstagramLogo size={32}/>
            <InstagramLogo size={32}/>
            <InstagramLogo size={32}/>
          </Logos>
          <p>Entre em contato 1-800-664-9073</p>
        </FooterContact>
        <Demo>
        <p>Ainda não conhece a Salesforce?</p>
        <ul>
          <a href="#"><li>O que é CRM?</li></a>
          <a href="#"><li>O que é a Salesforce?</li></a>
          <a href="#"><li>Software de automação de marketing</li></a>
          <a href="#"><li>Explorar todos os produtos</li></a>
          <a href="#"><li>O que é computação na nuvem?</li></a>
          <a href="#"><li>Histórias de Clientes</li></a>
          <a href="#"><li>Edições e Preços</li></a>
          <a href="#"><li>Política de Privacidade</li></a>
        </ul>
        </Demo>
        <About>
          <p>Sobre a Salesforce</p>
          <ul>
            <a href="#"><li>Nossa história</li></a>
            <a href="#"><li>Blog</li></a>
            <a href="#"><li>Carreiras</li></a>
            <a href="#"><li>Carreiras</li></a>
            <a href="#"><li>Segurança</li></a>
            <a href="#"><li>Salesforce.org</li></a>
            <a href="#"><li>Sustentabilidade</li></a>
            <a href="#"><li>Investidores</li></a>
            <a href="#"><li>Dê-nos o seu feedback</li></a>
          </ul>
        </About>
        <Links>
          <p>Links populares</p>
          <ul>
              <a href="#"><li>Novos recursos e lançamentos</li></a>
              <a href="#"><li>Salesforce para pequenas empresas</li></a>
              <a href="#"><li>Encontre ou torne-se um parceiro</li></a>
              <a href="#"><li>CRM Software</li></a>
              <a href="#"><li>Salesforce LIVE</li></a>
              <a href="#"><li>Dreamforce</li></a>
              <a href="#"><li>Salesforce Mobile</li></a>
            </ul>
        
        </Links>

      </Content>
    </Container>

    )
}

export default PreFooter;