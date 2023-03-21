import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { FormInvoiceFields } from "components/forms/FormInvoice";
import { useMutation } from "react-query";
import { Invoice } from "entities/Invoice";
import { apiRoutes } from "lib/axios";
import { AddInvoiceApiResponse } from "pages/api/invoice/add";
import { showNotification } from "@mantine/notifications";

type IForm = FormForAddAndEdit<FormInvoiceFields>["handleSubmit"];

export default function useFormAddInvoice() {
  const form = useForm<FormInvoiceFields>({
    initialValues: {
      accrualMonth: new Date(),
      corporationName: "",
      value: "",
      description: "",
      number: 0,
      receiptDate: new Date(),
      selectBy: "name",
    },
  });
  const addInvoice = useMutation((invoice: Invoice) => {
    return apiRoutes.post<AddInvoiceApiResponse>("/invoice/add", {
      invoice,
    });
  });
  const handleSubmit: IForm = (values) => {
    addInvoice.mutate(values, {
      onSuccess(res, variables, context) {
        if (res.data.created) {
          showNotification({
            title: "Nota Fiscal lançada",
            message: "A sua Nota Fiscal foi salva com sucesso.",
            color: "green",
          });
          form.reset();
        }
      },
    });
  };
  const isLoading = addInvoice.isLoading;

  return { form, handleSubmit, isLoading };
}
