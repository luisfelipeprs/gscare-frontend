import {
  Container,
  Content,
  BannerPrice,
  PricingContainer,
  PricingCard,
  RecommendedTag,
  HighLight,
  Price,
  Features,
  BtnSelect
} from "./styled";

function Planos () {
  return (
    <Container>
      <Content>
        <BannerPrice>
          <div>
            <p>Os planos ideais para cada tipo de empresa!</p>
          </div>
        </BannerPrice>
        <PricingContainer>
          <PricingCard>
            <h2>Plano Básico</h2>
            <HighLight>Ideal para iniciantes</HighLight>
            <Price>R$157,90/mês</Price>
            <Features>
              <li>Acesso aos recursos básicos</li>
              <li>Atendimento ao cliente padrão</li>
              <li>Armazenamento limitado</li>
            </Features>
            <BtnSelect>Selecionar</BtnSelect>
          </PricingCard>
          <PricingCard className="recommended">
            <RecommendedTag>Recomendado</RecommendedTag>
            <h2>Plano Premium</h2>
            <HighLight>Nosso melhor valor</HighLight>
            <Price emphasis>R$257,90/mês</Price>
            <Features>
              <li>Acesso a todos os recursos</li>
              <li>Atendimento ao cliente prioritário</li>
              <li>Armazenamento ilimitado</li>
            </Features>
            <BtnSelect>Selecionar</BtnSelect>
          </PricingCard>
          <PricingCard>
            <h2>Plano Empresarial</h2>
            <HighLight>Para empresas em crescimento</HighLight>
            <Price>R$327,90/mês</Price>
            <Features>
              <li>Todos os recursos avançados</li>
              <li>Suporte personalizado</li>
              <li>Armazenamento ilimitado</li>
            </Features>
            <BtnSelect>Selecionar</BtnSelect>
          </PricingCard>
        </PricingContainer>
      </Content>
    </Container>
  );
}

export default Planos;
