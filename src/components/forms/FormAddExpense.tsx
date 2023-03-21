import { useForm } from "@mantine/form";
import FormExpense, { FormExpenseFields } from "components/forms/FormExpense";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";

type IForm = FormForAddAndEdit<FormExpenseFields>["handleSubmit"];

// TODO: Create /api/expense/add

export default function FormAddExpense() {
  const form = useForm<FormExpenseFields>({
    initialValues: {
      accrualMonth: new Date(),
      category: "",
      corporationName: "",
      name: "",
      payday: new Date(),
      value: "",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormExpense form={form} handleSubmit={handleSubmit} />
    </div>
  );
}
