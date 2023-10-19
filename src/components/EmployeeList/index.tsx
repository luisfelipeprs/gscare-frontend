import React, { useState } from 'react';
import { Button, Container, EmployeeTable, Modal, Background } from './styled';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    employeeCode: '',
    location:''
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
      location:''
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
      <EmployeeTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Telefone</th>
            <th>Código</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.phone}</td>
              <td>{employee.employeeCode}</td>
              <td>{employee.location}</td>
            </tr>
          ))}
        </tbody>
      </EmployeeTable>
    </Container>
  );
};

export default EmployeeList;
