import React from "react";
import FormCategory from "./FormCategory";
import useFormEditExpenseCategory from "hooks/forms/expense/category/useFormEditExpenseCategory";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";
import { ExpenseCategoryDoc } from "services/getExpenseCategory";

interface FormEditCategoryProps {
  item: ExpenseCategoryDoc;
}

export default function FormEditCategory({ item }: FormEditCategoryProps) {
  const { form, handleSubmit, isLoading } = useFormEditExpenseCategory(item);

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormCategory form={form} handleSubmit={handleSubmit} editMode={true} />
    </ContainerLoadingOverlay>
  );
}
