import { Container, ContainerForm, Content, HeaderForm } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { CaretLeft } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const forgetPasswordFormSchema = z.object({
  email: z.string().min(1, 'O campo email não pode ser nulo ou vazio.').email('Formato de e-mail inválido').toLowerCase()
});

type ForgetPasswordFormData = z.infer<typeof forgetPasswordFormSchema>;

export function ForgetPassword () {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordFormSchema)
  });

  const navigate = useNavigate();

  const goBackToPreviousScreen = () => {
    navigate(-1);
  };

  const handleSubmitData = () => {
    navigate('/');
  };

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

            <button className="button">Recuperar Senha</button>
            <div className="footer">
              <Link to="/login">Voltar para login</Link>
            </div>
          </form>
        </ContainerForm>
      </Content>
    </Container>
  );
}
