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
            description='Fortaleça.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/sumup-customers-home.jpg?resize=150,150'
            link='/'
            title='Conheça'
            type='empresa'
          />
          <ClientCard
            description='Fortaleça.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/gympass-customers-home.jpg?resize=150,150'
            link='/'
            title='Conheça'
            type='empresa'
          />
          <ClientCard
            description='Fortaleça.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/vipal-customers-home.jpg?resize=150,150'
            link='/'
            title='Conheça'
            type='empresa'
          />
          <ClientCard
            description='Fortaleça.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/tigre-customers-home.jpg?resize=150,150'
            link='/'
            title='Conheça'
            type='empresa'
          />
        </CardsContainer>
      </Content>
    </Container>
    )
}
export default BoxCardsTools;
