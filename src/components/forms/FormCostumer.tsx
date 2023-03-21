import { TextInput, Box, Stack, Select } from "@mantine/core";
import { Center } from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";
import { Costumer } from "entities/Costumer";
import { validCNPJ } from "hooks/forms/useFormSignUp";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

export interface FormCostumerFields extends Costumer {}

export default function FormCostumer({
  form,
  handleSubmit,
  editMode,
}: FormForAddAndEdit<FormCostumerFields>) {
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Stack spacing={15} style={{ flexDirection: "column" }}>
        <TextInput label="Nome" required {...form.getInputProps("name")} />
        <TextInput
          label="Razão Social"
          required
          {...form.getInputProps("corporationName")}
        />

        <Select
          style={{ zIndex: 2 }}
          data={validCNPJ}
          {...form.getInputProps("cnpj")}
          // placeholder=""
          label="CNPJ"
          required
        />

        <Center mt={30}>
          <FormAddAndEditButton editMode={editMode} />
        </Center>
      </Stack>
    </Box>
  );
}
