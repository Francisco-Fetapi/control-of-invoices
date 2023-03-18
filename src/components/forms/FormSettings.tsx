import { TextInput, Box, Checkbox, Space, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

// TODO format input number.

interface FormSettingFields {
  limit: number;
  sendEmail: boolean;
  sendSMS: boolean;
}

export default function FormSettings() {
  const form = useForm<FormSettingFields>({
    initialValues: {
      limit: 81000,
      sendEmail: true,
      sendSMS: false,
    },
  });
  return (
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
        />
        <Space mt={7} />
        <Checkbox
          label={<span>Receber SMS de alerta de faturamento</span>}
          {...form.getInputProps("sendSMS")}
        />
      </Box>
    </Stack>
  );
}
