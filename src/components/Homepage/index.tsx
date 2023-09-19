import {Container, Content, Leftdiv, Rightdiv } from './styled'

export default function index() {
  return (
    <Container>
      <Content>
        <Leftdiv>
          <h1>Entregue sucesso agora com o Salesforce Customer 360.</h1>
          <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.</p>
          <div>
            <button>Faca o teste gratis</button>
            <button>Saiba mais</button>
          </div>
        </Leftdiv>
        <Rightdiv>
          <img src="https://wp.salesforce.com/pt-br/wp-content/uploads/sites/15/2022/11/homepage-success-now-fg.png" alt="home-page-image" />
        </Rightdiv>
      </Content>
    </Container>
    
  )
}
