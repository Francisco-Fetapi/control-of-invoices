import { useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { Costumer } from "./empresas-parceiras";
import { IconTrash, IconPencil, IconInfoCircle } from "@tabler/icons";

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

  function openModalDelete() {}
  function openModalMoreDetails() {}
  function openEditForm() {}

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
          <MenuRow
            handleDelete={openModalDelete}
            handleDetails={openModalMoreDetails}
            handleEdit={openEditForm}
          >
            <ActionIcon>
              <h4>. . .</h4>
            </ActionIcon>
          </MenuRow>
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

interface MenuRowProps {
  children: React.ReactNode;
  handleDelete: () => void;
  handleDetails: () => void;
  handleEdit: () => void;
}

function MenuRow({
  children,
  handleDelete,
  handleDetails,
  handleEdit,
}: MenuRowProps) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Gerais</Menu.Label>
        <Menu.Item onClick={handleDetails} icon={<IconInfoCircle size={14} />}>
          Detalhes
        </Menu.Item>
        <Menu.Item onClick={handleEdit} icon={<IconPencil size={14} />}>
          Editar
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          onClick={handleDelete}
          color="red"
          icon={<IconTrash size={14} />}
        >
          Apagar
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
