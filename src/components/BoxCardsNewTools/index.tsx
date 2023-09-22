import Card from '../Card';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';

function BoxCardsNewTools() {
  return (
    <Container>
      <Content>
        <Title
          title={'Encontre as próximas inovações que terão em nosso sistema.'} 
        />
        <CardsContainer>
          <Card
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
          />
          <Card
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
          />
          <Card
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
          />
        </CardsContainer>
      </Content>
    </Container>
    )
}
export default BoxCardsNewTools;
