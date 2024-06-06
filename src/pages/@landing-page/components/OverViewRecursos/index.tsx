import { Alarm, Check, ThumbsUp, TrendUp, Warning } from "phosphor-react"
import { BtnRecursos, Container, ContainerDivMed, ContainerDivMed2, Content, DivContainerDivMed, DivContainerListaComfirma, DivMed, Functionalities, OpcoesMedicamento, SvgDivMed } from "./styled"

export const OverViewRecursos = () => {
  return (
    <Container>
      <Content>
        <OpcoesMedicamento>
          <DivContainerListaComfirma>
            <h2>Porque escolher-nos ?</h2>
            <h6>Comece a utilizar o sistema hoje mesmo e tenha o controle da sua clínica
              de onde
              estiver. Alguns dos
              recursos:</h6>
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
            </Functionalities>


            {/* <ListaConfirma>
              <li><Check size={24} /><p>Confirmação por WhatsApp</p></li>
              <li><Check size={24} /><p>Agendamento online para os pacientes</p></li>
              <li><Check size={24} /><p>Entrega de laudos online</p></li>
              <li><Check size={24} /><p>Assinatura digital</p></li>
              <li><Check size={24} /><p>Gestão financeira e faturamento TISS</p></li>
              <li><Check size={24} /><p>Prontuários personaliza dos</p></li>
              <li><Check size={24} /><p>Aplicativo para os profissionais</p></li>
              <li><Check size={24} /><p>Painel de chamadas</p></li>
            </ListaConfirma> */}
            <BtnRecursos>Conheça mais recursos</BtnRecursos>
          </DivContainerListaComfirma>

          <DivContainerDivMed>
            <ContainerDivMed>
              <DivMed>
                <SvgDivMed>
                  <ThumbsUp size={32} color="#ffffff" weight="fill" />
                </SvgDivMed>
                <h4>Laudos online</h4>
                <p>Possibilite a retirada dos laudos de forma online para dar mais comodidade
                  aos
                  pacientes</p>
              </DivMed>

              <DivMed>

                <SvgDivMed>
                  <Alarm size={32} color="#ffffff" weight="fill" />
                </SvgDivMed>
                <h4>Medicina</h4>
                <p>Gere atestados de saúde ocupacional (ASO) integrado ao e-Social testeteste testeteste</p>
              </DivMed>
            </ContainerDivMed>
            <ContainerDivMed2>

              <DivMed>
                <SvgDivMed>
                  <TrendUp size={32} color="#ffffff" weight="fill" />
                </SvgDivMed>
                <h4>Confirmação</h4>
                <p>Realize a confirmação de suas agendas por WhatsApp e mantenha um contato mais próximo com
                  o
                  paciente</p>

              </DivMed>
              <DivMed>
                <SvgDivMed>
                  <Warning size={32} color="#ffffff" weight="fill" />
                </SvgDivMed>
                <h4>Call center</h4>
                <p>Recurso exclusivo para marcação de consultas e exames na sua central de agendamentos</p>
              </DivMed>
            </ContainerDivMed2>


          </DivContainerDivMed>

        </OpcoesMedicamento>
      </Content>
    </Container>
  )
}
