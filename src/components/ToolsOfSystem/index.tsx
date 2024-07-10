import { ButtonContato, Container, ContainerAction, ContainerImage, Content, DivSujestoesText, Functionalities } from './styled';
import Image1 from "./../../assets/ctaImageLandingPage.png";
import ImageDEMO from "./../../assets/demo-print-sistema.png";
import { Check } from 'phosphor-react';
import { Link } from 'react-router-dom';


function ToolsOfSystem () {
  return (
    <Container>
      <Content>

        <ContainerImage>
          <img
            src={ImageDEMO}
            alt='image questionCard'
          />
        </ContainerImage>
        <ContainerAction>
          <DivSujestoesText>
            <h2>Todas as ferramentas que você precisa para melhorar a gestão da sua empresa.</h2>
            {/* <h6>Indicadores financeiros são medidas quantitativas que revelam a situação financeira da sua
              clínica
              com base em seus resultados. São excelentes ferramentas que auxiliam o gestor em suas
              tomadas de
              decisões.</h6> */}

            <Functionalities>
              <span>
                <Check size={20} color="#1E2C50" weight="bold" />
                Definir Horários e Dose dos Medicamentos:
              </span>
              <span>
                <Check size={20} color="#1E2C50" weight="bold" />
                Definir Patologias do Cliente:
              </span>
              <span>
                <Check size={20} color="#1E2C50" weight="bold" />
                Relatório Diário e Eventos Inesperados:
              </span>
              <span>
                <Check size={20} color="#1E2C50" weight="bold" />
                Gestão de Documentos do Paciente:
              </span>
              <span>
                <Check size={20} color="#1E2C50" weight="bold" />
                Comunicação Direta e Feedback:
              </span>
              <span>
                <Check size={20} color="#1E2C50" weight="bold" />
                Monitoramento de Suprimentos e Consumo:
              </span>
            </Functionalities>
            <Link to={'/recursos'}>
              <ButtonContato>
                Veja todas as nossas funcionalidades.
              </ButtonContato>
            </Link>
          </DivSujestoesText>
          {/* <div>
            <h1>Perguntas? Entre em contato conosco!</h1>
            <button>Entre em Contato</button>
          </div> */}
        </ContainerAction>
      </Content>
    </Container>
  )
}
export default ToolsOfSystem;
