import { useForm } from "@mantine/form";
import FormCostumer, { FormCostumerFields } from "./FormCostumer";
import { FormForAddAndEdit } from "./interfaces/FormForAddAndEdit";

type IForm = FormForAddAndEdit<FormCostumerFields>["handleSubmit"];

export default function FormEditCostumer() {
  const form = useForm<FormCostumerFields>({
    initialValues: {
      name: "olamundo",
      cnpj: "cnpjqualquer",
      corporationName: "nomedaempresa",
    },
  });

  const handleSubmit: IForm = (values, e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div>
      <FormCostumer form={form} handleSubmit={handleSubmit} editMode={true} />
    </div>
  );
}
