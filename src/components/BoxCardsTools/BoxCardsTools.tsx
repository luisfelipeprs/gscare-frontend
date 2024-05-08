import ClientCard from '../ClientCard';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';
import func3Atend from './../../assets/func3Atend.png';
import { ForkKnife, Heartbeat, Pill } from 'phosphor-react';

export function BoxCardsTools() {
    return (
        <Container>
            <Content>
                <Title
                    title={'O sistema que faltava para sua empresa.'}
                    description='Pegamos os serviços fundamentais que sua empresa precisa atender e colocamos de uma forma gerenciavel'
                // textButton='Faça o teste gratis'
                // typebutton='withBg'
                // color='orange'
                />
                <CardsContainer>
                    <ClientCard
                        description='relatorio diário e avisos de imprevistos do dia.'
                        img={<ForkKnife size={50} />}
                        link='/'
                        title='Relatórios'
                        type='ocorridos' />
                    <ClientCard
                        description='patologia, alergias, medicacoes e subrimentos.'
                        img={<Pill size={50} />}
                        link='/'
                        title='Informações do Paciente'
                        type='paciente' />
                    <ClientCard
                        description='lembretes de consultas e medicacoes .'
                        img={<Heartbeat size={50} />} // Passando um ícone SVG
                        link='/'
                        title='Lembretes'
                        type='avisos' />
                    <ClientCard
                        description='Numeros emergencias.'
                        img={<ForkKnife size={50} />}
                        link='/'
                        title='Contatos'
                        type='auxilios' />
                </CardsContainer>
            </Content>
        </Container>
    );
}
