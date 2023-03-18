import { TextInput, Box, Textarea, Stack } from "@mantine/core";
import { Button, Center } from "@mantine/core";
import FormAddAndEditButton from "components/FormAddAndEditButton";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

export interface FormCategoryFields {
  name: string;
  description: string;
}

export default function FormCategory({
  form,
  handleSubmit,
  editMode,
}: FormForAddAndEdit<FormCategoryFields>) {
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Stack spacing={15} style={{ flexDirection: "column" }}>
        <TextInput label="Nome" required {...form.getInputProps("name")} />
        <Textarea
          // placeholder="Descreva em poucas"
          label="Descrição"
          required
          minRows={4}
          {...form.getInputProps("description")}
        />

        <Center mt={30}>
          <FormAddAndEditButton editMode={editMode} />
        </Center>
      </Stack>
    </Box>
  );
}
