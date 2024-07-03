import React from 'react';
import { Container, ContainerForm, Content, HeaderForm } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { House } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginAttendantFormSchema = z.object({
  token: z.string().min(1, 'O campo token não pode ser nulo ou vazio.'),
  email: z.string().min(1, 'O campo email não pode ser nulo ou vazio.').email('Formato de e-mail inválido').toLowerCase(),
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres.')
});

type LoginAttendatFormData = z.infer<typeof loginAttendantFormSchema>;

export function Login () {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginAttendatFormData>({
    resolver: zodResolver(loginAttendantFormSchema)
  });

  const goBackToHome = () => {
    navigate('/');
  };

  const handleSubmitData = () => {
    navigate('/admin');
  };

  return (
    <Container>
      <Content>
        <HeaderForm>
          <button className="btn-top-left">
            <House size={26} color="#000000" weight="thin" onClick={goBackToHome} />
            <span>HOME</span>
          </button>
        </HeaderForm>

        <ContainerForm>
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

            <button className="button">Entrar</button>
            <div className="footer">
              <p>Você não tem uma conta?</p>
              <Link to="/register">Crie a sua conta aqui</Link>
            </div>
            <div className="footer">
              <Link to="/forgot-password">Esqueceu sua senha?</Link>
              <Link to="/login-admin">Acesso Administrativo</Link>
            </div>
          </form>
        </ContainerForm>
      </Content>
    </Container>
  );
}
