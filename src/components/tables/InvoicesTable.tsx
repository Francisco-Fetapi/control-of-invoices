import { useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  Group,
  Text,
  ActionIcon,
} from "@mantine/core";
import { TableMenuRow } from "../TableMenuRow";
import getShortText from "helpers/getShortText";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export interface Invoice {
  id: string;
  value: string;
  number: number;
  description: string;
  accrualMonth: Date;
  receiptDate: Date;
  corporationName: string;
}

export interface InvoicesTableProps {
  data: Invoice[];
}

export function InvoicesTable({ data }: InvoicesTableProps) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const rows = data.map((item, key) => {
    return (
      <TableRow
        selection={selection}
        item={item}
        key={item.id}
        toggleRow={toggleRow}
      />
    );
  });

  return (
    <Table verticalSpacing="sm">
      <thead>
        <tr>
          <th style={{ width: 40 }}>
            <Checkbox
              onChange={toggleAll}
              checked={selection.length === data.length}
              indeterminate={
                selection.length > 0 && selection.length !== data.length
              }
              transitionDuration={0}
            />
          </th>
          <th>Empresa</th>
          <th>Valor</th>
          <th>Número</th>
          <th>Descrição</th>
          {/* Mês de  */}
          <th>Competencia</th>
          {/* Data de  */}
          <th>Recebimento</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </Table>
  );
}

interface TableRowProps {
  item: Invoice;
  selection: string[];
  toggleRow: (id: string) => void;
}

function TableRow({ item, selection, toggleRow }: TableRowProps) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);

  function openModalDelete() {}
  function openModalMoreDetails() {}
  function openEditForm() {}
  return (
    <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
      <td>
        <Checkbox
          checked={selection.includes(item.id)}
          onChange={() => toggleRow(item.id)}
          transitionDuration={2}
        />
      </td>
      <td>{item.corporationName}</td>
      <td>{item.value}</td>
      <td>{item.number}</td>
      <td>{getShortText(item.description, 3)}</td>
      <td>{item.accrualMonth.toLocaleDateString()}</td>
      <td>{item.receiptDate.toLocaleDateString()}</td>
      <td>
        <TableMenuRow
          handleDelete={openModalDelete}
          handleDetails={openModalMoreDetails}
          handleEdit={openEditForm}
        >
          <ActionIcon>
            <h4>. . .</h4>
          </ActionIcon>
        </TableMenuRow>
      </td>
    </tr>
  );
}
