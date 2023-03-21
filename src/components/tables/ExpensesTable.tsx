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
import { Expense } from "entities/Expense";
import useHistoryItems from "hooks/useHistoryItems";
import { ExpenseDoc } from "services/getExpenses";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export interface ExpenseTable extends Expense {
  id: string;
}

export interface ExpensesTableProps {
  data: ExpenseTable[];
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

  const { expenses, expensesIsLoading } = useHistoryItems();

  const rows = expenses?.map((item, key) => {
    return (
      <TableRow
        selection={selection}
        item={item}
        key={item.id}
        toggleRow={toggleRow}
      />
    );
  });

  if (expensesIsLoading) {
    return (
      <Text mt={10} align="center">
        Carregando...
      </Text>
    );
  }

  if (!expenses?.length) {
    return (
      <Text mt={10} align="center">
        Nenhuma Despesa encontrada.
      </Text>
    );
  }

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
          <th>Pagamento</th>
          <th>Competência</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </Table>
  );
}

interface TableRowProps {
  item: ExpenseDoc;
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
      <td>{item.payday}</td>
      <td>{item.accrualMonth}</td>
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
