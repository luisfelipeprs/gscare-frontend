import ClientCard from '../ClientCard';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';


import func1Atend from './../../assets/func1Atend.png'
import func2Atend from './../../assets/func2Atend.png'
import func3Atend from './../../assets/func3Atend.png'
import func4Atend from './../../assets/func4Atend.png'

function BoxCardsTools () {
  return (
    <Container>
      <Content>
        <Title
          title={'O sistema que faltava para sua empresa.'}
          description='lofsadfasdfasdfasdfasd'
          textButton='Faça o teste gratis'
          typebutton='withBg'
          color='orange'
        />
        <CardsContainer>
          <ClientCard
            description='relatorio diário e avisos de imprevistos do dia.'
            img={func1Atend}
            link='/'
            title='Relatórios'
            type='ocorridos'
          />
          <ClientCard
            description='patologia, alergias, medicacoes e subrimentos.'
            img={func2Atend}
            link='/'
            title='Informações do Paciente'
            type='paciente'
          />
          <ClientCard
            description='lembretes de consultas e medicacoes .'
            img={func4Atend}
            link='/'
            title='Lembretes'
            type='avisos'
          />
          <ClientCard
            description='Numeros emergencias.'
            img={func3Atend}
            link='/'
            title='Contatos'
            type='auxilios'
          />
        </CardsContainer>
      </Content>
    </Container>
  )
}
export default BoxCardsTools;
