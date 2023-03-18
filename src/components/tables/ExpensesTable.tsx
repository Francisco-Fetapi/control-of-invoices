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
import useTableActions from "hooks/useTableActions";
import FormEditExpense from "components/forms/FormEditExpense";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export interface Expense {
  id: string;
  name: string;
  corporationName: string;
  category: string;
  value: string;
  payday: Date;
  accrualMonth: Date;
}

export interface ExpensesTableProps {
  data: Expense[];
}

export function ExpensesTable({ data }: ExpensesTableProps) {
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
          <th>Nome</th>
          <th>Empresa</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th>Data do Pagamento</th>
          <th>Data de Competência</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </Table>
  );
}

interface TableRowProps {
  item: Expense;
  selection: string[];
  toggleRow: (id: string) => void;
}

function TableRow({ item, selection, toggleRow }: TableRowProps) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);
  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      async handleDelete() {
        console.log("Deletado");
      },
      EditForm: <FormEditExpense />,
      ViewDetails: <div>Component com mais informacoes</div>,
    });

  return (
    <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
      <td>
        <Checkbox
          checked={selection.includes(item.id)}
          onChange={() => toggleRow(item.id)}
          transitionDuration={2}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.corporationName}</td>
      <td>{item.category}</td>
      <td>{item.value}</td>
      <td>{item.payday.toLocaleDateString()}</td>
      <td>{item.accrualMonth.toLocaleDateString()}</td>
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
