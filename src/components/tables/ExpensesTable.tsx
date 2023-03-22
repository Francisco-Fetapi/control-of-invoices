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
import useSelection from "hooks/useSelection";
import useDeleteHandle from "hooks/useDeleteHandle";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export function ExpensesTable() {
  const { classes, cx } = useStyles();

  const { expenses, expensesIsLoading } = useHistoryItems();
  const {
    allItemsIsSelected,
    someItemsIsSelected,
    idSelecteds,
    toggleAll,
    toggleRow,
  } = useSelection({ items: expenses });

  const rows = expenses?.map((item, key) => {
    return (
      <TableRow
        selection={idSelecteds}
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
              checked={allItemsIsSelected}
              indeterminate={someItemsIsSelected}
              transitionDuration={2}
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
  const { deleteDocuments, isLoading } = useDeleteHandle({
    documents: selection.map((item) => ({ id: item })),
    queryToRefetch: "expenses",
    url: "/expense/delete",
  });
  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      handleDelete() {
        deleteDocuments(item);
      },
      EditForm: <FormEditExpense item={item} />,
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
