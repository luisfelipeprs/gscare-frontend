import { Container, ContainerAction, ContainerImage, Content } from './styled';
import imageCta from './../../assets/ctaImageLandingPage.png'

function QuestionCard () {
  return (
    <Container>
      <Content>
        <ContainerAction>
          <div>
            <h1>Perguntas? Entre em contato conosco!</h1>
            <button>Entre em Contato</button>
          </div>
        </ContainerAction>
        <ContainerImage>
          <img
            src={imageCta}
            alt='image questionCard'
          />
        </ContainerImage>
      </Content>
    </Container>
  )
}
export default QuestionCard;
