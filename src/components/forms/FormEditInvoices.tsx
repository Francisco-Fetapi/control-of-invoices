import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import useFormEditInvoice from "hooks/forms/invoice/useFormEditInvoice";
import { InvoiceDoc } from "services/getInvoices";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";
import FormInvoice, { FormInvoiceFields } from "./FormInvoice";

interface FormEditInvoiceProps {
  item: InvoiceDoc;
}

export default function FormEditInvoices({ item }: FormEditInvoiceProps) {
  const { form, handleSubmit, isLoading } = useFormEditInvoice(item);

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormInvoice form={form} handleSubmit={handleSubmit} editMode={true} />
    </ContainerLoadingOverlay>
  );
}
