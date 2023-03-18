import { Textarea, Select, Center, TextInput, Box, Stack } from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";
import { Invoice } from "components/tables/InvoicesTable";
import { mockConstumers } from "pages/empresas-parceiras";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

type SelectMode = "cnpj" | "name";

export interface FormInvoiceFields extends Omit<Invoice, "id"> {
  selectBy: SelectMode;
}

export default function FormInvoice({
  form,
  handleSubmit,
  editMode,
}: FormForAddAndEdit<FormInvoiceFields>) {
  const { corporationName, selectBy } = form.values;

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Stack spacing={15} style={{ flexDirection: "column" }}>
        <Select
          label="Selecionar empresa pelo"
          placeholder="Escolha o criterio de busca"
          data={[
            { value: "name", label: "Nome" },
            { value: "cnpj", label: "CNPJ" },
          ]}
          {...form.getInputProps("selectBy")}
        />
        {/* <br /> */}
        {selectBy && (
          <Select
            label="Selecionar empresa"
            data={mockConstumers.map((costumer) => {
              return {
                value: costumer.id,
                label: costumer[selectBy as SelectMode],
              };
            })}
            searchable
            nothingFound="Empresa não encontrada."
            {...form.getInputProps("corporationName")}
          />
        )}
        {corporationName && (
          <Stack spacing={10}>
            <h3>Dados da Nota Fiscal</h3>
            <TextInput
              label="Valor da nota fiscal"
              type="number"
              required
              {...form.getInputProps("value")}
            />
            <TextInput
              label="Número da nota fiscal"
              type="number"
              required
              {...form.getInputProps("number")}
            />
            <Textarea
              // placeholder="Descreva em poucas"
              label="Descrição do Serviço prestado"
              required
              minRows={4}
              {...form.getInputProps("description")}
            />
            <TextInput
              // placeholder="Descreva em poucas"
              type="month"
              label="Mês de competencia"
              required
              {...form.getInputProps("accrualMonth")}
            />
            <TextInput
              // placeholder="Descreva em poucas"
              type="date"
              label="Data de recebimento"
              required
              {...form.getInputProps("receiptDate")}
            />
          </Stack>
        )}
        <br />
        <Center mt={30}>
          <FormAddAndEditButton editMode={editMode} />
        </Center>
        <p>ID empresa selecionada: {corporationName}</p>
      </Stack>
    </Box>
  );
}
