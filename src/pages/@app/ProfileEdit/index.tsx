import { useState } from 'react';
import './styled';
import { AddPicture, Container, Content, InfoName, Interest, LeftContainer, MidContainer, ProfileImage, ProfileInfoContainer, ShowInterest } from './styled';
import { Section } from '@radix-ui/themes';

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
      <Content>
        <ProfileInfoContainer>
          <LeftContainer>
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
          </LeftContainer>
          <MidContainer>
          <Interest>
            <Section size="1" style={{width:'100%'}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ShowInterest>📱 Product Infrastructure</ShowInterest>
            <ShowInterest>🔒 Network Security</ShowInterest>
            <ShowInterest>🕹️ Security Testing</ShowInterest>
            <ShowInterest>🌎 Security Audit Outsourcing</ShowInterest>
            <ShowInterest>🐞 Bugs</ShowInterest>
            </Section>
            </Interest>
          </MidContainer>
      </ProfileInfoContainer>
      </Content>
    </Container>
  );
}

export default ProfileEdit;