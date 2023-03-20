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
import { IconToggleRight, IconToggleLeft } from "@tabler/icons";
import useTableActions from "hooks/useTableActions";
import FormEditCategory from "components/forms/FormEditCategory";

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
  item: ExpenseCategory;
  selection: string[];
  toggleRow: (id: string) => void;
}

function TableRow({ item, selection, toggleRow }: TableRowProps) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);
  const [archived, setArchived] = useState(item.archived);
  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      async handleDelete() {
        console.log("Deletado");
      },
      EditForm: <FormEditCategory />,
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
        >
          <ActionIcon>
            <h4>. . .</h4>
          </ActionIcon>
        </TableMenuRow>
      </td>
    </tr>
  );
}
