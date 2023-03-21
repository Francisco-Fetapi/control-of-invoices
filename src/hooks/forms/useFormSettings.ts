import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { Settings } from "entities/Settings";
import useAuth from "hooks/useAuth";
import { apiRoutes } from "lib/axios";
import { UpdateSettingsApiResponse } from "pages/api/users/update/settings";
import { useMutation, useQueryClient } from "react-query";

interface FormSettingFields extends Settings {}

export default function useFormSettings() {
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
        queryClient.refetchQueries(["user"]);
      },
    });
  }

  return { user, form, saveSettings, handleSubmit };
}
