import { TextInput, Textarea, Stack } from "@mantine/core";
import { Button, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export default function FormCostumer() {
  return (
    <Stack spacing={15} style={{ flexDirection: "column" }}>
      <TextInput label="Nome" required />
      <TextInput label="Razão Social" required />
      {/* TODO: validar o CNPJ */}
      <TextInput label="CNPJ" required />

      <Center mt={30}>
        <Button leftIcon={<IconPlus size="1rem" />}>Adicionar</Button>
      </Center>
    </Stack>
  );
}
