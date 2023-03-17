import { TextInput, Textarea, Stack } from "@mantine/core";
import { Button, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export default function FormCategory() {
  return (
    <Stack spacing={15} style={{ flexDirection: "column" }}>
      <TextInput label="Nome" required />
      <Textarea
        // placeholder="Descreva em poucas"
        label="Descrição"
        required
        minRows={4}
      />

      <Center mt={30}>
        <Button leftIcon={<IconPlus size="1rem" />}>Adicionar</Button>
      </Center>
    </Stack>
  );
}
