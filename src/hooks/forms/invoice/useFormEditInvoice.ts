import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { FormInvoiceFields } from "components/forms/FormInvoice";
import { useMutation, useQueryClient } from "react-query";
import { Invoice } from "entities/Invoice";
import { apiRoutes } from "lib/axios";
import { AddInvoiceApiResponse } from "pages/api/invoice/add";
import { showNotification } from "@mantine/notifications";
import { InvoiceDoc } from "services/getInvoices";
import { EditInvoiceApiResponse } from "pages/api/invoice/update";
import { closeAllModals } from "@mantine/modals";

type IForm = FormForAddAndEdit<FormInvoiceFields>["handleSubmit"];

export default function useFormEditInvoice(item: InvoiceDoc) {
  const {
    accrualMonth,
    corporationName,
    description,
    number,
    receiptDate,
    value,
  } = item;
  const form = useForm<FormInvoiceFields>({
    initialValues: {
      accrualMonth,
      corporationName,
      value,
      description,
      number: 0,
      receiptDate,
      selectBy: "name",
    },
  });
  const updateInvoice = useMutation((invoice: Invoice) => {
    return apiRoutes.post<EditInvoiceApiResponse>("/invoice/update", {
      invoice,
    });
  });
  const queryClient = useQueryClient();
  const handleSubmit: IForm = (values) => {
    const allValues = { ...item, ...values };
    updateInvoice.mutate(allValues, {
      onSuccess(res, variables, context) {
        if (res.data.updated) {
          showNotification({
            title: "Nota Fiscal Atualizada",
            message: "A sua Nota Fiscal foi atualizada com sucesso.",
            color: "green",
          });
          form.reset();
          queryClient.refetchQueries(["invoices"]);
          closeAllModals();
        }
      },
    });
  };
  const isLoading = updateInvoice.isLoading;

  return { form, handleSubmit, isLoading };
}
