import React, { useState } from 'react';
import './styled'
import { Form, InputField, ProfileEditContainer, ProfileImage, SaveButton, TextAreaField } from './styled';

const ProfileEdit: React.FC = () => {
  const [name, setName] = useState('Neymar JR da Silva');
  const [phone, setPhone] = useState('40028922');
  const [email, setEmail] = useState('neymar@example.com');
  const [image, setImage] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');
  const [birthdate, setBirthdate] = useState('1992-02-05');
  const [description, setDescription] = useState('Jogador de futebol profissional');

  const [editedProfile, setEditedProfile] = useState({
    name,
    phone,
    email,
    image,
    birthdate,
    description,
  });

  const handleSave = () => {
    const updatedProfile = {
      name,
      phone,
      email,
      image,
      birthdate,
      description,
    };
    setEditedProfile(updatedProfile);
  };

  return (
    <ProfileEditContainer>
    <ProfileImage src={editedProfile.image} alt="Seu Perfil" />
      <Form>
        <InputField
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <InputField
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <InputField
          type="text"
          placeholder="URL da Foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          />
        <InputField
          type="date"
          placeholder="Data de Nascimento"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          />
        <TextAreaField
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        <SaveButton onClick={handleSave}>Salvar</SaveButton>
      </Form>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
