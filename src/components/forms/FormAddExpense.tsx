import FormExpense from "components/forms/FormExpense";
import useFormAddExpense from "hooks/forms/expense/useFormAddExpense";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";

// TODO: Create /api/expense/add

export default function FormAddExpense() {
  const { form, handleSubmit, isLoading } = useFormAddExpense();

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormExpense form={form} handleSubmit={handleSubmit} />
    </ContainerLoadingOverlay>
  );
}
