import { TextInput, Box, Checkbox, Space, Stack } from "@mantine/core";

// TODO: formatar input numeros.

export default function FormSettings() {
  return (
    <Stack spacing={15} style={{ flexDirection: "column" }}>
      <TextInput
        label="Limite máximo de faturamento de MEI"
        type="number"
        required
        value={81000}

        // {...form.getInputProps("email")}
      />
      <br />
      <Box>
        <Checkbox
          label={<span>Receber email de alerta de faturamento</span>}
          //   {...form.getInputProps("isStudent")}
        />
        <Space mt={7} />
        <Checkbox
          label={<span>Receber SMS de alerta de faturamento</span>}
          //   {...form.getInputProps("isStudent")}
        />
      </Box>
    </Stack>
  );
}
