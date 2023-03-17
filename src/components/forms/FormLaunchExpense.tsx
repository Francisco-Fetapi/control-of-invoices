import {
  Textarea,
  Select,
  TextInput,
  Box,
  Checkbox,
  Space,
  Stack,
  Group,
} from "@mantine/core";
import { mockCategories } from "pages/categoria-despesas";
import { mockConstumers } from "pages/empresas-parceiras";
import { useState } from "react";

type SelectMode = "cnpj" | "name";

export default function FormLaunchExpense() {
  const [costumer, setCostumer] = useState<string | null>(null);

  return (
    <Stack spacing={10} style={{ flexDirection: "column" }}>
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
        value={costumer}
        onChange={setCostumer}
      />
      {costumer && (
        <Stack spacing={10}>
          <h3>Dados da Despesa</h3>
          <TextInput
            label="Valor da despesa"
            type="number"
            required
            value={0}
          />
          <TextInput label="Nome da Despesa" required />
          <TextInput
            // placeholder="Descreva em poucas"
            type="month"
            label="Data de competencia"
            required
          />
          <TextInput
            // placeholder="Descreva em poucas"
            type="date"
            label="Data de pagamento"
            required
          />
        </Stack>
      )}
      <br />
      <p>ID empresa selecionada: {costumer}</p>
    </Stack>
  );
}
