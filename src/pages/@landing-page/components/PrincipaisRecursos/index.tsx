import { Container, ContainerColumn, ContainerRow, ContainersRecursos, Content, PrincipaisRecursosContainer } from "./styled.ts"

export const PrincipaisRecursos = () => {
  return (

    <Container>
      <Content>
        <PrincipaisRecursosContainer>
          <div>
            <h2>Principais recursos</h2>
            <h6>Hoje a Stenci conta com inúmeros recursos para auxiliar sua clínica nas tarefas do dia a dia.
              Listamos
              alguns deles.</h6>
          </div>
          <ContainerColumn>
            <ContainerRow>
              <ContainersRecursos>
                <h5>Agenda</h5>
                <p>
                  Confirmação por WhatsApp
                  Lista de espera
                  Agendamento online para os paciente
                  Central de agendamentos (Call center)
                </p>
              </ContainersRecursos>
              <ContainersRecursos>
                <h5>Prontuário</h5>
                <p>
                  Confirmação por WhatsApp
                  Lista de espera
                  Agendamento online para os paciente
                  Central de agendamentos (Call center)
                </p>
              </ContainersRecursos>
              <ContainersRecursos>
                <h5>Laudo</h5>
                <p>
                  Confirmação por WhatsApp
                  Lista de espera
                  Agendamento online para os paciente
                  Central de agendamentos (Call center)
                </p>
              </ContainersRecursos>
            </ContainerRow>
            <ContainerRow>
              <ContainersRecursos>
                <h5>Faturamento</h5>
                <p>
                  Confirmação por WhatsApp
                  Lista de espera
                  Agendamento online para os paciente
                  Central de agendamentos (Call center)
                </p>
              </ContainersRecursos>
              <ContainersRecursos>
                <h5>
                  Financeiro
                </h5>
                <p>
                  Confirmação por WhatsApp
                  Lista de espera
                  Agendamento online para os paciente
                  Central de agendamentos (Call center)
                </p>
              </ContainersRecursos>
              <ContainersRecursos>
                <h5>Outros</h5>
                <p>
                  Confirmação por WhatsApp
                  Lista de espera
                  Agendamento online para os paciente
                  Central de agendamentos (Call center)
                </p>
              </ContainersRecursos>
            </ContainerRow>

          </ContainerColumn>
        </PrincipaisRecursosContainer>
      </Content>
    </Container>
  )
}
