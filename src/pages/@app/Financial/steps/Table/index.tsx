import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

import { Financial } from "./domain/Financial";
import { Box, Flex } from "@radix-ui/themes";
import { UserRow } from "./styled";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

function TableComponent({ financialData }: { financialData: Financial[] }) {
  const columnsFinancial = useMemo<MRT_ColumnDef<Financial>[]>(
    () => [
      {
        accessorKey: "type",
        id: "type", 
        header: "Tipo",
        size: 100,
        Cell: ({ row }) => (
          <span>
            {row.getValue("type") === "cima" ? (
              <ArrowUpIcon width="18" height="18" />
            ) : row.getValue("type") === "baixo" ? (
              <ArrowDownIcon width="18" height="18" />
            ) : null}
          </span>
        ),
      },
      {
        accessorKey: "status",
        id: "status", 
        header: "Status",
        size: 100,
        Cell: ({ row }) => (
          <span>
            {row.getValue("status") === "ok" ? (
              <CheckIcon width="18" height="18" />
            ) : row.getValue("status") === "nao" ? (
              <Cross2Icon width="18" height="18" />
            ) : null}
          </span>
        ),
      },
      {
        accessorKey: "document",
        header: "Documento",
        size: 150,
      },
      {
        accessorKey: "emission",
        header: "Emissao",
        size: 150,
      },
      {
        accessorKey: "deadline",
        header: "Vencimento",
        size: 150,
      },
      {
        accessorKey: "favoredPayer",
        accessorFn: (row) => `${row.favoredPayer.name} ${row.favoredPayer.imgProfile}`,
        id: 'favoredPayer',
        header: 'Pagador / Favorecido',
        size: 250,
        Cell: ({ row }) => (
          <UserRow>
            <img
              alt="avatar"
              height={30}
              src={row.original.favoredPayer.imgProfile}
              loading="lazy"
              style={{ borderRadius: '50%' }}
            />
            <span>{row.original.favoredPayer.name}</span>
            </UserRow>
        ),
      },
      {
        accessorKey: "charge",
        header: "Cobranca",
        size: 150,
      },
      {
        accessorKey: "value",
        header: "Valor",
        size: 150,
      },
    ],
    []
  );
  const table = useMaterialReactTable({ columns: columnsFinancial, data: financialData });

  return <MaterialReactTable table={table} />;
}

export default TableComponent;
