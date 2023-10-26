// import Button from '../Button'
import {ButtonSaibaMais, ButtonTesteGratis, Container, ContainerButtons, Content, Functionalities, Leftdiv, Rightdiv } from './styled'
import videoInfos from './../../assets/trailer.mp4'
import { Check } from 'phosphor-react'

export default function Homepage() {
  return (
    <Container>
      <Content>
        <Leftdiv>
          <h1>O Seu Aliado no Cuidado Domiciliar.</h1>
          <p>Simplificando a Gestão de Cuidados de Home Care e Elevando a Eficiência da sua empresa.</p>
          <Functionalities>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Definir Horários e Dose dos Medicamentos:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Definir Patologias do Cliente:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Relatório Diário e Eventos Inesperados:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Gestão de Documentos do Paciente:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Comunicação Direta e Feedback:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Monitoramento de Suprimentos e Consumo:
            </span>
          </Functionalities>
          <ContainerButtons>
            <ButtonTesteGratis>Faca o teste gratis</ButtonTesteGratis>
            <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
          </ContainerButtons>
        </Leftdiv>
        <Rightdiv>
          {/* <img src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2022/11/homepage-success-now-fg.png" alt="home-page-image" /> */}
          <video width="100%" controls>
            <source src={videoInfos} type="video/mp4" />
            {/* <source src="caminho-para-o-seu-video.webm" type="video/webm" /> */}
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </Rightdiv>
      </Content>
    </Container>
    
  )
}
