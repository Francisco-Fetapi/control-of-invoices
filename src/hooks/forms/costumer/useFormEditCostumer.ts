import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { FormCostumerFields } from "components/forms/FormCostumer";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { apiRoutes } from "lib/axios";
import { EditCostumerApiResponse } from "pages/api/costumer/update";
import { useMutation, useQueryClient } from "react-query";
import { CostumerDoc } from "services/getCostumers";

type IForm = FormForAddAndEdit<FormCostumerFields>["handleSubmit"];

export default function useFormEditCostumer(item: CostumerDoc) {
  const { cnpj, corporationName, name } = item;
  const form = useForm<FormCostumerFields>({
    initialValues: {
      name,
      cnpj,
      corporationName,
    },
  });
  const updateCostumer = useMutation((costumer: FormCostumerFields) => {
    return apiRoutes.post<EditCostumerApiResponse>("/costumer/update", {
      costumer,
    });
  });

  const isLoading = updateCostumer.isLoading;
  const queryClient = useQueryClient();

  const handleSubmit: IForm = (values, e) => {
    const allValues = { ...item, ...values };
    updateCostumer.mutate(allValues, {
      onSuccess(res, variables, context) {
        if (res.data.updated) {
          showNotification({
            title: "Empresa Atualizada",
            message: "Empresa atualizada com sucesso.",
            color: "green",
          });
          form.reset();
          closeAllModals();
          queryClient.refetchQueries(["costumers"]);
        }
      },
    });
  };

  return { form, handleSubmit, isLoading };
}
