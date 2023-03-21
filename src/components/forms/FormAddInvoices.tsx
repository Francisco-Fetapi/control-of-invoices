import useFormAddInvoice from "hooks/forms/invoice/useFormAddInvoice";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";
import FormInvoice from "./FormInvoice";

// TODO: Create /api/invoice/add

export default function FormAddInvoices() {
  const { form, handleSubmit, isLoading } = useFormAddInvoice();

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormInvoice form={form} handleSubmit={handleSubmit} />
    </ContainerLoadingOverlay>
  );
}
