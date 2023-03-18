import React from "react";
import FormCategory, { FormCategoryFields } from "./FormCategory";
import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";
import { mockCategories } from "pages/categoria-despesas";

type IForm = FormForAddAndEdit<FormCategoryFields>["handleSubmit"];

export default function FormEditCategory() {
  const mock = mockCategories[0];
  const form = useForm<FormCategoryFields>({
    initialValues: {
      name: mock.name,
      description: mock.description,
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormCategory form={form} handleSubmit={handleSubmit} editMode={true} />
    </div>
  );
}
