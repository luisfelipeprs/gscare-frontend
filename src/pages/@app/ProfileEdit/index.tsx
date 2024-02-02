import { useState } from 'react';
import { AddPicture, Container, Content, InfoProfile, Interest, LeftContainer, RightContainer, ProfileImage, ProfileInfoContainer, ShowInterest, AvatarContainer, Person, CardInfoAboutAccount, HeaderCardInfoAboutAccount, CardInfoAccountDatas, ContentCardInfoAboutAccount, CardInfoAccount, CardInfo, CardData, CardInfoAboutAccountDatas, RegistrationData, ContainerNameAndNumberTel, ContainerEmail, InfoProfileText, InfoProfileDatas, ContainerCustomerTrackingEnabled, ContainerButtonEditAccount } from './styled';
import { Avatar, Section, Text } from '@radix-ui/themes';
import { RouterIndicator } from '../../../components/RouterIndicator';
import { DotsThreeVertical, Plus } from 'phosphor-react';

function ProfileEdit() {
  const [name] = useState('Neymar JR da Silva');
  const [role] = useState('Developer');
  const [phone] = useState('40028922');
  const [email] = useState('neymar@example.com');
  const [image] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');
  const [birthdate] = useState('1992-02-05');
  const [description] = useState('Jogador de futebol profissional');

  const [editedProfile] = useState({
    name,
    phone,
    email,
    image,
    birthdate,
    description,
  });


  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="listagem de atendimentos"
        routerText="Atendimentos"
      >
        <Content>
          <ProfileInfoContainer>
            <LeftContainer>
              <CardInfoAccountDatas>
                <AddPicture>
                  <ProfileImage src={editedProfile.image} alt="Seu Perfil" />
                  <button>
                    <Plus size={20} weight='bold' />
                  </button>
                </AddPicture>
                <InfoProfile>
                  <InfoProfileText>
                    <h3>Seu Perfil</h3>
                  </InfoProfileText>
                  <InfoProfileDatas>
                    <p>
                      primeiro acesso: 10-10-2010
                    </p>
                    <p>
                      pais / cidade / bairro
                    </p>

                  </InfoProfileDatas>
                </InfoProfile>
                <RegistrationData>
                  <ContainerNameAndNumberTel>
                    <div>
                      <input type="text" disabled value="Fernando Franco" placeholder="digite seu nome" />
                    </div>
                    <div>
                      <input type="tel" disabled value="(00) 12345-6789" placeholder="(xx) xxxxx-xxxx" />
                    </div>
                  </ContainerNameAndNumberTel>
                  <ContainerEmail>
                    <div>
                      <input type="email" disabled value="seuemail@email.com" placeholder="digite seu email" />
                    </div>
                  </ContainerEmail>

                </RegistrationData>
                {/* <a href="#"><h2>Profile</h2></a>
                <a href="#"><h2>Task</h2></a>
                <a href="#"><h2>Calendar</h2></a>
                <a href="#"><h2>Files</h2></a> */}
                <ContainerCustomerTrackingEnabled>
                  Rastreamento de cliente ativado
                </ContainerCustomerTrackingEnabled>

                <ContainerButtonEditAccount>
                  <button>Editar</button>
                </ContainerButtonEditAccount>
              </CardInfoAccountDatas>
            </LeftContainer>
            <RightContainer>
              <CardInfoAboutAccountDatas>
                <HeaderCardInfoAboutAccount>
                  <h2>Detalhes sua conta</h2>
                  <button><DotsThreeVertical size={20} /></button>
                </HeaderCardInfoAboutAccount>
                <ContentCardInfoAboutAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Credencial unico da sua conta:</h3>
                      <p>f123f12-3f123f-21f3sav-cvqd1</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(142, 255, 99), rgb(19, 156, 0))' }}>
                        Conta ativa
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Assinatura:</h3>
                      <p>01/10/2023 - 01/10/2024</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, #FFCE3A, #FFA700)' }}>
                        Assinatura Premiun
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  {/* <Interest>
                    <Section size="1" style={{ width: '100%' }}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <ShowInterest>📱 Product Infrastructure</ShowInterest>
                      <ShowInterest>🔒 Network Security</ShowInterest>
                      <ShowInterest>🕹️ Security Testing</ShowInterest>
                      <ShowInterest>🌎 Security Audit Outsourcing</ShowInterest>
                      <ShowInterest>🐞 Bugs</ShowInterest>
                    </Section>
                  </Interest> */}
                </ContentCardInfoAboutAccount>
              </CardInfoAboutAccountDatas>
              <CardInfoAboutAccount>
                <HeaderCardInfoAboutAccount>
                  <h2>Dados da sua empresa:</h2>
                  <button><DotsThreeVertical size={20} /></button>
                </HeaderCardInfoAboutAccount>
                <ContentCardInfoAboutAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Numero de funcionarios ativos:</h3>
                      <p>gerencie, monitore e organize processos</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156))' }}>
                        30
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Numero de pacientes ativos:</h3>
                      <p>gerencie, monitore e preste um melhor atendimento</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156))' }}>
                        120
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Numero agendamentos marcados:</h3>
                      <p>gerencie, monitore e preste um melhor atendimento</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156))' }}>
                        312
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Numero agendamentos marcados:</h3>
                      <p>gerencie, monitore e preste um melhor atendimento</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156))' }}>
                        312
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Numero agendamentos marcados:</h3>
                      <p>gerencie, monitore e preste um melhor atendimento</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156))' }}>
                        312
                      </span>
                    </CardData>
                  </CardInfoAccount>
                  <CardInfoAccount>
                    <CardInfo>
                      <h3>Numero agendamentos marcados:</h3>
                      <p>gerencie, monitore e preste um melhor atendimento</p>
                    </CardInfo>
                    <CardData>
                      <span style={{ background: 'linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156))' }}>
                        312
                      </span>
                    </CardData>
                  </CardInfoAccount>
                </ContentCardInfoAboutAccount>
              </CardInfoAboutAccount>
              {/* <CardInfoAboutAccount>
                <Text as="div" size="3" mb="1" weight="bold">
                  Funcionários
                </Text>
                <AvatarContainer>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="A"
                    />
                    Joe A.
                  </Person>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="B"
                    />
                    Dylan C.
                  </Person>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="C"
                    />
                    Ethan C.
                  </Person>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="D"
                    />
                    Louis W.
                  </Person>
                </AvatarContainer>
              </CardInfoAboutAccount>
              <CardInfoAboutAccount>
                <Text as="div" size="3" mb="1" weight="bold">
                  Pacientes
                </Text>
                <AvatarContainer>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="A"
                    />
                    Joe A.
                  </Person>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="B"
                    />
                    Dylan C.
                  </Person>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="C"
                    />
                    Ethan C.
                  </Person>
                  <Person>
                    <Avatar
                      size="4"
                      radius="full"
                      fallback="D"
                    />
                    Louis W.
                  </Person>


                </AvatarContainer>
              </CardInfoAboutAccount> */}
            </RightContainer>
          </ProfileInfoContainer>
        </Content>
      </RouterIndicator>
    </Container>
  );
}

export default ProfileEdit;