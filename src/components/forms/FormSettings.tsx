import { TextInput, Checkbox, Space, Stack } from "@mantine/core";

export default function FormSettings() {
  return (
    <Stack spacing={1} style={{ flexDirection: "column" }}>
      <TextInput
        label="Limite máximo de faturamento de MEI"
        type="number"
        required
        // {...form.getInputProps("email")}
      />
      <br />
      <Checkbox
        label={<span>Receber email de alerta de faturamento</span>}
        //   {...form.getInputProps("isStudent")}
      />
      <Space mt={7} />
      <Checkbox
        label={<span>Receber SMS de alerta de faturamento</span>}
        //   {...form.getInputProps("isStudent")}
      />
    </Stack>
  );
}
