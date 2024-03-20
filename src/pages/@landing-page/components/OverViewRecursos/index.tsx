import { BtnRecursos, Container, ContainerDivMed, ContainerDivMed2, Content, DivContainerDivMed, DivContainerListaComfirma, DivMed, ListaConfirma, OpcoesMedicamento } from "./styled"

export const OverViewRecursos = () => {
  return (
    <Container>
      <Content>
        <h1>Ferramentas simples e práticas, para sua clínica crescer de maneira organizada</h1>

        <OpcoesMedicamento>
          <DivContainerListaComfirma>
            <h2>Crie uma conta hoje mesmo e aproveite todos os recursos</h2>
            <h6>Comece a utilizar o sistema hoje mesmo e tenha o controle da sua clínica
              de onde
              estiver. Alguns dos
              recursos:</h6>


            <ListaConfirma>
              <li>Confirmação por WhatsApp</li>
              <li>Agendamento online para os pacientes</li>
              <li>Entrega de laudos online</li>
              <li>Assinatura digital</li>
              <li>Gestão financeira e faturamento TISS</li>
              <li>Prontuários personalizados</li>
              <li>Aplicativo para os profissionais</li>
              <li>Painel de chamadas</li>
            </ListaConfirma>
            <BtnRecursos>Conheça mais recursos</BtnRecursos>
          </DivContainerListaComfirma>

          <DivContainerDivMed>
            <ContainerDivMed>
              <DivMed>
                <img src="./assets/financial-icon1.webp" alt="" />
                <h4>Laudos online</h4>
                <p>Possibilite a retirada dos laudos de forma online para dar mais comodidade
                  aos
                  pacientes</p>
              </DivMed>

              <DivMed>
                <img src="./assets/financial-icon4.webp" alt="" />
                <h4>Medicina do trabalho</h4>
                <p>Gere atestados de saúde ocupacional (ASO) integrado ao e-Social</p>
              </DivMed>
            </ContainerDivMed>
            <ContainerDivMed2>

              <DivMed>

                <img src="./assets/financial-icon2.webp" alt="" />
                <h4>Confirmação por WhatsApp
                </h4>
                <p>Realize a confirmação de suas agendas por WhatsApp e mantenha um contato mais próximo com
                  o
                  paciente</p>

              </DivMed>
              <DivMed>
                <img src="./assets/financial-icon3.webp" alt="" />
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
