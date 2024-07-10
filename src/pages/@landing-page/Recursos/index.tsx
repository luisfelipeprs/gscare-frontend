import { useState } from "react";
import styled from "styled-components";
import imageTool1 from "./../../../assets/images-tools-saas/tools1.png";
import imageTool2 from "./../../../assets/images-tools-saas/tools2.png";
import imageTool3 from "./../../../assets/images-tools-saas/tools3.png";
import imageTool4 from "./../../../assets/images-tools-saas/tools4.png";
import imageTool5 from "./../../../assets/images-tools-saas/tools5.png";
import imageTool6 from "./../../../assets/images-tools-saas/tools6.png";
import {
  ContainerImageContentDemostrationSistem,
  ContainerRecursos,
  ContentDemostrationSistem,
  ListFuncionalidadesContentDemostrationSistem,
  ListaContentDemostrationSistem,
  NavContainerRecursos,
  ContentDemostrationSistemLeft,
  ContentDemostrationSistemRight,
  TextParagrafoContentDemostrationSistem,
  Container,
  Content,
  NavItem,
} from "./styled";

const Recursos = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleShowLink = () => {
    if (showAll == false) {
      setShowAll(!showAll);
    }
  };

  return (
    <Container>
      <Content>
        <NavContainerRecursos>
          <ul>
            <li>
              <NavItem to="#recursos-one">Atendimento</NavItem>
            </li>
            <li>
              <NavItem to="#recursos-two">Prontuário</NavItem>
            </li>
            <li>
              <NavItem onClick={toggleShowLink} to="#recursos-three">Laudo</NavItem>
            </li>
            <li>
              <NavItem onClick={toggleShowLink} to="#recursos-four">Faturamento</NavItem>
            </li>
            <li>
              <NavItem onClick={toggleShowLink} to="#recursos-five">Financiamento</NavItem>
            </li>
            <li>
              <NavItem onClick={toggleShowLink} to="#recursos-six">Outros recursos</NavItem>
            </li>
          </ul>
        </NavContainerRecursos>

        <ContainerRecursos>
          <ContentDemostrationSistem id="recursos-one">
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
                <img src={imageTool1} alt="" />
              </ContainerImageContentDemostrationSistem>
            </ContentDemostrationSistemRight>
          </ContentDemostrationSistem>

          <ContentDemostrationSistem id="recursos-two">
            <ContentDemostrationSistemRight>
              <ContainerImageContentDemostrationSistem>
                <img src={imageTool2} alt="" />
              </ContainerImageContentDemostrationSistem>
            </ContentDemostrationSistemRight>

            <ContentDemostrationSistemLeft>
              <TextParagrafoContentDemostrationSistem>
                <h3>Prontuário</h3>
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

          {showAll && (
            <>
              <ContentDemostrationSistem id="recursos-three">
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
                    <img src={imageTool3} alt="" />
                  </ContainerImageContentDemostrationSistem>
                </ContentDemostrationSistemRight>
              </ContentDemostrationSistem>

              <ContentDemostrationSistem id="recursos-four">
                <ContentDemostrationSistemRight>
                  <ContainerImageContentDemostrationSistem>
                    <img src={imageTool4} alt="" />
                  </ContainerImageContentDemostrationSistem>
                </ContentDemostrationSistemRight>

                <ContentDemostrationSistemLeft>
                  <TextParagrafoContentDemostrationSistem>
                    <h3>Faturamento</h3>
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

              <ContentDemostrationSistem id="recursos-five">
                <ContentDemostrationSistemLeft>
                  <TextParagrafoContentDemostrationSistem>
                    <h3>Financeiro</h3>
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
                    <img src={imageTool5} alt="" />
                  </ContainerImageContentDemostrationSistem>
                </ContentDemostrationSistemRight>
              </ContentDemostrationSistem>

              <ContentDemostrationSistem id="recursos-six">
                <ContentDemostrationSistemRight>
                  <ContainerImageContentDemostrationSistem>
                    <img src={imageTool6} alt="" />
                  </ContainerImageContentDemostrationSistem>
                </ContentDemostrationSistemRight>

                <ContentDemostrationSistemLeft>
                  <TextParagrafoContentDemostrationSistem>
                    <h3>Outros Recursos</h3>
                    <p>Ferramentas adicionais para o seu negócio</p>
                  </TextParagrafoContentDemostrationSistem>
                  <ListFuncionalidadesContentDemostrationSistem>
                    <ListaContentDemostrationSistem>
                      <li>Cadastro de parceiros e fornecedores</li>
                      <li>Gestão de estoque e produtos</li>
                      <li>Compras e orçamentos online</li>
                      <li>Comissionamento por atendimento e vendas</li>
                      <li>Recepção e caixa integrados</li>
                      <li>Clínica mobile com todos os recursos</li>
                      <li>Controle de estoque e prazos</li>
                      <li>Gerenciamento de unidades e filiais</li>
                    </ListaContentDemostrationSistem>
                  </ListFuncionalidadesContentDemostrationSistem>
                </ContentDemostrationSistemLeft>
              </ContentDemostrationSistem>
            </>
          )}

          <ToggleShowButton onClick={toggleShowAll}>
            {showAll ? "Ver menos..." : "Ver mais..."}
          </ToggleShowButton>
        </ContainerRecursos>
      </Content>
    </Container>
  );
};

const ToggleShowButton = styled.button`
  background-color: #1E2C50;
  border-radius: 8px;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 35px auto 50px auto;
`;

export default Recursos;
