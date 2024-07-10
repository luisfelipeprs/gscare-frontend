import Navbar from "../../../components/Navbar";
import Image1 from "./assets/startup2.webp"
import Image2 from "./assets/business-5.webp"
import Image3 from "./assets/Dr_Andre_Bernardi.webp"
import Image4 from "./assets/Sandra-Ruhmke.webp"
import Image5 from "./assets/166797983_112990097549825_8782511059723083135_n.webp"
import { PagePreview } from "../components/PagePreview";
import { CaixaFaleConosco, CaixaRecursosTextParte2, ContainerCaixaFaleConosco, ContainerCaixaFeedback, ContainerFeedbackCaixa, ContainerImagem, ContainerSectionSobre, ContainerSobre, ContainerSobreCaixa, ContainerSobreLeft, ContainerSobreRight, ContainerText, ContainerTextSobre, ContentImage, ContentText, FeedbackCliente, Imagem2, ImagemCaixa, ImagemDupla, Nome, TituloFeedbackCliente } from "./styled";

function Sobre () {
  return (
    <>
      <Navbar />

      <PagePreview />

      <ContainerSectionSobre>
        <ContainerSobre>
          <ContainerSobreLeft>
            <ContainerImagem>

              <ImagemDupla>
                <img src={Image1} alt="" />
              </ImagemDupla>
              <div>
                <Imagem2 src={Image2} alt="" />
              </div>
            </ContainerImagem>
          </ContainerSobreLeft>
          <ContainerSobreRight>
            <ContainerTextSobre>
              <ContainerText>
                <h1>O nosso negócio é ajudar a potencializar o seu!</h1>
                <p>Desde 2017 inovando e entregando novos produtos e serviços para uma gestão eficiente de clínicas e consultórios.</p>
              </ContainerText>
              <ContainerSobreCaixa>
                {/* <i className="iconsmind-Target iconsmind-Seo-Icons"></i> */}
                <h3>Missão</h3>
                <p>Desde 2017 inovando e entregando novos produtos e serviços para uma gestão eficiente de
                  clínicas
                  e consultórios.</p>
              </ContainerSobreCaixa>
              <ContainerSobreCaixa>
                <h3>Visão</h3>
                <p>Ser o melhor software de gestão e atendimento a pacientes do Brasil, proporcionando segurança e praticidade no dia a dia.</p>
              </ContainerSobreCaixa>
              <ContainerSobreCaixa>
                <h3>Valores</h3>
                <p>Integridade, Honestidade, Respeito, Responsabilidade e Paixão.</p>
              </ContainerSobreCaixa>
            </ContainerTextSobre>
          </ContainerSobreRight>

        </ContainerSobre>
        <FeedbackCliente>
          <TituloFeedbackCliente>
            <h1>O que nossos clientes dizem é importante para nós</h1>
            <h6>Somos apaixonados por tecnologia, então sempre estaremos desenvolvendo uma solução única para o seu negócio.</h6>
          </TituloFeedbackCliente>
          <ContainerCaixaFeedback>
            <ContainerFeedbackCaixa>
              <ContentImage>
                <ImagemCaixa>
                  <img src={Image3} alt="" />
                </ImagemCaixa>

                <ContentText>
                  <div>
                    <p>
                      O Stenci é parte fundamental das nossas clínicas. Ágil e completo, auxilia no atendimento de ponta a ponta!🏆
                    </p>
                  </div>

                  <div>
                    <Nome>Dr. André Bernardi</Nome>
                    <span>Médico Cardiologista</span>
                  </div>

                </ContentText>
              </ContentImage>

            </ContainerFeedbackCaixa>
            <ContainerFeedbackCaixa>
              <ContentImage>
                <ImagemCaixa>
                  <img src={Image4} alt="" />
                </ImagemCaixa>
                <ContentText>
                  <div>
                    <p>O Stenci é um sistema seguro, ágil e completo. Estamos com eles desde 2018
                      nas 3
                      unidades.
                      Estamos muito satisfeitos com o Stenci!😃 </p>
                  </div>
                  <div>
                    <Nome>Sandra Ruhmke</Nome>
                    <span>Gerente Policlínica Dr. Luiz Mansur</span>
                  </div>

                </ContentText>
              </ContentImage>
            </ContainerFeedbackCaixa>
            <ContainerFeedbackCaixa>
              <ContentImage>
                <ImagemCaixa>
                  <img src={Image5} alt="" />
                </ImagemCaixa>
                <ContentText>
                  <div>
                    <p>Trabalhamos com o Stenci desde 2018, desde então as atualizações sempre trazendo melhorias e novidades que toram o sistema excelente em ferramenta de trabalho e o suporte contínuo faz toda a diferença!🙌 </p>
                  </div>
                  <div> <Nome> Angela</Nome>
                    <span>Gerente InstitutoCardio</span>
                  </div>

                </ContentText>
              </ContentImage>
            </ContainerFeedbackCaixa>
          </ContainerCaixaFeedback>
        </FeedbackCliente>
      </ContainerSectionSobre>

      <ContainerCaixaFaleConosco>
        <CaixaFaleConosco>
          <CaixaRecursosTextParte2>
            <h1>Agende um horário conosco para discutir seus objetivos e necessidades</h1>
            <button className="fale-conosco">Fale conosco</button>
          </CaixaRecursosTextParte2>
        </CaixaFaleConosco>
      </ContainerCaixaFaleConosco>
    </>
  )
}
export default Sobre;
