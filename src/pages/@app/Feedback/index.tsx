import '@radix-ui/themes/styles.css';
import { Container, Content, ListCards } from './styled';
import CardFeedback from '../../../components/CardFeedback';
import { RouterIndicator } from '../../../components/RouterIndicator';

function Feedback () {
  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="Listagem de atendimentos"
        routerText="Atendimentos"
      >
        <Content>
          <ListCards>
            <CardFeedback />
            <CardFeedback />
            <CardFeedback />
            <CardFeedback />
          </ListCards>
        </Content>
      </RouterIndicator>
    </Container>
  );
}

export default Feedback;
