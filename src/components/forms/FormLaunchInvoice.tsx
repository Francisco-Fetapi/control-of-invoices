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
import { mockConstumers } from "pages/empresas-parceiras";
import { useState } from "react";

type SelectMode = "cnpj" | "name";

export default function FormLaunchInvoice() {
  const [selectMode, setSelectMode] = useState<string | null>(null);
  const [costumer, setCostumer] = useState<string | null>(null);
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Stack spacing={10} style={{ flexDirection: "column" }}>
      <Select
        label="Selecionar empresa pelo"
        placeholder="Escolha o criterio de busca"
        data={[
          { value: "name", label: "Nome" },
          { value: "cnpj", label: "CNPJ" },
        ]}
        value={selectMode}
        onChange={setSelectMode}
      />
      {/* <br /> */}
      {selectMode && (
        <Select
          label="Selecionar empresa"
          data={mockConstumers.map((costumer) => {
            return {
              value: costumer.id,
              label: costumer[selectMode as SelectMode],
            };
          })}
          searchable
          nothingFound="Empresa não encontrada."
          value={costumer}
          onChange={setCostumer}
        />
      )}
      {costumer && (
        <Stack spacing={10}>
          <h3>Dados da Nota Fiscal</h3>
          <TextInput
            label="Valor da nota fiscal"
            type="number"
            required
            value={0}
          />
          <TextInput
            label="Número da nota fiscal"
            type="number"
            required
            value={0}
          />
          <Textarea
            // placeholder="Descreva em poucas"
            label="Descrição do Serviço prestado"
            required
            minRows={4}
          />
          <TextInput
            // placeholder="Descreva em poucas"
            type="month"
            label="Mês de competencia"
            required
          />
          <TextInput
            // placeholder="Descreva em poucas"
            type="date"
            label="Data de recebimento"
            required
          />
        </Stack>
      )}
      <br />
      <p>ID empresa selecionada: {costumer}</p>
    </Stack>
  );
}
