import {
  TextInput,
  Box,
  Checkbox,
  Space,
  Stack,
  Button,
  Center,
} from "@mantine/core";
import useFormSettings from "hooks/forms/useFormSettings";

export default function FormSettings() {
  const { form, saveSettings, handleSubmit } = useFormSettings();
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Stack spacing={15} style={{ flexDirection: "column" }}>
        <TextInput
          label="Limite máximo de faturamento de MEI"
          type="number"
          required
          {...form.getInputProps("limit")}
        />
        <br />
        <Box>
          <Checkbox
            label={<span>Receber email de alerta de faturamento</span>}
            {...form.getInputProps("sendEmail")}
            checked={form.values.sendEmail}
          />
          <Space mt={7} />
          <Checkbox
            label={<span>Receber SMS de alerta de faturamento</span>}
            {...form.getInputProps("sendSMS")}
            checked={form.values.sendSMS}
          />
        </Box>
        <Center mt={10}>
          <Button type="submit" loading={saveSettings.isLoading}>
            Salvar
          </Button>
        </Center>
      </Stack>
    </Box>
  );
}
