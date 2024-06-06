import { Container, Content } from "./styled";
import logoImg from "../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { password } from "../../../controllers/reset-password";


const forgotPasswordFormSchema = z.object({
  email:
    z.string()
      .min(1, 'O campo email não pode ser nulo ou vazio.')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordFormSchema>

export function ForgotPassword () {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordFormSchema)
  });

  const navigate = useNavigate();

  const goBackToPreviousScreen = () => {
    navigate(-1);
  };

  function handleSubmitData ({ email }: ForgotPasswordFormData) {
    password(email);
    // raphael.rrj@gmail.com
  }


  return (
    <Container>
      <Content>
        <button className="btn-top-left">
          <CaretLeft size={32} color="#777777" weight="light" onClick={goBackToPreviousScreen} />
        </button>

        <div className="container">
          <header className="header">
            <img src={logoImg} width='200px' alt="Workflow" className="logoImg" />
            <p>Digite o email cadastrado no sistema para recuperar sua senha</p>
          </header>

          <form onSubmit={handleSubmit(handleSubmitData)}>
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

            <button className="button"
            // onClick={handleSignIn}
            >
              Recuperar
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
