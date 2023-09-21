import Button from '../Button';
import { Container, ContainerAction, ContainerImage, Content } from './styled';

function QuestionCard() {
  return (
    <Container>
      <Content>
        <ContainerAction>
          <div>
            <h1>Perguntas? Vamos colocá-lo no caminho certo.</h1>
            <Button textButton='Entre em contato' typeButton='withBg' />
          </div>
        </ContainerAction>
        <ContainerImage>
          <img 
            src='https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png' 
            alt='image questionCard' 
          />
        </ContainerImage>
      </Content>
    </Container>
    )
}
export default QuestionCard;
