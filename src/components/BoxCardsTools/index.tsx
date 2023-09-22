import ClientCard from '../ClientCard';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';

function BoxCardsTools() {
  return (
    <Container>
      <Content>
        <Title
          title={'Nossas inovações lançadas recentemente em nosso sistema.'} 
        />
        <CardsContainer>
          <ClientCard
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
            type='empresa'
          />
          <ClientCard
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
            type='empresa'
          />
          <ClientCard
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
            type='empresa'
          />
          <ClientCard
            description='Fortaleça a empresa do seu cliente com dados unificados e em tempo real.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='Conheça o Flow'
            type='empresa'
          />
        </CardsContainer>
      </Content>
    </Container>
    )
}
export default BoxCardsTools;
