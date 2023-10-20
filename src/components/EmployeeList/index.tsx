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
    gender:''
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
      gender:''
    });
  };
  function setGender(e:any){
    setFormData({ ...formData, gender: e.target.value })
  }

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
            <GenderRadius>
              <label>
                Gênero:
              </label>
              <label>
                <input type="checkbox" id="masculinoCheckbox" value="masculino" name="gender" onClick={setGender}/>
                <span>Masculino</span>
              </label>
              <label>
                <input type="checkbox" id="femininoCheckbox" value="feminino" name="gender" onClick={setGender}/>
                <span>Feminino</span>
              </label>
              <label>
                <input type="checkbox" id="outrosCheckbox" value="outros" name="gender" onClick={setGender}/>
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
            <img id="employeeImage" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Imagem do Funcionário" />
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






