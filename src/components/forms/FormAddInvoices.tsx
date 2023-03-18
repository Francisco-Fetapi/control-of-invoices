import { useForm } from "@mantine/form";
import FormExpense, { FormExpenseFields } from "components/forms/FormExpense";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import FormInvoice, { FormInvoiceFields } from "./FormInvoice";

type IForm = FormForAddAndEdit<FormInvoiceFields>["handleSubmit"];

export default function FormAddInvoices() {
  const form = useForm<FormInvoiceFields>({
    initialValues: {
      accrualMonth: new Date(),
      corporationName: "",
      value: "",
      description: "",
      number: 0,
      receiptDate: new Date(),
      selectBy: "",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormInvoice form={form} handleSubmit={handleSubmit} />
    </div>
  );
}
