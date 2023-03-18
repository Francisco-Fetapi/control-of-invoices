import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { mockConstumers } from "pages/empresas-parceiras";
import FormInvoice, { FormInvoiceFields } from "./FormInvoice";

type IForm = FormForAddAndEdit<FormInvoiceFields>["handleSubmit"];

export default function FormEditInvoices() {
  const mockCostumer = mockConstumers[0];

  const form = useForm<FormInvoiceFields>({
    initialValues: {
      accrualMonth: new Date(),
      corporationName: mockCostumer.id, //id costumer
      value: "123",
      description: "uma simples descrico",
      number: 120,
      receiptDate: new Date(),
      selectBy: "cnpj",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormInvoice form={form} handleSubmit={handleSubmit} editMode={true} />
    </div>
  );
}
