import useFormAddExpenseCategory from "hooks/forms/expense/category/useFormAddExpenseCategory";
import React from "react";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";
import FormCategory from "./FormCategory";

export default function FormAddCategory() {
  const { form, handleSubmit, isLoading } = useFormAddExpenseCategory();

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormCategory form={form} handleSubmit={handleSubmit} />
    </ContainerLoadingOverlay>
  );
}
