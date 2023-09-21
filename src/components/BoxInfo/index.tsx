import Card from '../Card';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';

function BoxInfo() {
  return (
    <Container>
      <Content>
        <Title
          title={'Encontre inovações para qualquer setor de indústria.'} 
          // typeButton='withBorder'
        />
        <CardsContainer>
          <Card
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto laborum quaerat odio sapiente consectetur magnam quia doloremque.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='title'
          />
          <Card
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto laborum quaerat odio sapiente consectetur magnam quia doloremque.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='title'
          />
          <Card
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto laborum quaerat odio sapiente consectetur magnam quia doloremque.'
            img='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png'
            link='/'
            title='title'
          />
        </CardsContainer>
      </Content>
    </Container>
    )
}
export default BoxInfo;
