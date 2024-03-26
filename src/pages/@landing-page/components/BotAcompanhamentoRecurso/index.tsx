import Image1 from "./assets/financial-5.webp"
import Image2 from "./assets/financial-6.webp"
import { ConjuntoImagem, Container, Content, DivSujestoesImgFundo, MaisResultados, MaisResultadosButton, MaisResultadosImg, MaisResultadosText } from "./styled"

export const BotAcompanhamentoRecurso = () => {
  return (
    <Container>
      <Content>


        <MaisResultados>
          <MaisResultadosText>
            <h1>Mais resultados</h1>
            <h6>O sistema Stenci avisa aos gestores sobre pacientes que precisam realizar uma nova consulta ou
              um novo
              exame. Essa atenção além de trazer mais resultados, ajuda na fidelização do paciente.
            </h6>
            <MaisResultadosButton>Mais resultados </MaisResultadosButton>

          </MaisResultadosText>
          <ConjuntoImagem>
            <DivSujestoesImgFundo>
              <img src={Image1} alt="" />
            </DivSujestoesImgFundo>
            <MaisResultadosImg>
              <img src={Image2} alt="" />
            </MaisResultadosImg>
          </ConjuntoImagem>

        </MaisResultados>
      </Content>

    </Container>
  )
}
