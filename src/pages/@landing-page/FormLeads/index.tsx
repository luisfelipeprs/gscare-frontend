import ModalStep from "./modal/modal-components";
import { Container, Content } from "./styled";

function FormLeads() {
  return (
    <Container>
      <ModalStep />
        <Content>
          <h1 className="titulo">
            Experimente nossa solução completa de CRM e vendas, grátis por 30
            dias.
          </h1>
          <h2 className="subTitulo">
            Com o Sales Cloud Professional Edition, você tem acesso a:
          </h2>
          <ul className="listContent">
            <li>
              Dados pré-carregados e recursos para integrar os dados da sua
              empresa;
            </li>
            <li>Processos, relatórios e dashboards pré-configurados;</li>
            <li>
              Experiências guiadas para representantes, líderes e gestores de
              vendas;
            </li>
            <li>Guias e outros materiais sobre boas práticas de vendas;</li>
            <li>Onboarding integrado, treinamentos e webinars online;</li>
            <li>Configuração de pontuação e roteamento de leads;</li>
            <li>Ferramentas para automação de tarefas recorrentes;</li>
            <li>
              Uma visão completa da performance de seus representantes e equipes
              de vendas.
            </li>
          </ul>

          <p>
            <b>Dúvidas?</b> Entre em contato e fale com um de nossos
            especialistas: <b>0800 891 1887</b>
          </p>

        <div className="formulario">
          <p>
            <b>Inscreva-se para começar sua avaliação gratuita.</b>
          </p>
          <p>
            Preencha o formulário abaixo e em breve entraremos em contato sobre
            seu teste gratuito.
          </p>

          <div className="input">
            <div className="nomeSobrenome">
              <div className="nome">
                <label htmlFor="fname">
                  <input type="text" id="fname" placeholder="Nome" />
                </label>
              </div>

              <div className="nome">
                <label htmlFor="lname">
                  <input type="text" id="lname" placeholder="Sobrenome" />
                </label>
              </div>
            </div>

            <div className="cadastro">
              <div className="inputs">
                <label>
                  <input type="text" id="empresa" placeholder="Empresa" />
                </label>
              </div>

              <div className="inputs">
                <label>
                  <input
                    type="email"
                    id="emailC"
                    placeholder="Email Corporativo"
                  />
                </label>
              </div>

              <div className="inputs">
                <label>
                  <input type="password" id="pwd" placeholder="Senha" />
                </label>
              </div>

              <div className="inputs">
                <label htmlFor="phone">
                  <input type="tel" id="phone" placeholder="Número" />
                </label>
              </div>

              <div className="check">
                <label className="inlineFlex">
                  <input type="checkbox" id="checkBox" />
                  Estou de acordo com o{" "} 
                  <a href="#" target="_blank">
                    Main Services Agreement.
                  </a>
                </label>
              </div>
            </div>
          </div>

          <div className="footer">
            <p>
              Sua avaliação gratuita pode ser provisionada ou migrada para o
              Hyperforce, a infraestrutura de nuvem pública do Salesforce.
            </p>
            <p>
              Ao inscrever-se, você confirma que concorda com o processamento de
              seus dados pessoais pela Salesforce, conforme descrito na  
              <a href="#" target="_blank">
                Declaração de privacidade.
              </a>
            </p>
          </div>

          <button className="button">INICIAR TESTE GRATUITO</button>
        </div>
        </Content>
    </Container>
    )
}
export default FormLeads;