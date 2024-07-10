import Navbar from "../../../components/Navbar";
import { PagePreview } from "../components/PagePreview";
import { PerguntasFrequentes } from "../components/PerguntasFrequentes";
import { Container, Content } from "./styled";

function Contact () {
  return (

    <Container>
      <Navbar />
      <Content>

        <PagePreview />


        <PerguntasFrequentes />

        {/* <section className="formSection">
        <h2 className="TitleFormSection">VAMOS TOMAR UM CAFÉ?</h2>
        <hr className="sectionDividerForm"/>
          <p className="entreEmContatoText">entre em contato!</p>
          <div className="formContainer">
            <form>
              <div className="formRow">
                <label for="nome">Nome:</label>
                <input className="inputContactStyled" type="text" id="nome" name="nome" placeholder="Joao">
              </div>
              <div className="formRowSide">
                <div className="formColumn">
                  <label for="email">Email:</label>
                  <input className="inputContactStyled" type="email" id="email" name="email" placeholder="Joao">
                </div>
                <div className="formColumn">
                  <label for="telefone">Telefone:</label>
                  <input className="inputContactStyled" type="tel" id="telefone" name="telefone" placeholder="Joao">
                </div>
              </div>
              <div className="formRow">
                <label for="mensagem">Mensagem:</label>
                <textarea className="inputContactStyled" id="mensagem" name="mensagem" rows="4"
                  placeholder="Gostaria de saber mais sobre o sistema que vocês oferecem!"></textarea>
              </div>
              <button className="sendFormContact" type="submit">Enviar</button>
            </form>
          </div>
      </section> */}
      </Content>
    </Container>
  )
}
export default Contact;
