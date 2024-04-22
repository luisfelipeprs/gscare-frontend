import { RouterIndicator } from "../../../components/RouterIndicator";
import ModalStep from "../Employee/ModalSteps/ModalStep";
import { Container, Content } from "./styled";

const CalendarPro: React.FC = () => {
  return (

    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="listagem de funcionarios"
        routerText="Funcionarios"
        onButtonClick={ModalStep}
      >
        <Content>

        </Content>
      </RouterIndicator>
    </Container>
  );
};

export default CalendarPro;
