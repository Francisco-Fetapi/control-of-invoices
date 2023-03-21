import FormExpense from "components/forms/FormExpense";
import useFormEditExpense from "hooks/forms/expense/useFormEditExpense";
import { ExpenseDoc } from "services/getExpenses";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";

interface FormEditExpenseProps {
  item: ExpenseDoc;
}

export default function FormEditExpense({ item }: FormEditExpenseProps) {
  const { form, handleSubmit, isLoading } = useFormEditExpense(item);

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormExpense form={form} handleSubmit={handleSubmit} editMode={true} />
    </ContainerLoadingOverlay>
  );
}
