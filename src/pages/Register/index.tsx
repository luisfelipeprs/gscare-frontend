import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Container } from "./styled";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignOut() {
    console.log(email, name, password, confirmPassword);
  }

  return (
    <Container>
      <div className="container">
        <header className="header">
          <img src={logoImg} alt="Workflow" className="logoImg" />
          <span>Por favor digite suas informações de cadastro</span>
        </header>

        <form>
          <div className="inputContainer">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Home Care Ti"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="homecareti@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="inputContainer">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********************"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button onClick={handleSignOut} className="button">
            Cadastrar
          </button>
          <div className="footer">
            <p>Você já tem uma conta?</p>
            <Link to="/login">Acesse sua conta aqui</Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Register;