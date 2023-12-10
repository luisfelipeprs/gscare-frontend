import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  Background,
  GenderRadius,
  Action,
  TableRow,
  TableCell,
  Table,
  CloseButton,
} from './styled';

// import cartoonHomen from "../../assets/cartoonHomen.png";
// import cartoonMulher from "../../assets/cartoonMulher.png";

interface IEmployees {
  name: string,
  email: string,
  jobTitle: string,
  phone: string,
  employeeCode: string,
  location: string,
  gender: string,
  imageSrc: string;
}
import Toggle from '../ToggleButton';

export function EmployeeList() {
  const [employees, setEmployees] = useState<IEmployees[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({

    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    employeeCode: '',
    location: '',
    gender: '',
    imageSrc: ''
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
        imageSrc: ''
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setFormData({
  // function setGender(e: React.ChangeEvent<HTMLInputElement>) {
      name: '',
      email: '',
      jobTitle: '',
      phone: '',
      employeeCode: '',
      location: '',
      gender: '',
      imageSrc: ''
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

  function setGender(e: React.ChangeEvent<HTMLInputElement>) {
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

  const confirmDelete = () => {
    if (deleteConfirmationIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees.splice(deleteConfirmationIndex, 1);
      setEmployees(updatedEmployees);
      closeDeleteConfirmation();
    }
  };

  // const getEmployeeImage = (employeeGender: string) => {
  //   if (employeeGender === 'masculino') {
  //     return 'https://cdn.discordapp.com/attachments/1082474634483601459/1172895849303511101/image.png?ex=6561fb61&is=654f8661&hm=347ce5d922e74f679dac58dfff462aafb90145d2dca21f718423f5fb3f710fb3&';
  //   } else if (employeeGender === 'feminino') {
  //     return 'https://cdn.discordapp.com/attachments/1082474634483601459/1172895902906724452/image.png?ex=6561fb6e&is=654f866e&hm=9ad02d85c8f3d4e82d0ba2f878986c47be8a12753c0a6eec57fa1ea33e7610e3&';
  //   } else {
  //     return 'https://bootdey.com/img/Content/avatar/avatar1.png';
  //   }
  // };

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
            <CloseButton onClick={closeModal}>X</CloseButton>
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
            {editIndex !== null && (
              <button onClick={() => openDeleteConfirmation(editIndex)}>Excluir</button>
            )}
          </Modal>
        </Background>
      )}
 <Table>
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Telefone</th>
            <th>Código do Funcionário</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>
                  <Toggle/>
              </TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.jobTitle}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.employeeCode}</TableCell>
              <TableCell>{employee.location}</TableCell>
              <TableCell>
                <Action>
                  <button onClick={() => handleEdit(index)}>Editar</button>
                </Action>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {isDeleteConfirmationOpen && (
        <Background>
          <Modal>
            <h2>Tem certeza que deseja excluir?</h2>
            <button onClick={() => confirmDelete()}>Sim</button>
            <button onClick={closeDeleteConfirmation}>Cancelar</button>
          </Modal>
        </Background>
      )}
    </Container>
  );
}
