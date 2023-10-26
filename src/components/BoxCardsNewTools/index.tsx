import Card from '../Card';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';
import screenTelaAdm from './../../assets/screenAdm.png'

function BoxCardsNewTools() {
  return (
    <Container>
      <Content>
        <Title
          title={'As melhores ferramentas para sua empresa ter mais agilidade nos processos internos.'} 
          description={'Apresentamos o RevolutionCare, uma plataforma completa que transforma a gestão de cuidados domiciliares.'}
        />
        <CardsContainer>
          <Card
            description='Calendário de agendamentos que facilita a gestao de atendimento entre atendente e paciente.'
            img={screenTelaAdm}
            link='/'
            title='Conheça nosso Calendário'
          />
          <Card
            description='Recebimento de Feedbacks, Relatórios diários e Avisos de acontecimentos inesperados do dia.'
            img={screenTelaAdm}
            link='/'
            title='Conheça o Flow'
          />
          <Card
            description='Defina nescessidades e caracteristicas dos paciente. Agilizando o processo de reconhecimento por parte do funcionário.'
            img={screenTelaAdm}
            link='/'
            title='Conheça o Flow'
          />
        </CardsContainer>
      </Content>
    </Container>
    )
}
export default BoxCardsNewTools;
