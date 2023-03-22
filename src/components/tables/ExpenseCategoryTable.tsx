import { useState } from "react";
import {
  createStyles,
  Switch,
  Table,
  Checkbox,
  Group,
  Text,
  ActionIcon,
} from "@mantine/core";
import { TableMenuRow } from "../TableMenuRow";
import { ExpenseCategory } from "pages/despesas/categorias";
import getShortText from "helpers/getShortText";
import useTableActions from "hooks/useTableActions";
import FormEditCategory from "components/forms/FormEditCategory";
import { GetExpenseCategoryApiResponse } from "pages/api/expense/category";
import { apiRoutes } from "lib/axios";
import { useQuery } from "react-query";
import { ExpenseCategoryDoc } from "services/getExpenseCategory";
import useSelection from "hooks/useSelection";
import useDeleteHandle from "hooks/useDeleteHandle";
import getWordsLength from "helpers/getWordsLength";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export interface ExpenseCategoryTableProps {
  data: ExpenseCategory[];
}

export function ExpenseCategoryTable({ data }: ExpenseCategoryTableProps) {
  const { classes, cx } = useStyles();

  const expenseCategories = useQuery("expense-categories", () => {
    return apiRoutes.get<GetExpenseCategoryApiResponse>("/expense/category");
  });

  const listExpenseCategories = expenseCategories.data?.data.expenseCategorys;

  const {
    allItemsIsSelected,
    someItemsIsSelected,
    idSelecteds,
    toggleAll,
    toggleRow,
  } = useSelection({ items: listExpenseCategories });

  const rows = listExpenseCategories?.map((item, key) => {
    return (
      <TableRow
        selection={idSelecteds}
        item={item}
        key={item.id}
        toggleRow={toggleRow}
      />
    );
  });

  if (expenseCategories.isLoading) {
    return (
      <Text mt={10} align="center">
        Carregando...
      </Text>
    );
  }

  if (!listExpenseCategories?.length) {
    return (
      <Text mt={10} align="center">
        Nenhuma Categoria encontrada.
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
          <th>Descrição</th>
          <th>Arquivada</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

interface TableRowProps {
  item: ExpenseCategoryDoc;
  selection: string[];
  toggleRow: (id: string) => void;
}

function TableRow({ item, selection, toggleRow }: TableRowProps) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);
  const [archived, setArchived] = useState(item.archived);
  const { deleteDocuments, isLoading } = useDeleteHandle({
    documents: selection.map((item) => ({ id: item })),
    queryToRefetch: "expense-categories",
    url: "/expense/category/delete",
  });
  const detailsLabel = "Descrição";
  const wordsLength = getWordsLength(item.description);

  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      handleDelete() {
        deleteDocuments(item);
      },
      EditForm: <FormEditCategory item={item} />,
      ViewDetails: wordsLength > 3 ? <div>{item.description}</div> : undefined,
      detailsLabel,
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
      <td>
        <Group spacing="sm">
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>
      <td>{getShortText(item.description, 5)}</td>
      <td style={{ textAlign: "center" }}>
        <Switch
          checked={archived}
          onChange={(event) => setArchived(event.currentTarget.checked)}
        />
      </td>
      <td>
        <TableMenuRow
          handleDelete={openModalDelete}
          handleDetails={openModalMoreDetails}
          handleEdit={openEditForm}
          detailsLabel={detailsLabel}
        >
          <ActionIcon>
            <h4>. . .</h4>
          </ActionIcon>
        </TableMenuRow>
      </td>
    </tr>
  );
}
