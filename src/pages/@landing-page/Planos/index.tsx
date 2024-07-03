// import Navbar from "../../../components/Navbar";
// import { PagePreview } from "../components/PagePreview";
import { BannerPrice, BtnSelect, Container, Content, Features, HighLight, Price, PricingCard, PricingContainer } from "./styled";

function Planos () {
  return (
    <Container>
      <Content>
        {/* <Navbar /> */}

        {/* <PagePreview title="Planos" description="Veja nossos planos e preços!" /> */}
        <BannerPrice>
          <div>
            <p>Os planos ideias para cada tipo de empresa!</p>
          </div>
        </BannerPrice>
        <PricingContainer>
          <PricingCard>
            <h2>Plano Básico</h2>
            <HighLight>Ideal para iniciantes</HighLight>
            <Price>$19.99/mês</Price>
            <Features>
              <li>Recursos básicos</li>
              <li>Atendimento ao cliente padrão</li>
              <li>Armazenamento limitado</li>
            </Features>
            <BtnSelect>Selecionar</BtnSelect>
          </PricingCard>
          <PricingCard className="recommended">
            <h2>Plano Premium</h2>
            <HighLight>Nosso melhor valor</HighLight>
            <Price>$49.99/mês</Price>
            <Features>
              <li>Recursos avançados</li>
              <li>Atendimento ao cliente prioritário</li>
              <li>Armazenamento ilimitado</li>
            </Features>
            <BtnSelect>Selecionar</BtnSelect>
          </PricingCard>
          <PricingCard>
            <h2>Plano Empresarial</h2>
            <HighLight>Para empresas em crescimento</HighLight>
            <Price>$99.99/mês</Price>
            <Features>
              <li>Todos os recursos</li>
              <li>Suporte personalizado</li>
              <li>Armazenamento ilimitado</li>
            </Features>
            <BtnSelect>Selecionar</BtnSelect>
          </PricingCard>
        </PricingContainer>
      </Content>
    </Container>
  )
}
export default Planos;
