import ServiceCard from "../ServiceCard";
import Title from "../Title";
import { CardsContainer, Container, Content } from "./styled";

function BoxCardsServices() {
  return (
    <Container>
      <Content>
        <Title
          title={"Encontre as próximas inovações que terão em nosso sistema."}
        />
        <CardsContainer>
          <ServiceCard
            description="test"
            img="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png"
            link="/"
            title="adsdasdas"
          />
          
          <ServiceCard
            description="test"
            img="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png"
            link="/"
            title="adsdasdas"
          />

          <ServiceCard
            description="test"
            img="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png"
            link="/"
            title="adsdasdas"
          />

          <ServiceCard
            description="test"
            img="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2023/04/data-cloud-card.png"
            link="/"
            title="adsdasdas"
          />
        </CardsContainer>
      </Content>
    </Container>
  );
}
export default BoxCardsServices;
