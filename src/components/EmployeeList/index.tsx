import React, { useState } from 'react';
import {
  Button,
  Container,
  Modal,
  Background,
  EmployeeCard,
  EmployeeCardContainer,
  EmployeeImageContainer,
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
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setEmployees([...employees, formData]);
    closeModal();
    setFormData({
      name: '',
      email: '',
      jobTitle: '',
      phone: '',
      employeeCode: '',
      location: '',
    });
  };


  return (
    <Container>
    <h1>Lista de Funcionários</h1>
    <Button onClick={openModal}>Adicionar Funcionário</Button>
    {isModalOpen && (
      <Background>
      <Modal>
          <h2>Adicionar Funcionário</h2>
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
          <button onClick={handleSave}>Salvar</button>
          <button onClick={closeModal}>Cancelar</button>
        </Modal>
            </Background>
      )}
      <EmployeeCardContainer>
        {employees.map((employee, index) => (
         <EmployeeCard key={index}>
            <EmployeeImageContainer>
              <img src="https://i.pinimg.com/564x/85/71/72/8571727e081f426167ac04b819ce8dbf.jpg" />
            </EmployeeImageContainer>
            <p><strong>Nome:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Cargo:</strong> {employee.jobTitle}</p>
            <p><strong>Telefone:</strong> {employee.phone}</p>
            <p><strong>Código do Funcionário:</strong> {employee.employeeCode}</p>
            <p><strong>Endereço:</strong> {employee.location}</p>
       </EmployeeCard>
        ))}
      </EmployeeCardContainer>
    </Container>
  );
};

export default EmployeeList;






