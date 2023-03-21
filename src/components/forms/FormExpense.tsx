import { Select, TextInput, Box, Stack, Center, Text } from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";

import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";
import { Expense } from "entities/Expense";
import { useQuery } from "react-query";
import { GetExpenseCategoryApiResponse } from "pages/api/expense/category";
import { apiRoutes } from "lib/axios";
import { GetCostumersApiResponse } from "pages/api/costumer";

export interface FormExpenseFields extends Expense {}

export default function FormExpense({
  form,
  handleSubmit,
  editMode,
}: FormForAddAndEdit<FormExpenseFields>) {
  const { corporationName } = form.values;
  const expenseCategories = useQuery("expense-categories", () => {
    return apiRoutes.get<GetExpenseCategoryApiResponse>("/expense/category");
  });
  const costumers = useQuery("costumers", () => {
    return apiRoutes.get<GetCostumersApiResponse>("/costumer");
  });

  const listCostumers = costumers.data?.data.costumers;
  const listExpenseCategories = expenseCategories.data?.data.expenseCategorys;

  const isLoading = expenseCategories.isLoading || costumers.isLoading;
  if (isLoading) {
    return (
      <Text align="center">
        Carregando...
        <br /> <i>Lista de Categorias</i> e <i>Lista de Empresas Parceiras</i>
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
          label="Selecionar categoria"
          data={listExpenseCategories?.map((category) => {
            return {
              value: category.name,
              label: category.name,
            };
          })}
          searchable
          nothingFound="Categoria não encontrada."
          {...form.getInputProps("category")}
        />

        {/* <br /> */}
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
        {corporationName && (
          <Stack spacing={10}>
            <h3>Dados da Despesa</h3>
            <TextInput
              label="Valor da despesa"
              type="number"
              required
              value={0}
              {...form.getInputProps("value")}
            />
            <TextInput
              label="Nome da Despesa"
              required
              {...form.getInputProps("name")}
            />
            <TextInput
              // placeholder="Descreva em poucas"
              type="month"
              label="Data de competencia"
              required
              {...form.getInputProps("accrualMonth")}
            />
            <TextInput
              // placeholder="Descreva em poucas"
              type="date"
              label="Data de pagamento"
              required
              {...form.getInputProps("payday")}
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
