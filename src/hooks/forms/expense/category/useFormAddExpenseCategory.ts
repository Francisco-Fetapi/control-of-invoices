import { FormCategoryFields } from "components/forms/FormCategory";
import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { useMutation } from "react-query";
import { ExpenseCategory } from "entities/ExpenseCategory";
import { apiRoutes } from "lib/axios";
import { AddExpenseCategoryApiResponse } from "pages/api/expense/category/add";
import { showNotification } from "@mantine/notifications";

type IForm = FormForAddAndEdit<FormCategoryFields>["handleSubmit"];

export default function useFormAddExpenseCategory() {
  const form = useForm<FormCategoryFields>({
    initialValues: {
      name: "",
      description: "",
    },
  });
  const addExpenseCategory = useMutation((expenseCategory: ExpenseCategory) => {
    return apiRoutes.post<AddExpenseCategoryApiResponse>(
      "/expense/category/add",
      {
        expenseCategory,
      }
    );
  });
  const handleSubmit: IForm = (values) => {
    addExpenseCategory.mutate(values, {
      onSuccess(res, variables, context) {
        if (res.data.created) {
          showNotification({
            title: "Categoria Adicionada",
            message: "A categoria foi adicionada com sucesso.",
            color: "green",
          });
          form.reset();
        } else {
          showNotification({
            title: "Categoria já existe.",
            message: "A categoria que está tentando cadastrar já existe.",
            color: "error",
          });
        }
      },
    });
  };

  const isLoading = addExpenseCategory.isLoading;

  return { form, handleSubmit, isLoading };
}
