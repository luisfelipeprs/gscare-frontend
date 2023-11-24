import React, { useState } from 'react';
import {
  Button,
  Container,
  Modal,
  Background,
  PatientCard,
  PatientCardContainer,
  PatientImageContainer,
  GenderRadius,
  Action,
} from './styled';

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    phone: '',
    patientCode: '',
    location: '',
    gender: '',
  });

  
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const openModal = (index?: number) => {
    setIsModalOpen(true);

    if (index !== undefined) {
      const patientToEdit = patients[index];
      setEditIndex(index);
      setFormData({ ...patientToEdit });
    } else {
      setEditIndex(null);
      setFormData({
        name: '',
        email: '',
        title: '',
        phone: '',
        patientCode: '',
        location: '',
        gender: '',
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setFormData({
      name: '',
      email: '',
      title: '',
      phone: '',
      patientCode: '',
      location: '',
      gender: '',
    });
  };

  const handleSave = () => {
    const updatedPatients = [...patients];
    if (editIndex !== null) {
      updatedPatients [editIndex] = formData;
    } else {
      updatedPatients.push(formData);
    }

    setPatients(updatedPatients);
    closeModal();
  };

  function setGender(e: any) {
    setFormData({ ...formData, gender: e.target.value });
  }

  const handleEdit = (index: number) => {
    openModal(index);
  };

  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [deleteConfirmationIndex, setDeleteConfirmationIndex] = useState<number | null>(null);

  const openDeleteConfirmation = (index: number) => {
    setDeleteConfirmationIndex(index);
    setIsDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationIndex(null);
    setIsDeleteConfirmationOpen(false);
  };

  const handleDelete = (index: number) => {
    openDeleteConfirmation(index);
  };

  const confirmDelete = () => {
    if (deleteConfirmationIndex !== null) {
      const updatedPatients = [...patients];
      updatedPatients.splice(deleteConfirmationIndex, 1);
      setPatients(updatedPatients);
      closeDeleteConfirmation();
    }
  };

  const getPatientImage = (patientsGender: string) => {
    if (patientsGender === 'masculino') {
      return 'https://cdn.discordapp.com/attachments/1082474634483601459/1172895849303511101/image.png?ex=6561fb61&is=654f8661&hm=347ce5d922e74f679dac58dfff462aafb90145d2dca21f718423f5fb3f710fb3&';
    } else if (patientsGender === 'feminino') {
      return 'https://cdn.discordapp.com/attachments/1082474634483601459/1172895902906724452/image.png?ex=6561fb6e&is=654f866e&hm=9ad02d85c8f3d4e82d0ba2f878986c47be8a12753c0a6eec57fa1ea33e7610e3&';
    } else {
      return 'https://bootdey.com/img/Content/avatar/avatar1.png';
    }
  };
  React.useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling on the body element
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling on the body element
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <Container>
      <h1>Lista de Pacientes</h1>
      <Button onClick={() => openModal()}>Adicionar Paciente</Button>
      {isModalOpen && (
        <Background>
          <Modal>
            <h2>{editIndex !== null ? 'Editar Paciente' : 'Adicionar Paciente'}</h2>
          <input
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          <select
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}>
            <option value="">Selecione um tipo</option>
            <option value="Gerente">Gerente</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Designer">Designer</option>
            <option value="Analista">Analista</option>
          </select>
          <input
            type="text"
            placeholder="Telefone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          <input
            type="text"
            placeholder="Código do Paciente"
            value={formData.patientCode}
            onChange={(e) => setFormData({ ...formData, patientCode: e.target.value })}
            />
          <input
            type="text"
            placeholder="Endereço"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
              <GenderRadius>
              <label>Gênero:</label>
              <label>
                <input
                  type="checkbox"
                  id="masculinoCheckbox"
                  value="masculino"
                  name="gender"
                  checked={formData.gender === 'masculino'}
                  onChange={setGender}
                />
                <span>Masculino</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="femininoCheckbox"
                  value="feminino"
                  name="gender"
                  checked={formData.gender === 'feminino'}
                  onChange={setGender}
                />
                <span>Feminino</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="outrosCheckbox"
                  value="outros"
                  name="gender"
                  checked={formData.gender === 'outros'}
                  onChange={setGender}
                />
                <span>Outros</span>
              </label>
            </GenderRadius>
          <button onClick={handleSave}>Salvar</button>
          <button onClick={closeModal}>Cancelar</button>
        </Modal>
            </Background>
      )}
       <PatientCardContainer>
        {patients.map((patient, index) => (
          <PatientCard key={index}>
            <PatientImageContainer>
              <img
                id="patientImage"
                src={patient.imageSrc || getPatientImage(patient.gender)}
                alt="Imagem do Paciente"
              />
            </PatientImageContainer>
            <p><strong>Nome:</strong> {patient.name}</p>
            <p><strong>Email:</strong> {patient.email}</p>
            <p><strong>Tipo:</strong> {patient.title}</p>
            <p><strong>Telefone:</strong> {patient.phone}</p>
            <p><strong>Código do Paciente:</strong> {patient.patientCode}</p>
            <p><strong>Endereço:</strong> {patient.location}</p>
            <Action>
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(index)}>Excluir</button>
            </Action>
          </PatientCard>
        ))}
      </PatientCardContainer>
      {isDeleteConfirmationOpen && (
        <Background>
          <Modal>
            <h2>Tem certeza que deseja excluir?</h2>
            <button onClick={confirmDelete}>Sim</button>
            <button onClick={closeDeleteConfirmation}>Cancelar</button>
          </Modal>
        </Background>
      )}
    </Container>
  );
};


export default PatientList;