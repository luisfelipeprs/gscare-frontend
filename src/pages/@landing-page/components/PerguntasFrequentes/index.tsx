import { Container, ContainerButton, ContainerFormRight, ContainerInformacoesFooter, ContainerMensagem, ContainerMensagemPrincipal, ContainerMensagemPrincipalLeft, ContainerMensagemPrincipalRight, ContainerTitulos, Content, DetailsContainer } from "./styled"

export const PerguntasFrequentes = () => {
  return (

    <Container>
      <Content>


        <ContainerMensagemPrincipal>

          <ContainerMensagemPrincipalLeft>
            <ContainerTitulos>
              <h2>Perguntas frequentes</h2>
              <h6>Temos uma lista de perguntas frequentes que esperamos ajudar a tirar algumas dúvidas.</h6>
            </ContainerTitulos>

            <ContainerInformacoesFooter>
              <DetailsContainer>
                <summary>
                  <h4>Como é calculado a mensalidade?</h4>
                  <span className="arrow-details"></span>
                </summary>
                <ul>
                  <li>
                    <p>A mensalidade é cobrada com base na quantidade de usuários que irão utilizar o
                      sistema
                      diariamente. A grande vantagem neste modelo é que você poderá cadastrar todos
                      osprofissionais do corpo clínico, mesmo os profissionais que atendem poucas vezes no
                      mês, pois o que importa é o número de acessos diários.</p>
                  </li>
                </ul>

              </DetailsContainer>
              <DetailsContainer>

                <summary>
                  <h4>vocês realizam a importaçâo de outro sistema?</h4>
                  <span className="arrow-details"></span>
                </summary>
                <ul>
                  <li>
                    <p>Sim, realizamos a importação do cadastro dos pacientes, agendamentos, prontuários e
                      laudos.</p>
                  </li>

                </ul>

              </DetailsContainer>
              <DetailsContainer>

                <summary>
                  <h4>É realizado treinamento?</h4>
                  <span className="arrow-details"></span>
                </summary>
                <ul>
                  <li>
                    <p>É realizado o treinamento de toda a equipe durante o processo de implantação para que
                      todos estejam aptos a utilizar o sistema de forma segura.</p>
                  </li>
                </ul>

              </DetailsContainer>

              <DetailsContainer>
                <summary>
                  <h4>Quanto tempo demora para eu utilizar o sistema?</h4>
                  <span className="arrow-details"></span>
                </summary>
                <ul>
                  <li>
                    <p>É muito rápido. Elaboramos um cronograma de implantação e treinamentos para que tudo
                      fique bem claro para a equipe.</p>
                  </li>

                </ul>
              </DetailsContainer>
              <DetailsContainer>
                <summary>
                  <h4>vocês realizam beckup dos meus dados?</h4>
                  <span className="arrow-details"></span>
                </summary>
                <ul>
                  <li>
                    <p>Sim, o sistema realiza várias cópias de backup durante o dia.</p>
                  </li>

                </ul>
              </DetailsContainer>
            </ContainerInformacoesFooter>

          </ContainerMensagemPrincipalLeft>
          <ContainerMensagemPrincipalRight>
            <ContainerFormRight>
              <ContainerMensagem>
                <h4>Adorariamos falar com você</h4>
                <h6>Envie-nos uma mensagem que um de nossos especialistas entrará em contato</h6>
              </ContainerMensagem>
              <input type="text" placeholder="Informe seu nome" />
              <input type="tel" placeholder="Informe seu celular" />
              <textarea rows={10} placeholder="Olá, gostaria de saber mais sobre o sistema da Gscare." />
              <ContainerButton>
                <button>Enviar</button>
              </ContainerButton>
            </ContainerFormRight>
          </ContainerMensagemPrincipalRight>

        </ContainerMensagemPrincipal>
      </Content>
    </Container>
  )
}
