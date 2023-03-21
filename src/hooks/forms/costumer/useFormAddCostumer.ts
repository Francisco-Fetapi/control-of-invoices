import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { FormCostumerFields } from "components/forms/FormCostumer";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { apiRoutes } from "lib/axios";
import { AddCostumerApiResponse } from "pages/api/costumer/add";
import { useMutation } from "react-query";

type IForm = FormForAddAndEdit<FormCostumerFields>["handleSubmit"];

export default function useFormAddCostumer() {
  const form = useForm<FormCostumerFields>({
    initialValues: {
      name: "",
      cnpj: "",
      corporationName: "",
    },
  });
  const addCostumer = useMutation((costumer: FormCostumerFields) => {
    return apiRoutes.post<AddCostumerApiResponse>("/costumer/add", {
      costumer,
    });
  });

  const isLoading = addCostumer.isLoading;

  const handleSubmit: IForm = (values, e) => {
    addCostumer.mutate(values, {
      onSuccess(res, variables, context) {
        if (res.data.created) {
          showNotification({
            title: "Empresa Adicionada",
            message: "Empresa cadastrada com sucesso.",
            color: "green",
          });
        } else {
          showNotification({
            title: "A Empresa já existe",
            message:
              "Já existe uma empresa com a mesma Razão Social. Não podem existir 2 empresas com a mesma Razão Social.",
            color: "error",
          });
        }
      },
    });
  };

  return { form, handleSubmit, isLoading };
}
