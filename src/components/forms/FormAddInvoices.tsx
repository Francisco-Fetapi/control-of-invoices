import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import FormInvoice, { FormInvoiceFields } from "./FormInvoice";

type IForm = FormForAddAndEdit<FormInvoiceFields>["handleSubmit"];

// TODO: Create /api/invoice/add

export default function FormAddInvoices() {
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
