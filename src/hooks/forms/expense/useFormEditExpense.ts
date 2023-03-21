import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { FormExpenseFields } from "components/forms/FormExpense";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { Expense } from "entities/Expense";
import { apiRoutes } from "lib/axios";
import { EditExpenseApiResponse } from "pages/api/expense/update";
import { useMutation, useQueryClient } from "react-query";
import { ExpenseDoc } from "services/getExpenses";

type IForm = FormForAddAndEdit<FormExpenseFields>["handleSubmit"];

export default function useFormEditExpense(item: ExpenseDoc) {
  const { accrualMonth, category, corporationName, name, payday, value } = item;
  const form = useForm<FormExpenseFields>({
    initialValues: {
      accrualMonth,
      category,
      corporationName,
      name,
      payday,
      value,
    },
  });
  // TODO: validate payday and accrualMonth, one of them must be higher
  const updateExpense = useMutation((expense: Expense) => {
    return apiRoutes.post<EditExpenseApiResponse>("/expense/update", {
      expense,
    });
  });
  const queryClient = useQueryClient();
  const handleSubmit: IForm = (values) => {
    const allValues = { ...item, ...values };
    updateExpense.mutate(allValues, {
      onSuccess(res, variables, context) {
        if (res.data.updated) {
          showNotification({
            title: "Despesa atualizada",
            message: "A sua despesa foi atualizada com sucesso.",
            color: "green",
          });
          form.reset();
          queryClient.refetchQueries(["expenses"]);
          closeAllModals();
        }
      },
    });
  };
  const isLoading = updateExpense.isLoading;

  return { form, handleSubmit, isLoading };
}
