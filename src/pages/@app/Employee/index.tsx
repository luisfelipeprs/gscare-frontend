import {
  Container,
  Action,
  Table,
  Content,
  ContainerSearch_Filter_Pagination,
  InputSearch,
  Filter,
  ContainerFilterAndPagination,
  PaginationContainer,
  NavigationButton,
  PageIndicator,
  TableContainer,
  TableRow,
  TableCell,
} from './styled';
import { Select, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { RouterIndicator } from "../../../components/RouterIndicator";
import { CaretLeft, CaretRight, DotsThreeVertical, Funnel } from "phosphor-react";
import Toggle from '../../../components/ToggleButton';

import Modal from "./Modal/modal.tsx";

export function Employee() {

  function handleEdit(string: string) {
    console.log(string)
  }

  // function radixFunc() {
  //   console.log('clicou pra abrir um modal radix')
  // }

  function onPrevClick() {
    console.log('voltar paginacao')
  }

  function onNextClick() {
    console.log('avancar paginacao')
  }

  const currentPage = 1
  const totalPages = 10


  return (
    <Container>
      <RouterIndicator
        // buttonText="Criar"
        descText="listagem de funcionarios"
        routerText="Funcionarios"
        onButtonClick={Modal}
      >
        <Content>
          <ContainerSearch_Filter_Pagination>
            <InputSearch>
              <TextField.Slot style={{ border: "none" }}>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input
                placeholder="Pesquisar Paciente"
                style={{ border: 'none', margin: 'auto' }}
              />
            </InputSearch>

            <ContainerFilterAndPagination>
              <Filter>
                <Funnel size={30} weight="light" color="#000" />
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

              <PaginationContainer>
                <NavigationButton onClick={onPrevClick}>
                  <CaretLeft />
                  <span>voltar</span>
                </NavigationButton>
                <PageIndicator>{`${currentPage} - ${currentPage * 20} de ${totalPages * 20}`}</PageIndicator>
                <NavigationButton onClick={onNextClick}>
                  <span>avancar</span>
                  <CaretRight />
                </NavigationButton>
              </PaginationContainer>
            </ContainerFilterAndPagination>

          </ContainerSearch_Filter_Pagination>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Ativo1</th>
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
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
                <TableRow key={'index'}>
                  <TableCell>
                    <Toggle />
                  </TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>jobTitle</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>location</TableCell>
                  <TableCell>
                    <Action>
                      <button onClick={() => handleEdit('index')}>
                        <DotsThreeVertical size={32} weight="bold" />
                      </button>
                    </Action>
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </RouterIndicator>
    </Container>
  );
}
