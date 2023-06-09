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
import useTableActions from "hooks/useTableActions";
import FormEditInvoices from "components/forms/FormEditInvoices";
import getWordsLength from "helpers/getWordsLength";
import { Invoice } from "entities/Invoice";
import useHistoryItems from "hooks/useHistoryItems";
import useSelection from "hooks/useSelection";
import useDeleteHandle from "hooks/useDeleteHandle";
import { InvoiceDoc } from "services/getInvoices";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export function InvoicesTable() {
  const { classes, cx } = useStyles();

  const { invoicesIsLoading, invoices } = useHistoryItems();
  const {
    allItemsIsSelected,
    someItemsIsSelected,
    idSelecteds,
    toggleAll,
    toggleRow,
  } = useSelection({ items: invoices });
  const rows = invoices?.map((item, key) => {
    return (
      <TableRow
        selection={idSelecteds}
        item={item}
        key={item.id}
        toggleRow={toggleRow}
      />
    );
  });

  if (invoicesIsLoading) {
    return (
      <Text mt={10} align="center">
        Carregando...
      </Text>
    );
  }

  if (!invoices?.length) {
    return (
      <Text mt={10} align="center">
        Nenhuma Nota Fiscal encontrada.
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
  item: InvoiceDoc;
  selection: string[];
  toggleRow: (id: string) => void;
}

// TODO: refactor Move all TableRow for its correspondent table folder.
function TableRow({ item, selection, toggleRow }: TableRowProps) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);
  const detailsLabel = "Descrição";
  const wordsLength = getWordsLength(item.description);
  const { deleteDocuments, isLoading } = useDeleteHandle({
    documents: selection.map((item) => ({ id: item })),
    queryToRefetch: "invoices",
    url: "/invoice/delete",
  });
  const { openEditForm, openModalDelete, openModalMoreDetails } =
    useTableActions({
      handleDelete() {
        deleteDocuments(item);
      },
      EditForm: <FormEditInvoices item={item} />,
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
      <td>{item.corporationName}</td>
      <td>{item.value}</td>
      <td>{item.number}</td>
      <td>{getShortText(item.description, 3)}</td>
      <td>{item.accrualMonth}</td>
      <td>{item.receiptDate}</td>
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
