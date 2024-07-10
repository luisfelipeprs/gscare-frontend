// import Button from '../Button'
import { ButtonSaibaMais, ButtonTesteGratis, CircleBackImage, Container, ContainerButtons, Content, Functionalities, Leftdiv, Overlay, Rightdiv } from './styled'
import saasPhoto2 from './../../assets/mobile-preview-layout2.png'
import { Check } from 'phosphor-react'
import { EyeOpenIcon } from '@radix-ui/react-icons'

interface IProps {
  handleOpenModal: () => void
}

export default function Homepage ({ handleOpenModal }: IProps) {
  return (
    <Container>
      <Overlay></Overlay >
      <Content>
        <Leftdiv>
          <h1>O sistema feito para aumentar a gestão e organização da sua empresa</h1>
          <p>Focado na gestão e eficiência de empresas que lidam com atendimentos e gerenciamento de clientes e funcionários.</p>
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
          <img src={saasPhoto2} alt="home-page-image" />
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
