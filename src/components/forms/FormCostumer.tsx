import { TextInput, Box, Stack } from "@mantine/core";
import { Center } from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";
import { Costumer } from "entities/Costumer";
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

        <TextInput label="CNPJ" required {...form.getInputProps("cnpj")} />

        <Center mt={30}>
          <FormAddAndEditButton editMode={editMode} />
        </Center>
      </Stack>
    </Box>
  );
}
