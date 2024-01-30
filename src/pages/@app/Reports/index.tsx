import { RouterIndicator } from "../../../components/RouterIndicator";
import { Container, Content } from "./styled";

function Reports() {
  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="listagem de atendimentos"
        routerText="Atendimentos"
      >
        <Content>
          <div>
            Reports Works!
          </div>

        </Content>
      </RouterIndicator>
    </Container>
  );
}

export default Reports;