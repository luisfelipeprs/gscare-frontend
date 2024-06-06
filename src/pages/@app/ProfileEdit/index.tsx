import { AddPicture, Container, Content, InfoProfile, ProfileInfoContainer, CardInfoAboutAccount, HeaderCardInfoAboutAccount, CardInfoAccountDatas, ContentCardInfoAboutAccount, CardInfoAccount, CardInfo, CardData, CardInfoAboutAccountDatas, RegistrationData, ContainerNameAndNumberTel, ContainerEmail, InfoProfileText, InfoProfileDatas, ContainerCustomerTrackingEnabled, ContainerButtonEditAccount, ContainerIconName, ContentName, ContainerDataFloat, ContainerRight, ContainerRightFirst, ContainerRightSecond } from './styled';
import { RouterIndicator } from '../../../components/RouterIndicator';
import { DotsThreeVertical, PencilSimple } from 'phosphor-react';
import { Avatar, Flex } from '@radix-ui/themes';
import TextGscare from '../../../components/TextGscare';

function ProfileEdit () {
  // const [name] = useState('Fernando');
  // const [phone] = useState('40028922');
  // const [email] = useState('fernando@example.com');
  // const [image] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');
  // const [birthdate] = useState('1992-02-05');
  // const [description] = useState('Dev');

  // const [editedProfile] = useState({
  //   name,
  //   phone,
  //   email,
  //   image,
  //   birthdate,
  //   description,
  // });


  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="detalhes do seu perfil"
        routerText="Perfil"
      >
        <Content>
          <ProfileInfoContainer>
            <ContainerDataFloat>
              <CardInfoAccountDatas>
                <AddPicture>
                  {/* <ProfileImage src={editedProfile.image} alt="Seu Perfil" /> */}

                  <ContainerIconName>

                    {/* <ContentImgAndName> */}
                    <Flex gap="2">
                      <Avatar fallback="F" radius="full" size="4" /> {/* <Avatar src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" fallback="A" /> */}
                    </Flex>
                    <ContentName>
                      <h4>Fernando Franco</h4>
                      <div><span>bem vido a </span> <TextGscare /></div>
                    </ContentName>
                    {/* </ContentImgAndName> */}

                  </ContainerIconName>

                  <ContainerButtonEditAccount>
                    <PencilSimple size={20} color='#fff' weight="bold" />
                  </ContainerButtonEditAccount>
                </AddPicture>

                <InfoProfile>
                  <InfoProfileText>
                    <h3>Seu Perfil</h3>
                  </InfoProfileText>
                  <InfoProfileDatas>
                    <p>
                      primeiro acesso: 10-10-2010
                    </p>
                  </InfoProfileDatas>
                </InfoProfile>
                <RegistrationData>

                  <ContainerEmail>
                    <div>
                      <input type="text" disabled value="Fernando Xavier Coelho De Silva" placeholder="digite seu nome" />
                    </div>
                  </ContainerEmail>
                  <ContainerNameAndNumberTel>
                    <div>
                      <input type="text" disabled value="123.456.789-90" placeholder="digite seu CPF" />
                    </div>
                    <div>
                      <input type="tel" disabled value="20040-001" placeholder="digite seu CEP" />
                    </div>
                  </ContainerNameAndNumberTel>
                  <ContainerNameAndNumberTel>
                    <div>
                      <input type="text" disabled value="12.345.678/0001-00" placeholder="digite seu CNPJ" />
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

                  <ContainerNameAndNumberTel>
                    <div>
                      <input type="password" value="Fernando Franco" placeholder="digite seu nome" />
                    </div>
                    <div>
                      <input type="password" placeholder="digite nova senha" />
                    </div>
                  </ContainerNameAndNumberTel>
                  {/* 
                    NOME COMPLETO [x]
                    CPF E IDENTIDADE [x]
                    ENDEREÇO COM CEP [x]
                    DISPONIBILIDADE DE HORARIO [ ]

                    FOTOS:
                    IDENTIDADE, CPF, COMPROVANTE DE RESIDÊNCIA 
                    CERTIFICADO DO CURSO
                    MEI
                    NADA CONSTA 
                  */}


                </RegistrationData>
                {/* <a href="#"><h2>Profile</h2></a>
                <a href="#"><h2>Task</h2></a>
                <a href="#"><h2>Calendar</h2></a>
                <a href="#"><h2>Files</h2></a> */}
                <ContainerCustomerTrackingEnabled>
                  Rastreamento de cliente ativado
                </ContainerCustomerTrackingEnabled>

              </CardInfoAccountDatas>
            </ContainerDataFloat>

            <ContainerRight>
              <ContainerRightFirst>
                <CardInfoAboutAccountDatas>
                  <HeaderCardInfoAboutAccount>
                    <h2>Detalhes da conta</h2>
                    <button><DotsThreeVertical size={20} /></button>
                  </HeaderCardInfoAboutAccount>
                  <ContentCardInfoAboutAccount>
                    <CardInfoAccount>
                      <CardInfo>
                        <h3>Credencial unico da sua conta:</h3>
                        <p>f123f12-3f123f-21f3sav-cvqd1</p>
                      </CardInfo>
                      <CardData>
                        <span style={{ background: 'linear-gradient(166deg, rgb(119 213 84), rgb(19, 156, 0))' }}>
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
              </ContainerRightFirst>

              <ContainerRightSecond>
                <CardInfoAboutAccount>
                  <HeaderCardInfoAboutAccount>
                    <h2>Dados da sua empresa:</h2>
                    <button><DotsThreeVertical size={20} /></button>
                  </HeaderCardInfoAboutAccount>
                  <ContentCardInfoAboutAccount>
                    <CardInfoAccount>
                      <CardInfo>
                        <h3>Numero agendamentos marcados:</h3>
                        <p>gerencie, monitore e preste um melhor atendimento</p>
                      </CardInfo>
                      <CardData>
                        <span>
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
                        <span>
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
                        <span>
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
                        <span>
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
                        <span>
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
                        <span>
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
              </ContainerRightSecond>
            </ContainerRight>
          </ProfileInfoContainer>
        </Content>
      </RouterIndicator>
    </Container>
  );
}

export default ProfileEdit;
