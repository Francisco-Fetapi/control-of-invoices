import { useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  Group,
  Text,
  ActionIcon,
} from "@mantine/core";
import { Costumer } from "../../pages/empresas-parceiras";
import { TableMenuRow } from "../TableMenuRow";
import useTableActions from "hooks/useTableActions";
import FormEditCostumer from "components/forms/FormEditCostumer";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export interface CostumersTableProps {
  data: Costumer[];
}

export function CostumersTable({ data }: CostumersTableProps) {
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

  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      async handleDelete() {
        console.log("Deletado");
      },
      EditForm: <FormEditCostumer />,
    });

  const rows = data.map((item, key) => {
    const selected = selection.includes(item.id);
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
        <td>{item.companyname}</td>
        <td>{item.cnpj}</td>
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
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
