import { RouterIndicator } from "../../../components/RouterIndicator";
import ModalCalendar from "./Modal/ModalCalendar";
import { Container, Content } from "./styled";
import CalendarFull from "./CalendarFull";


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
          {/* <CalendarioPro /> */}
          <CalendarFull />
        </Content>
      </RouterIndicator >
    </Container>

  )
}
