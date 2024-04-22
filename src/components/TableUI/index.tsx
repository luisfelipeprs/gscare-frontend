import React from 'react';
import styled from 'styled-components';
import HomemImg from './../../assets/homem.png';
import MulherImg from './../../assets/mulher.png';
import { Eye, Funnel, FunnelSimple } from 'phosphor-react';

interface IPatient {
  id: number;
  nome: string;
  idade: number;
  patologia: string;
  endereco: string;
  celular: string;
  tipoEscala: string;
  valorMensal: string;
  valorPlantao: string;
  sexo: string; // Corrigido para aceitar apenas 'homem' ou 'mulher'
}

interface Props {
  patients: IPatient[];
}
const Container = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  /* margin: 20px auto;
  padding: 20px;
  background-color: #fff; */
  /* border-radius: 5px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContainerTable = styled.div`
  width: 100%;
  overflow-x: auto;
  max-height: 500px;
  min-height: 500px;
  border-radius: 2px; /* Adicionando borda arredondada para o scroll */
  /* Adicionando estilo personalizado para o scroll */
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

// const Th = styled.th`
//   padding: 12px 15px;
//   text-align: left;
//   border-bottom: 1px solid #ddd;
//   background-color: #fff;
//   font-weight: 500;
//   color: #333;
//   white-space: nowrap;
// `;
const Th = styled.th`
  padding: 15px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  position: sticky; /* Torna o cabeçalho fixo */
  top: 0; /* Define a posição fixa no topo */
  z-index: 1; /* Define a ordem z para que fique acima do conteúdo rolável */

  svg {
    transform: translate(5px, 20%);
    cursor: pointer;
  }
`;

const Td = styled.td`
  padding: 20px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  /* min-width: 150px; */
  white-space: nowrap; /* Evita que o texto seja quebrado em várias linhas */
  /* Definindo a largura das colunas */
  /* width: 12%; */
`;

const ButtonViewTd = styled.button`
  text-align: center;
  justify-content: center;
  display: flex;
  margin: auto;
  padding: 10px;
  border: none;
  background-color: #0037ff99;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const Tbody = styled.tbody`
  & tr:nth-child(even) {
    background-color: #f9f9ff;
  }
  & tr:nth-child(odd) {
    background-color: #fff;
  }
`;

const PatientTable: React.FC<Props> = ({ patients }) => {
  return (
    <>
      <Container>
        <ContainerTable>
          <Table id="patientTable">
            <thead>
              <tr>
                <Th>
                  detalhes
                </Th>
                <Th>
                  Nome
                  <Funnel size={18} />
                </Th>
                <Th>
                  Idade
                  <Funnel size={18} />
                </Th>
                <Th>
                  Patologia
                  <Funnel size={18} />
                </Th>
                <Th>
                  Endereço
                  <Funnel size={18} />
                </Th>
                <Th>
                  Celular
                  <Funnel size={18} />
                </Th>
                <Th>
                  Escala
                  <Funnel size={18} />
                </Th>
                <Th>
                  Valor Mensal
                  <Funnel size={18} />
                </Th>
                <Th>
                  Valor Plantão
                  <Funnel size={18} />
                </Th>
              </tr>
            </thead>
            <Tbody id="tableBody">
              {patients.map(patient => (
                <tr key={patient.id}>
                  <Td>
                    <ButtonViewTd>
                      <Eye size={20} color="#f2f2f2" weight="bold" />
                    </ButtonViewTd>
                  </Td>
                  <Td>
                    {patient.sexo === 'homem' && <img src={HomemImg} alt="Homem" style={{ marginRight: '5px', width: '15px', borderRadius: '50%' }} />}
                    {patient.sexo === 'mulher' && <img src={MulherImg} alt="Mulher" style={{ marginRight: '5px', width: '15px', borderRadius: '50%' }} />}
                    {patient.nome}
                  </Td>
                  <Td>{patient.idade}</Td>
                  <Td>{patient.patologia}</Td>
                  <Td>{patient.endereco}</Td>
                  <Td>{patient.celular}</Td>
                  <Td>{patient.tipoEscala}</Td>
                  <Td>{patient.valorMensal}</Td>
                  <Td>{patient.valorPlantao}</Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </ContainerTable>
      </Container>
    </>
  );
};

export default PatientTable;
