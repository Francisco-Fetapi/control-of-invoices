import {
  Textarea,
  Select,
  Center,
  TextInput,
  Box,
  Stack,
  Text,
} from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";
import { Invoice } from "entities/Invoice";
import { apiRoutes } from "lib/axios";
import { GetCostumersApiResponse } from "pages/api/costumer";
import { useQuery } from "react-query";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

type SelectMode = "cnpj" | "name";

export interface FormInvoiceFields extends Invoice {
  selectBy: SelectMode;
}

export default function FormInvoice({
  form,
  handleSubmit,
  editMode,
}: FormForAddAndEdit<FormInvoiceFields>) {
  const { corporationName, selectBy } = form.values;
  const costumers = useQuery("costumers", () => {
    return apiRoutes.get<GetCostumersApiResponse>("/costumer");
  });

  const listCostumers = costumers.data?.data.costumers;

  if (costumers.isLoading) {
    return (
      <Text align="center">
        Carregando...
        <br />
        <i>Lista de Empresas Parceiras</i>
      </Text>
    );
  }

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
            data={listCostumers?.map((costumer) => {
              return {
                value: costumer.corporationName,
                label: costumer.corporationName,
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
      </Stack>
    </Box>
  );
}
