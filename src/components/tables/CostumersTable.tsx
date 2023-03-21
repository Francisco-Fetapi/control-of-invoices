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
import FormEditCostumer from "components/forms/FormEditCostumer";
import { useQuery } from "react-query";
import { apiRoutes } from "lib/axios";
import { GetCostumersApiResponse } from "pages/api/costumer";
import useSelection from "hooks/useSelection";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export function CostumersTable() {
  const { classes, cx } = useStyles();
  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      async handleDelete() {
        console.log("Deletado");
      },
      EditForm: <FormEditCostumer />,
    });

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
    const selected = idSelecteds.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={idSelecteds.includes(item.id)}
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
