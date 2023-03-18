import { useForm } from "@mantine/form";
import FormExpense, { FormExpenseFields } from "components/forms/FormExpense";
import { FormForAddAndEdit } from "components/forms/interfaces/FormForAddAndEdit";
import { mockCategories } from "pages/categoria-despesas";
import { mockConstumers } from "pages/empresas-parceiras";

type IForm = FormForAddAndEdit<FormExpenseFields>["handleSubmit"];

export default function FormEditExpense() {
  const mockCostumer = mockConstumers[0];
  const mockCategory = mockCategories[0];

  const form = useForm<FormExpenseFields>({
    initialValues: {
      accrualMonth: new Date(),
      category: mockCategory.id, //id category
      corporationName: mockCostumer.id, // id costumer
      name: "Nome da Despesa",
      payday: new Date(),
      value: "1234",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormExpense form={form} handleSubmit={handleSubmit} editMode={true} />
    </div>
  );
}
