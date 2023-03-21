import { useForm } from "@mantine/form";
import FormCostumer, { FormCostumerFields } from "./FormCostumer";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

type IForm = FormForAddAndEdit<FormCostumerFields>["handleSubmit"];

// TODO: Create /api/costumer/add

export default function FormAddCostumer() {
  const form = useForm<FormCostumerFields>({
    initialValues: {
      name: "",
      cnpj: "",
      corporationName: "",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormCostumer form={form} handleSubmit={handleSubmit} />
    </div>
  );
}
