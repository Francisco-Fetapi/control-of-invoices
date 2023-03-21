import {
  TextInput,
  Box,
  Checkbox,
  Space,
  Stack,
  Button,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { UserDocument } from "context/UserProvider";
import { Settings } from "entities/Settings";
import useAuth from "hooks/useAuth";
import { apiRoutes } from "lib/axios";
import { UpdateSettingsApiResponse } from "pages/api/users/update/settings";
import { useMutation, useQueryClient } from "react-query";

interface FormSettingFields extends Settings {}

export default function FormSettings() {
  const { user } = useAuth();
  const settings = user?.settings;
  const form = useForm<FormSettingFields>({
    initialValues: {
      limit: settings?.limit || 0,
      sendEmail: settings?.sendEmail || false,
      sendSMS: settings?.sendSMS || false,
    },
  });
  const saveSettings = useMutation((settings: Settings) => {
    return apiRoutes.post<UpdateSettingsApiResponse>("/users/update/settings", {
      settings,
    });
  });
  const queryClient = useQueryClient();
  function handleSubmit(values: Settings) {
    saveSettings.mutate(form.values, {
      onSuccess() {
        showNotification({
          title: "Configurações salvas",
          message: "As suas configurações foram salvas com sucesso.",
          color: "green",
        });
        queryClient.setQueryData<UserDocument | undefined>("user", (prev) => {
          if (prev) {
            return {
              ...prev,
              settings: values,
            };
          }
        });
      },
    });
  }
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
          />
          <Space mt={7} />
          <Checkbox
            label={<span>Receber SMS de alerta de faturamento</span>}
            {...form.getInputProps("sendSMS")}
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
