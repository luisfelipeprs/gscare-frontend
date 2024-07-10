// import Image1 from './../../../../assets/background-home1.png'
import Image2 from "./../../../../assets/mobile-preview-layout2.png"
// import Image3 from "./../../../../assets/background-home3.png"
// import Image4 from "./../../../../assets/background-home4.png"
// import Image5 from "./../../../../assets/background-home5.png"
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Check } from "phosphor-react";
import { ButtonSaibaMais, ButtonTesteGratis, CircleBackImage, Container, ContainerButtons, Content, Functionalities, Leftdiv, Overlay, Rightdiv } from "./styled"

interface IProps {
  title: string;
  description: string;
}

export const PagePreview = () => {

  const handleOpenModal = () => {
    console.log('clicou no btn')
  }

  return (
    <Container>
      <Overlay></Overlay >
      <Content>
        <Leftdiv>
          <h1>As melhores ferramentas para sua empresa.</h1>
          <p>Focadas no aumento de eficiencia e organização empresarial para melhor gestão da sua empresa.</p>
          <Functionalities>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Definir Horários e Dose dos Medicamentos:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Definir Patologias do Cliente:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Relatório Diário e Eventos Inesperados:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Gestão de Documentos do Paciente:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Comunicação Direta e Feedback:
            </span>
            <span>
              <Check size={20} color="#ffa500" weight="bold" />
              Monitoramento de Suprimentos e Consumo:
            </span>
          </Functionalities>
          <ContainerButtons>
            <ButtonTesteGratis onClick={handleOpenModal}>Faca o teste gratis</ButtonTesteGratis>
            <ButtonSaibaMais>
              <div>
                <div>
                  <EyeOpenIcon />
                </div>
                <span>Vídeo demonstrativo</span>
              </div>
            </ButtonSaibaMais>
          </ContainerButtons>
        </Leftdiv>
        <Rightdiv>
          <CircleBackImage> </CircleBackImage>
          <img src={Image2} alt="home-page-image" />
          {/* <video width="100%" controls>
            <source src={videoInfos} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video> */}
        </Rightdiv>
        {/* <Curve/> */}
      </Content>
    </Container>

  )
}
