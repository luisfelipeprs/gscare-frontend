import { Container, Content } from "./styled";
import logoImg from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CaretLeft, House } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { authenticateUser } from "../../../controllers/login";


const loginAttendantFormSchema = z.object({
  token:
    z.string()
      .min(1, 'O campo token não pode ser nulo ou vazio.'),
  email:
    z.string()
      .min(1, 'O campo email não pode ser nulo ou vazio.')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
  password:
    z.string()
      .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})

type LoginAttendatFormData = z.infer<typeof loginAttendantFormSchema>

export function Login () {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginAttendatFormData>({
    resolver: zodResolver(loginAttendantFormSchema)
  });

  const goBackToPreviousScreen = () => {
    navigate(-1);
  };

  const goBackToHome = () => {
    navigate('/')
  };

  // function handleSubmitData ({ token, email, password }: LoginAttendatFormData) {
  function handleSubmitData () {
    // authenticateUser({ token, email, password })
    // 64bfed1ee252092818948502
    // feh@gmail.com
    // Feh12345
    navigate('/admin')
  }


  return (
    <Container>
      <Content>
        <button className="btn-top-left">
          <House size={26} color="#000000" weight="thin" onClick={goBackToHome} />
        </button>

        <div className="container">
          <header className="header">
            <img src={logoImg} width='100px' alt="Workflow" className="logoImg" />
            <p>Acesso Atendente</p>
          </header>

          <form onSubmit={handleSubmit(handleSubmitData)}>
            <div className="inputContainer">
              <label htmlFor="token">Token</label>
              <input
                type="text"
                {...register('token')}
                id="token"
                placeholder="Token de acesso"
              />
              {errors.token && <span>{errors.token.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                {...register('email')}
                id="email"
                placeholder="johndoe@gmail.com"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                {...register('password')}
                id="password"
                placeholder="********************"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button className="button"
              onClick={handleSubmitData}
            >
              Entrar
            </button>
            <div className="footer">
              <p>Você não tem uma conta?</p>
              <Link to="/register">Crie a sua conta aqui</Link>
            </div>
            <div className="footer">
              <Link to="/forgot-password">Esqueceu sua senha ?</Link>
              <Link to="/login-admin">Acesso Administrativo</Link>
            </div>
          </form>
        </div>
      </Content>
    </Container>
  )
}

// 64bfed1ee252092818948502
// feh@gmail.com
// Feh12345
