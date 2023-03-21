import useFormEditCostumer from "hooks/forms/costumer/useFormEditCostumer";
import { CostumerDoc } from "services/getCostumers";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";
import FormCostumer from "./FormCostumer";
interface FormEditCostumerProps {
  item: CostumerDoc;
}

export default function FormEditCostumer({ item }: FormEditCostumerProps) {
  const { form, handleSubmit, isLoading } = useFormEditCostumer(item);

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormCostumer form={form} handleSubmit={handleSubmit} editMode={true} />
    </ContainerLoadingOverlay>
  );
}
