import ServiceCard from "../ServiceCard";
import Title from "../Title";
import { CardsContainer, Container, Content } from "./styled";
import screenTelaAdm from './../../assets/screenAdm.png'

function BoxCardsServices() {
  return (
    <Container>
      <Content>
        <Title
          title={"Novo plano empresarial a vista!."}
          description="Tenha não apenas uma gestão de processos e organização, mas também uma gestão financeira da sua empresa."
        />
        <CardsContainer>
          <ServiceCard
            img={screenTelaAdm}
            link="/"
            title="Contas a Pagar/Receber:"
            description="astreie despesas e receitas para manter controle financeiro."
          />
          
          <ServiceCard
            img={screenTelaAdm}
            link="/"
            title="Gestão de Pagamentos:"
            description="Calcule e registre pagamentos para cuidadores com facilidade."
          />

          <ServiceCard
            img={screenTelaAdm}
            link="/"
            title="Controle de Faturamento:"
            description="Gere faturas detalhadas para clientes e convênios."
          />

          <ServiceCard
            img={screenTelaAdm}
            link="/"
            title="Relatórios Financeiros:"
            description="Obtenha insights financeiros com demonstrações e balanços."
          />
        </CardsContainer>
      </Content>
    </Container>
  );
}
export default BoxCardsServices;
