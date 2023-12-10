import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  Background,
  Action,
  // Tabs,
  TableRow,
  TableCell,
  Table,
  CloseButton,
  // TabsInfo,
  Content,
  TableContainer,
  ProgressBar,
  ProgressStep,
} from "./styled";

interface Props {
  name: string,
  email: string,
  patientCode: string,
  title: string,
  phone: string,
  location: string,
  medications: string,
  allergies: string,
  restrictions: string,
  preferences: string,
  foodList: string,
  mealTimings: string,
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Props[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    patientCode: "",
    title: "",
    phone: "",
    location: "",
    medications: "",
    allergies: "",
    restrictions: "",
    preferences: "",
    foodList: "",
    mealTimings: "",
  });

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Informações Pessoais", "Detalhes Adicionais"];

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const openModal = (index?: number) => {
    setIsModalOpen(true);

    if (index !== undefined) {
      const patientToEdit = patients[index];
      setEditIndex(index);
      setFormData({ ...patientToEdit });
      setActiveStep(1); // Definir a etapa para a aba de detalhes ao editar
    } else {
      setEditIndex(null);
      setFormData({
        name: "",
        email: "",
        patientCode: "",
        title: "",
        phone: "",
        location: "",
        medications: "",
        allergies: "",
        restrictions: "",
        preferences: "",
        foodList: "",
        mealTimings: "",
      });
      setActiveStep(0); // Iniciar na aba de informações pessoais ao adicionar
    }
  };

  const [editIndex, setEditIndex] = useState<number | null>(null);

  // const [activeTab, setActiveTab] = useState("info");

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setFormData({
      name: "",
      email: "",
      patientCode: "",
      title: "",
      phone: "",
      location: "",
      medications: "",
      allergies: "",
      restrictions: "",
      preferences: "",
      foodList: "",
      mealTimings: "",
    });
  };

  const handleSave = () => {
    const updatedPatients = [...patients];
    if (editIndex !== null) {
      updatedPatients[editIndex] = formData;
    } else {
      updatedPatients.push(formData);
    }

    setPatients(updatedPatients);
    closeModal();
  };

  const handleEdit = (index: number) => {
    openModal(index);
  };

  const [detailsFormData, setDetailsFormData] = useState({
    medications: "",
    allergies: "",
    restrictions: "",
    preferences: "",
    foodList: "",
    mealTimings: "",
  });

  const openDetailsModal = (index: number) => {
    setEditIndex(index);
    setDetailsModalOpen(true);
    setDetailsFormData(patients[index]);
  };

  const closeDetailsModal = () => {
    setDetailsModalOpen(false);
  };

  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [deleteConfirmationIndex, setDeleteConfirmationIndex] = useState<
    number | null
  >(null);

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
      const updatedPatients = [...patients];
      updatedPatients.splice(deleteConfirmationIndex, 1);
      setPatients(updatedPatients);
      closeDeleteConfirmation();
    }
  };

  return (
    <Container>
      <h1>Lista de Pacientes</h1>
      <Button onClick={() => openModal()}>Adicionar Paciente</Button>
      {isModalOpen && (
        <Background>
          <Modal>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <h2>
              {editIndex !== null ? "Editar Paciente" : "Adicionar Paciente"}
            </h2>
            <ProgressBar>
              {steps.map((step, index) => (
                <ProgressStep key={index} completed={index < activeStep}>
                  {step}
                </ProgressStep>
              ))}
            </ProgressBar>
            {activeStep === 0 && (
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <select
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                >
                  <option value="">Selecione um tipo</option>
                  <option value="Risco">Risco</option>
                  <option value="Cadeirante">Cadeirante</option>
                  <option value="Idoso Avançado">Idoso Avançado</option>
                  <option value="Saudável">Saudável</option>
                </select>
                <input
                  type="text"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Código do Paciente"
                  value={formData.patientCode}
                  onChange={(e) =>
                    setFormData({ ...formData, patientCode: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Endereço"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
                <button onClick={handleNextStep}>Próximo</button>
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <textarea
                  placeholder="Remédios"
                  value={formData.medications}
                  onChange={(e) =>
                    setFormData({ ...formData, medications: e.target.value })
                  }
                />
                <textarea
                  placeholder="Alimentos"
                  value={formData.foodList}
                  onChange={(e) =>
                    setFormData({ ...formData, foodList: e.target.value })
                  }
                />
                <textarea
                  placeholder="Restrições"
                  value={formData.restrictions}
                  onChange={(e) =>
                    setFormData({ ...formData, restrictions: e.target.value })
                  }
                />
                <textarea
                  placeholder="Alergias"
                  value={formData.allergies}
                  onChange={(e) =>
                    setFormData({ ...formData, allergies: e.target.value })
                  }
                />
                <textarea
                  placeholder="Preferências"
                  value={formData.preferences}
                  onChange={(e) =>
                    setFormData({ ...formData, preferences: e.target.value })
                  }
                />
                <button onClick={handlePreviousStep}>Anterior</button>
                <button onClick={handleSave}>Salvar</button>
              </div>
            )}

            {editIndex !== null && (
              <button onClick={() => openDeleteConfirmation(editIndex)}>
                Excluir
              </button>
            )}
          </Modal>
        </Background>
      )}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Tipo</th>
              <th>Telefone</th>
              <th>Código do Paciente</th>
              <th>Endereço</th>
              <th>Ações</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>Toggle button</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.title}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.patientCode}</TableCell>
                <TableCell>{patient.location}</TableCell>
                <TableCell>
                  <Action>
                    <button onClick={() => handleEdit(index)}>Editar</button>
                  </Action>
                </TableCell>
                <TableCell>
                  <Action>
                    <button onClick={() => openDetailsModal(index)}>
                      Detalhes
                    </button>
                  </Action>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      {detailsModalOpen && (
        <Background>
          <Modal>
            <CloseButton onClick={closeDetailsModal}>X</CloseButton>
            <Content>
              <h2>Detalhes do Paciente</h2>
              <p>
                <strong>Remédios:</strong> {detailsFormData.medications}
              </p>
              <p>
                <strong>Alimentos:</strong> {detailsFormData.foodList}
              </p>
              <p>
                <strong>Restrições:</strong> {detailsFormData.restrictions}
              </p>
              <p>
                <strong>Alergias:</strong> {detailsFormData.allergies}
              </p>
              <p>
                <strong>Preferências:</strong> {detailsFormData.preferences}
              </p>
            </Content>
          </Modal>
        </Background>
      )}
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
};

export default PatientList;
