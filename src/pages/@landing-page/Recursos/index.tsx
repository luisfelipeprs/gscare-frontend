import Navbar from "../../../components/Navbar";
import Image from './assets/Agenda-1.webp'
import Image2 from "./assets/PEP.webp"
import Image3 from "./assets/Faturamento.webp"
import Image4 from "./assets/Financeiro.webp"
import Image5 from "./assets/Dashboard.png"
import { PagePreview } from "../components/PagePreview";
import { ContainerImageContentDemostrationSistem, ContainerRecursos, ContentDemostrationSistem, ListFuncionalidadesContentDemostrationSistem, ListaContentDemostrationSistem, NavContainerRecursos, ContentDemostrationSistemLeft, ContentDemostrationSistemRight, TextParagrafoContentDemostrationSistem, TextFaleConosco } from "./styled";

function Recursos () {
  return (
    <>
      <Navbar />

      <PagePreview title="Recursos" description="Veja nossos principais recursos!" />


      <ContainerRecursos>
        <NavContainerRecursos>
          <ul>
            <a href="">Atendimento</a>
            <a href="">Prontuario</a>
            <a href="">laudo</a>
            <a href="">faturamento</a>
            <a href="">Financiamento</a>
            <a href="">Outros recursos</a>
          </ul>
        </NavContainerRecursos>

        <ContentDemostrationSistem>
          <ContentDemostrationSistemLeft>
            <TextParagrafoContentDemostrationSistem>
              <h3>Atendimento</h3>
              <p>Uma agenda prática para a demanda do dia a dia</p>
            </TextParagrafoContentDemostrationSistem>

            <ListFuncionalidadesContentDemostrationSistem>
              <ListaContentDemostrationSistem>
                <li>Agenda prática e inteligente</li>
                <li>Confirmação por WhatsApp</li>
                <li>Agendamento online para os pacientes</li>
                <li>Organização de lista de espera</li>
                <li>Central de agendamentos (Call center)</li>
                <li>Alteração em massa</li>
                <li>Escalas de atendimento</li>
                <li>Controle de contas faturas</li>
              </ListaContentDemostrationSistem>
            </ListFuncionalidadesContentDemostrationSistem>
          </ContentDemostrationSistemLeft>

          <ContentDemostrationSistemRight>
            <ContainerImageContentDemostrationSistem>
              <img src={Image} alt="" />
            </ContainerImageContentDemostrationSistem>
          </ContentDemostrationSistemRight>
        </ContentDemostrationSistem>

        <ContentDemostrationSistem>
          <ContentDemostrationSistemRight>
            <ContainerImageContentDemostrationSistem>
              <img src={Image} alt="" />
            </ContainerImageContentDemostrationSistem>
          </ContentDemostrationSistemRight>

          <ContentDemostrationSistemLeft>
            <TextParagrafoContentDemostrationSistem>
              <h3>Prontuario</h3>
              <p>Prontuário personalizado com assinatura digital</p>
            </TextParagrafoContentDemostrationSistem>
            <ListFuncionalidadesContentDemostrationSistem>
              <ListaContentDemostrationSistem>
                <li>Prontuário multi especialidades</li>
                <li>Assinatura digital</li>
                <li>Solicitação de exames</li>
                <li>Solicitação de internação</li>
                <li>Solicitação de OPME</li>
                <li>Receituário de medicamentos com bulário</li>
                <li>Laudos, atestados e outros</li>
                <li>Acesso fácil aos históricos</li>
              </ListaContentDemostrationSistem>
            </ListFuncionalidadesContentDemostrationSistem>


          </ContentDemostrationSistemLeft>
        </ContentDemostrationSistem>

        <ContentDemostrationSistem>
          <ContentDemostrationSistemLeft>
            <TextParagrafoContentDemostrationSistem>
              <h3>Laudo</h3>
              <p>Central de laudos com PACS e DICOM</p>
            </TextParagrafoContentDemostrationSistem>

            <ListFuncionalidadesContentDemostrationSistem>
              <ListaContentDemostrationSistem>
                <li>Produza laudos com reconhecimento de voz</li>
                <li>Histórico de exames anteriores do paciente</li>
                <li>Organização da fila de trabalho</li>
                <li>Acesso as imagens do PACS Web ou Desktop</li>
                <li>Armazenamento dos exames em nuvem</li>
                <li>Worklist via protocolo HL7</li>
                <li>Imagens e laudo online, para acesso de médicos e pacientes</li>
                <li>Manipulação das imagens</li>
              </ListaContentDemostrationSistem>
            </ListFuncionalidadesContentDemostrationSistem>
          </ContentDemostrationSistemLeft>

          <ContentDemostrationSistemRight>
            <ContainerImageContentDemostrationSistem>
              <img src={Image2} alt="" />
            </ContainerImageContentDemostrationSistem>
          </ContentDemostrationSistemRight>
        </ContentDemostrationSistem>

        <ContentDemostrationSistem>
          <ContentDemostrationSistemRight>
            <ContainerImageContentDemostrationSistem>
              <img src={Image3} alt="" />
            </ContainerImageContentDemostrationSistem>
          </ContentDemostrationSistemRight>

          <ContentDemostrationSistemLeft>
            <TextParagrafoContentDemostrationSistem>
              <h3>faturamento</h3>
              <p>Prontuário personalizado com assinatura digital</p>
            </TextParagrafoContentDemostrationSistem>
            <ListFuncionalidadesContentDemostrationSistem>
              <ListaContentDemostrationSistem>
                <li>Prontuário multi especialidades</li>
                <li>Assinatura digital</li>
                <li>Solicitação de exames</li>
                <li>Solicitação de internação</li>
                <li>Solicitação de OPME</li>
                <li>Receituário de medicamentos com bulário</li>
                <li>Laudos, atestados e outros</li>
                <li>Acesso fácil aos históricos</li>
              </ListaContentDemostrationSistem>
            </ListFuncionalidadesContentDemostrationSistem>
          </ContentDemostrationSistemLeft>
        </ContentDemostrationSistem>

        <ContentDemostrationSistem>
          <ContentDemostrationSistemLeft>
            <TextParagrafoContentDemostrationSistem>
              <h3>financeiro</h3>
              <p>Controle as suas receitas e despesas de onde estiver</p>
            </TextParagrafoContentDemostrationSistem>

            <ListFuncionalidadesContentDemostrationSistem>
              <ListaContentDemostrationSistem>
                <li>Controle de caixa</li>
                <li>Orçamentos dos serviços</li>
                <li>Contas a pagar e a receber</li>
                <li>Extrato de contas e conciliação bancária</li>
                <li>Fluxo de caixa</li>
                <li>Centro de custo, DRE e DRF</li>
                <li>Gerenciamento de cartões</li>
                <li>Controle de contas bancárias</li>
              </ListaContentDemostrationSistem>
            </ListFuncionalidadesContentDemostrationSistem>
          </ContentDemostrationSistemLeft>

          <ContentDemostrationSistemRight>
            <ContainerImageContentDemostrationSistem>
              <img src={Image4} alt="" />
            </ContainerImageContentDemostrationSistem>
          </ContentDemostrationSistemRight>
        </ContentDemostrationSistem>

        <ContentDemostrationSistem>
          <ContentDemostrationSistemRight>
            <ContainerImageContentDemostrationSistem>
              <img src={Image5} alt="" />
            </ContainerImageContentDemostrationSistem>
          </ContentDemostrationSistemRight>

          <ContentDemostrationSistemLeft>
            <TextParagrafoContentDemostrationSistem>
              <h3>Outros recursos</h3>
              <p>Muitos outro recursos para sua clínica</p>
            </TextParagrafoContentDemostrationSistem>
            <ListFuncionalidadesContentDemostrationSistem>
              <ListaContentDemostrationSistem>
                <li>Painel de chamadas</li>
                <li>Aplicativo para o profissional</li>
                <li>Medicina do trabalho</li>
                <li>Controle de Estoque</li>
                <li>Recurso de encaminhamento</li>
                <li>Agenda telefônica</li>
              </ListaContentDemostrationSistem>
            </ListFuncionalidadesContentDemostrationSistem>

          </ContentDemostrationSistemLeft>
        </ContentDemostrationSistem>

        <TextFaleConosco>
          <h1>Criamos um sistema simples,completo e incrível</h1>
          <p>O nosso negócio é ajudar a potencializar o seu!<br />
            Agende uma reunião conosco para discutir seus objetivos e necessidades.</p>
          <input type="button" value="Fale conosco" className="button-fale-conosco" />
        </TextFaleConosco>
      </ContainerRecursos>
    </>
  )
}
export default Recursos;
