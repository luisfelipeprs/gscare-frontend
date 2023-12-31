import React, { useState } from "react";
import {
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
  AddContent,
  ContentInput,
  ContainerForm,
  Filter,
} from "./styled";
import { Select, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Plus } from "phosphor-react";

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
function PatientList() {
  const [patients, setPatients] = useState<Props[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Props>({
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

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
    // setProgress((prevProgress: any) => prevProgress + 50);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
    // setProgress((prevProgress: any) => prevProgress - 50);
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
      setActiveStep(0);
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
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAddItem = (field: keyof Props) => {
    if (formData[field] !== "") {
      setAddedItems((prevItems) => [...prevItems, formData[field]]);
      setFormData({ ...formData, [field]: "" });
    }
  };


  return (
    <Container>
      <Content>

        <AddContent>
          <TextField.Root style={{ border: "none", boxShadow: "0px" }}>
            <TextField.Slot style={{ border: "none" }}>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              placeholder="Pesquisar Paciente"
              style={{ width: '1000px', border: 'none' }}

            />
          </TextField.Root>
          <Filter>

            Filter:
            <Select.Root defaultValue="all">
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Filter</Select.Label>
                  <Select.Item value="all">All</Select.Item>
                  <Select.Item value="az">A-Z</Select.Item>
                  <Select.Item value="state" disabled>Ativo</Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Patient Code</Select.Label>
                  <Select.Item value="tel">Telefone</Select.Item>
                  <Select.Item value="type">Tipo</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Filter>
          
          <Plus size={32} />
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
              <g fill="#007bff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z" onClick={() => openModal()}></path></g></g>
            </svg>
        </AddContent>
        {isModalOpen && (
          <Background>
            <Modal>
              <CloseButton onClick={closeModal}>X</CloseButton>
              <h2>
                {editIndex !== null ? "Editar Paciente" : "Adicionar Paciente"}
              </h2>
              <ProgressBar>
                <ProgressStep completed={activeStep >= 0}>Informações Pessoais</ProgressStep>
                <ProgressStep completed={activeStep >= 1}>Detalhes Adicionais</ProgressStep>
              </ProgressBar>
              {activeStep === 0 && (
                <ContainerForm>
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
                </ContainerForm>
              )}
              {activeStep === 1 && (
                <div>
                  <ContentInput>
                    <input
                      type="text"
                      placeholder="Remédios"
                      value={formData.medications}
                      onChange={(e) =>
                        setFormData({ ...formData, medications: e.target.value })
                      }
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                      <g fill="#007bff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z" onClick={() => handleAddItem("medications")}></path></g></g>
                    </svg>
                  </ContentInput>
                  <div style={{ marginTop: "10px" }}>
                    {addedItems.map((item, index) => (
                      <span key={index} style={{ marginRight: "5px", fontSize: "16px" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => handleAddItem("medications")}>Adicionar</button>


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
      </Content>
    </Container>
  );
}


export default PatientList;