import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { FormExpenseFields } from "components/forms/FormExpense";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { Expense } from "entities/Expense";
import { apiRoutes } from "lib/axios";
import { AddExpenseApiResponse } from "pages/api/expense/add";
import { useMutation } from "react-query";

type IForm = FormForAddAndEdit<FormExpenseFields>["handleSubmit"];

export default function useFormAddExpense() {
  const form = useForm<FormExpenseFields>({
    initialValues: {
      accrualMonth: "",
      category: "",
      corporationName: "",
      name: "",
      payday: "",
      value: "",
    },
  });
  // TODO: validate payday and accrualMonth, one of them must be higher
  const addExpense = useMutation((expense: Expense) => {
    return apiRoutes.post<AddExpenseApiResponse>("/expense/add", {
      expense,
    });
  });
  const handleSubmit: IForm = (values) => {
    addExpense.mutate(values, {
      onSuccess(res, variables, context) {
        if (res.data.created) {
          showNotification({
            title: "Despesa lançada",
            message: "A sua despesa foi salva com sucesso.",
            color: "green",
          });
          form.reset();
        }
      },
    });
  };
  const isLoading = addExpense.isLoading;

  return { form, handleSubmit, isLoading };
}
