import React from 'react';
import styled from 'styled-components';
import HomemImg from './../../assets/icon-masc.png';
import MulherImg from './../../assets/icon-fem.png';
import { Funnel } from 'phosphor-react';
import { EditModalInfo } from '../../pages/@app/MedicalRecord/Model/editModal';

interface IEmployee {
  id: number;
  nome: string;
  profissao: string;
  email: string;
  endereco: string;
  idade: number;
  celular: string;
  tipoEscala: string;
  valorStatus: string;
  sexo: string; // Corrigido para aceitar apenas 'homem' ou 'mulher'
}

interface Props {
  employees: IEmployee[];
}

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContainerTable = styled.div`
  width: 100%;
  overflow-x: auto;
  max-height: 500px;
  min-height: 500px;
  border-radius: 2px;
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

const Th = styled.th`
  padding: 15px 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  font-weight: 400;
  color: #333;
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 1;

  svg {
    transform: translate(5px, 20%);
    cursor: pointer;
  }
`;

const Td = styled.td`
  padding: 20px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
`;

const TdEmailStyled = styled.span`
  color: #0039b5;
  text-decoration: underline;
`;

const TdFlagType = styled.div`
  display: table-cell;
  background: #379f40b0;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 0 5px 1px #00000038;
`;

export const ButtonViewTd = styled.button`
  text-align: center;
  justify-content: center;
  display: flex;
  margin: auto;
  padding: 10px;
  border: none;
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

const EmployeeTable: React.FC<Props> = ({ employees }) => {
  return (
    <Container>
      <ContainerTable>
        <Table id="employeeTable">
          <thead>
            <tr>
              <Th>
                Nome
                <Funnel size={18} />
              </Th>
              <Th>
                Profissão
                <Funnel size={18} />
              </Th>
              <Th>
                Email
                <Funnel size={18} />
              </Th>
              <Th>
                Endereço
                <Funnel size={18} />
              </Th>
              <Th>
                Idade
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
                Status
                <Funnel size={18} />
              </Th>
              <Th>
                Sexo
                <Funnel size={18} />
              </Th>
              <Th>
                {/* details */}
              </Th>
            </tr>
          </thead>
          <Tbody id="tableBody">
            {employees.map(employee => (
              <tr key={employee.id}>
                <Td>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {employee.sexo === 'homem' && <img src={HomemImg} alt="Homem" style={{ marginRight: '5px', width: 'auto', height: '20px', borderRadius: '50%' }} />}
                    {employee.sexo === 'mulher' && <img src={MulherImg} alt="Mulher" style={{ marginRight: '5px', width: 'auto', height: '20px', borderRadius: '50%' }} />}
                    {employee.nome}
                  </div>
                </Td>
                <Td>{employee.profissao}</Td>
                <Td>
                  <TdEmailStyled>
                    {employee.email}
                  </TdEmailStyled>
                </Td>
                <Td>{employee.endereco}</Td>
                <Td>{employee.idade}</Td>
                <Td>{employee.celular}</Td>
                <Td>
                  <TdFlagType>
                    {employee.tipoEscala}
                  </TdFlagType>
                </Td>
                <Td>{employee.valorStatus}</Td>
                <Td>{employee.sexo}</Td>
                <Td>
                  <EditModalInfo employees={employees}/>
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </ContainerTable>
    </Container>
  );
};

export default EmployeeTable;
