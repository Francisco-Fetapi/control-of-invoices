import { FormCategoryFields } from "components/forms/FormCategory";
import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { useMutation, useQueryClient } from "react-query";
import { ExpenseCategory } from "entities/ExpenseCategory";
import { apiRoutes } from "lib/axios";
import { showNotification } from "@mantine/notifications";
import { ExpenseCategoryDoc } from "services/getExpenseCategory";
import { EditExpenseCategoryApiResponse } from "pages/api/expense/category/update";
import { closeAllModals } from "@mantine/modals";

type IForm = FormForAddAndEdit<FormCategoryFields>["handleSubmit"];

export default function useFormEditExpenseCategory(item: ExpenseCategoryDoc) {
  const form = useForm<FormCategoryFields>({
    initialValues: {
      name: item.name,
      description: item.description,
    },
  });
  const queryClient = useQueryClient();
  const updateExpenseCategory = useMutation(
    (expenseCategory: ExpenseCategory) => {
      return apiRoutes.post<EditExpenseCategoryApiResponse>(
        "/expense/category/update",
        {
          expenseCategory,
        }
      );
    }
  );
  const handleSubmit: IForm = (values) => {
    const moreValues = { ...item, ...values };
    updateExpenseCategory.mutate(moreValues, {
      onSuccess(res, variables, context) {
        console.log(res.data.updated);
        if (res.data.updated) {
          showNotification({
            title: "Categoria Atualizada",
            message: "A categoria foi atualizada com sucesso.",
            color: "green",
          });
          form.reset();
          queryClient.refetchQueries(["expense-categories"]);
          closeAllModals();
        }
      },
    });
  };

  const isLoading = updateExpenseCategory.isLoading;

  return { form, handleSubmit, isLoading };
}
