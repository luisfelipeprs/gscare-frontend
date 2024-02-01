import { useState } from 'react';
import { AddPicture, Container, Content, InfoName, Interest, LeftContainer, RightContainer, ProfileImage, ProfileInfoContainer, ShowInterest, AvatarContainer, Person, CardInfoAboutAccount, HeaderCardInfoAboutAccount, CardInfoAccountDatas, ContentCardInfoAboutAccount, CardInfoAccount, CardInfo, CardData, CardInfoAboutAccountDatas } from './styled';
import { Avatar, Section, Text } from '@radix-ui/themes';
import { RouterIndicator } from '../../../components/RouterIndicator';
import { DotsThreeVertical } from 'phosphor-react';

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
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g fill="#007bff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path></g></g>
                  </svg>
                </AddPicture>
                <InfoName>
                  <h1>{name}</h1>
                  <p>{role}</p>
                </InfoName>
                <a href="#"><h2>Profile</h2></a>
                <a href="#"><h2>Task</h2></a>
                <a href="#"><h2>Calendar</h2></a>
                <a href="#"><h2>Files</h2></a>
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