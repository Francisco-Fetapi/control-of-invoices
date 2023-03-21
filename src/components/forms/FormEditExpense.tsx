import { useForm } from "@mantine/form";
import FormExpense, { FormExpenseFields } from "components/forms/FormExpense";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";

type IForm = FormForAddAndEdit<FormExpenseFields>["handleSubmit"];

export default function FormEditExpense() {
  const form = useForm<FormExpenseFields>({
    initialValues: {
      accrualMonth: "",
      category: "", //id category
      corporationName: "", // id costumer
      name: "Nome da Despesa",
      payday: "",
      value: "1234",
    },
  });

  const handleSubmit: IForm = (values) => {
    console.log(values);
  };

  return (
    <div>
      <FormExpense form={form} handleSubmit={handleSubmit} editMode={true} />
    </div>
  );
}
