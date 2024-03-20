import Image1 from "./assets/financial-668x772 (1).webp"
import { ButtonContato, Container, ContainerSujestoes, Content, DivContainerSujestoesText, DivSujestoesImg, DivSujestoesText } from "./styled"

export const MobileRecursos = () => {
  return (
    <Container>
      <Content>

        <ContainerSujestoes>

          <DivSujestoesImg>
            <img src={Image1} alt="" />
          </DivSujestoesImg>
          <DivContainerSujestoesText>
            <DivSujestoesText>
              <h2>Simplifique a gestão da sua clínica, tenha todos os indicadores em um só lugar</h2>
              <h6>Indicadores financeiros são medidas quantitativas que revelam a situação financeira da sua
                clínica
                com base em seus resultados. São excelentes ferramentas que auxiliam o gestor em suas
                tomadas de
                decisões.</h6>
              <ButtonContato>Entre em contato </ButtonContato>
            </DivSujestoesText>
          </DivContainerSujestoesText>
        </ContainerSujestoes>
      </Content>
    </Container>
  )
}
