import { RouterIndicator } from "../../../components/RouterIndicator";
import CalendarioPro from "./CalendarioPro";
import ModalCalendar from "./Modal/ModalCalendar";
import { Container, Content } from "./styled";


export function Calendar () {
  return (

    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="Gerenciamento de calendário"
        routerText="Calendário"
        onButtonClick={ModalCalendar}
      >
        <Content>
          <CalendarioPro />
        </Content>
      </RouterIndicator >
    </Container>

  )
}
