import React from "react";
import FormCategory, { FormCategoryFields } from "./FormCategory";
import { useForm } from "@mantine/form";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

type IForm = FormForAddAndEdit<FormCategoryFields>["handleSubmit"];

// TODO: Create /api/category/add

export default function FormAddCategory() {
  const form = useForm<FormCategoryFields>({
    initialValues: {
      name: "",
      description: "",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormCategory form={form} handleSubmit={handleSubmit} />
    </div>
  );
}
