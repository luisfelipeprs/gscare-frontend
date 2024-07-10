import { Container, ContainerForm, Content, HeaderForm } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authenticateAdmin } from "../../../controllers/login-admin";

const loginAdminFormSchema = z.object({
  email:
    z.string()
      .min(1, 'O campo email não pode ser nulo ou vazio.')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
  password:
    z.string()
      .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})

type LoginAttendatFormData = z.infer<typeof loginAdminFormSchema>

export function LoginAdmin () {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginAttendatFormData>({
    resolver: zodResolver(loginAdminFormSchema)
  });

  const goBackToPreviousScreen = () => {
    navigate(-1);
  };

  function handleSubmitData ({ email, password }: LoginAttendatFormData) {
    const AuthData = authenticateAdmin({ email, password })
    console.log("dados auth: ", AuthData)
    // raphael.rrj@gmail.com
    // 77565778R@p
  }

  return (
    <Container>
      <Content>
        <HeaderForm>
          <button className="btn-top-left">
            <CaretLeft size={32} color="#777777" weight="light" onClick={goBackToPreviousScreen} />
            <span>Voltar</span>
          </button>
        </HeaderForm>

        <ContainerForm>
          {/* <header className="header">
            <img src={logoImg} width='100px' alt="Workflow" className="logoImg" />
            <p>Acesso Administrativo</p>
          </header> */}

          <form onSubmit={handleSubmit(handleSubmitData)}>
            <div className="inputContainer">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                {...register('email')}
                id="email"
                placeholder="johndoe@gmail.com"
              // onChange={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button className="button"
            // onClick={handleSignIn}
            >
              Entrar
            </button>
            <div className="footer">
              <p>Você não tem uma conta?</p>
              <Link to="/register">Crie a sua conta aqui</Link>
            </div>
            <div className="footer">
              <Link to="/forgot-password">Esqueceu sua senha ?</Link>
              <Link to="/login">Acesso de Atendente</Link>
            </div>
          </form>
        </ContainerForm>
      </Content>
    </Container>
  )
}
