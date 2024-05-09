import { ButtonContato, Container, ContainerAction, ContainerImage, Content, DivSujestoesText } from './styled';
import Image1 from "./../../assets/financial-668x772 (1).webp";


function QuestionCard() {
  return (
    <Container>
      <Content>
        <ContainerAction>

          <DivSujestoesText>
            <h2>Simplifique a gestão da sua clínica, tenha todos os indicadores em um só lugar</h2>
            <h6>Indicadores financeiros são medidas quantitativas que revelam a situação financeira da sua
              clínica
              com base em seus resultados. São excelentes ferramentas que auxiliam o gestor em suas
              tomadas de
              decisões.</h6>
            <ButtonContato>Entre em contato </ButtonContato>
          </DivSujestoesText>
          {/* <div>
            <h1>Perguntas? Entre em contato conosco!</h1>
            <button>Entre em Contato</button>
          </div> */}
        </ContainerAction>
        <ContainerImage>
          <img
            src={Image1}
            alt='image questionCard'
          />
        </ContainerImage>
      </Content>
    </Container>
  )
}
export default QuestionCard;
