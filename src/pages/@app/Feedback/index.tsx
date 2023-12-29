import '@radix-ui/themes/styles.css';
import { Container, Content, ListCards } from './styled';
import CardFeedback from '../../../components/CardFeedback';

function Feedback() {
  return (
    <>
      <Container>
        <Content>
          <ListCards>
            <CardFeedback/>
            <CardFeedback/>
            <CardFeedback/>
            <CardFeedback/>
          </ListCards>
        </Content>
      </Container>
    </>
  );
}

export default Feedback;
