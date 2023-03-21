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
import FormEditCostumer from "components/forms/FormEditCostumer";
import { useQuery } from "react-query";
import { apiRoutes } from "lib/axios";
import { GetCostumersApiResponse } from "pages/api/costumer";
import useSelection from "hooks/useSelection";
import { CostumerDoc } from "services/getCostumers";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export function CostumersTable() {
  const costumers = useQuery("costumers", () => {
    return apiRoutes.get<GetCostumersApiResponse>("/costumer");
  });

  const listCostumers = costumers.data?.data.costumers;

  const {
    allItemsIsSelected,
    someItemsIsSelected,
    idSelecteds,
    toggleAll,
    toggleRow,
  } = useSelection({ items: listCostumers });

  const rows = listCostumers?.map((item, key) => {
    return (
      <TableRow
        selection={idSelecteds}
        item={item}
        key={item.id}
        toggleRow={toggleRow}
      />
    );
  });

  if (costumers.isLoading) {
    return (
      <Text mt={10} align="center">
        Carregando...
      </Text>
    );
  }

  if (!listCostumers?.length) {
    return (
      <Text mt={10} align="center">
        Nenhuma Empresa encontrada.
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
          <th>Razão Social</th>
          <th>CNPJ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
interface TableRowProps {
  item: CostumerDoc;
  selection: string[];
  toggleRow: (id: string) => void;
}

// TODO: move all TableRow for its corresponding table folder
function TableRow({ item, selection, toggleRow }: TableRowProps) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);
  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      async handleDelete() {
        console.log("Deletado");
      },
      EditForm: <FormEditCostumer item={item} />,
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
      <td>{item.corporationName}</td>
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
}
