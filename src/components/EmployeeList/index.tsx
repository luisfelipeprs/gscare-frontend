import React, { useState } from 'react';
import {
  Button,
  Container,
  Modal,
  Background,
  EmployeeCard,
  EmployeeCardContainer,
  EmployeeImageContainer,
  GenderRadius,
  Action,
} from './styled';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    employeeCode: '',
    location: '',
    gender: '',
  });

  
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const openModal = (index?: number) => {
    setIsModalOpen(true);

    if (index !== undefined) {
      const employeeToEdit = employees[index];
      setEditIndex(index);
      setFormData({ ...employeeToEdit });
    } else {
      setEditIndex(null);
      setFormData({
        name: '',
        email: '',
        jobTitle: '',
        phone: '',
        employeeCode: '',
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
      jobTitle: '',
      phone: '',
      employeeCode: '',
      location: '',
      gender: '',
    });
  };

  const handleSave = () => {
    const updatedEmployees = [...employees];
    if (editIndex !== null) {
      updatedEmployees[editIndex] = formData;
    } else {
      updatedEmployees.push(formData);
    }

    setEmployees(updatedEmployees);
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
      const updatedEmployees = [...employees];
      updatedEmployees.splice(deleteConfirmationIndex, 1);
      setEmployees(updatedEmployees);
      closeDeleteConfirmation();
    }
  };

  const getEmployeeImage = (employeeGender: string) => {
    if (employeeGender === 'masculino') {
      return 'https://cdn.discordapp.com/attachments/1082474634483601459/1172895849303511101/image.png?ex=6561fb61&is=654f8661&hm=347ce5d922e74f679dac58dfff462aafb90145d2dca21f718423f5fb3f710fb3&';
    } else if (employeeGender === 'feminino') {
      return 'https://cdn.discordapp.com/attachments/1082474634483601459/1172895902906724452/image.png?ex=6561fb6e&is=654f866e&hm=9ad02d85c8f3d4e82d0ba2f878986c47be8a12753c0a6eec57fa1ea33e7610e3&';
    } else {
      return 'https://bootdey.com/img/Content/avatar/avatar1.png';
    }
  };
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <Container>
      <h1>Lista de Funcionários</h1>
      <Button onClick={() => openModal()}>Adicionar Funcionário</Button>
      {isModalOpen && (
        <Background>
          <Modal>
            <h2>{editIndex !== null ? 'Editar Funcionário' : 'Adicionar Funcionário'}</h2>
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
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}>
            <option value="">Selecione um cargo</option>
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
            placeholder="Código do Funcionário"
            value={formData.employeeCode}
            onChange={(e) => setFormData({ ...formData, employeeCode: e.target.value })}
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
       <EmployeeCardContainer>
        {employees.map((employee, index) => (
          <EmployeeCard key={index}>
            <EmployeeImageContainer>
              <img
                id="employeeImage"
                src={employee.imageSrc || getEmployeeImage(employee.gender)}
                alt="Imagem do Funcionário"
              />
            </EmployeeImageContainer>
            <p><strong>Nome:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Cargo:</strong> {employee.jobTitle}</p>
            <p><strong>Telefone:</strong> {employee.phone}</p>
            <p><strong>Código do Funcionário:</strong> {employee.employeeCode}</p>
            <p><strong>Endereço:</strong> {employee.location}</p>
            <Action>
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(index)}>Excluir</button>
            </Action>
          </EmployeeCard>
        ))}
      </EmployeeCardContainer>
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


export default EmployeeList;