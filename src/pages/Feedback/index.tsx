import '@radix-ui/themes/styles.css';
import { Container, Content } from './styled';
import CardFeedback from '../../components/CardFeedback';

function Feedback() {
  return (
    <>
      <Container>
        <Content>
          <CardFeedback/>
          <CardFeedback/>
          <CardFeedback/>
        </Content>
      </Container>
    </>
  );
}

export default Feedback;
