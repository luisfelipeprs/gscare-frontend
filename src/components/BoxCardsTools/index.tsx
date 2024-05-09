import ClientCard from '../ClientCard';
import Title from '../Title';
import { CardsContainer, Container, Content } from './styled';


import { AddressBook, ForkKnife, Heartbeat, Pill } from 'phosphor-react';

function BoxCardsTools() {
    return (
        <Container>
            <Content>
                <Title
                    title={'O sistema que faltava para sua empresa.'}
                    description='lofsadfasdfasdfasdfasd3'
                    textButton='Faça o teste gratis'
                    typebutton='withBg'
                    color='orange'
                />
                <CardsContainer>
                    <ClientCard
                        description='relatorio diário e avisos de imprevistos do dia.'
                        img={<AddressBook size={32} />}
                        link='/'
                        title='Relatórios'
                        type='ocorridos'
                    />
                    <ClientCard
                        description='patologia, alergias, medicacoes e subrimentos.'
                        img={<Pill size={32} />}
                        link='/'
                        title='Informações do Paciente'
                        type='paciente'
                    />
                    <ClientCard
                        description='lembretes de consultas e medicacoes .'
                        img={<Heartbeat size={32} />} // Passando um ícone SVG
                        link='/'
                        title='Lembretes'
                        type='avisos'
                    />
                    <ClientCard
                        description='Numeros emergencias.'
                        img={<ForkKnife size={32} />}
                        link='/'
                        title='Contatos'
                        type='auxilios'
                    />
                </CardsContainer>
            </Content>
        </Container>
    )
}
export default BoxCardsTools;
