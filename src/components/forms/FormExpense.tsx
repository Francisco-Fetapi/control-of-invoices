import { Select, TextInput, Box, Stack, Center } from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";
import { mockCategories } from "pages/despesas/categorias";
import { mockConstumers } from "pages/empresas-parceiras";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";
import { Expense } from "entities/Expense";

export interface FormExpenseFields extends Expense {}

export default function FormExpense({
  form,
  handleSubmit,
  editMode,
}: FormForAddAndEdit<FormExpenseFields>) {
  const { corporationName: costumer } = form.values;

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Stack spacing={15} style={{ flexDirection: "column" }}>
        <Select
          label="Selecionar categoria"
          data={mockCategories.map((category) => {
            return {
              value: category.id,
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
          data={mockConstumers.map((costumer) => {
            return {
              value: costumer.id,
              label: costumer.name,
            };
          })}
          searchable
          nothingFound="Empresa não encontrada."
          {...form.getInputProps("corporationName")}
        />
        {costumer && (
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
        <p>ID empresa selecionada: {costumer}</p>
      </Stack>
    </Box>
  );
}
