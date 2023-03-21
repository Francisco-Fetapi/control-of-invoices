import useFormAddCostumer from "hooks/forms/costumer/useFormAddCostumer";
import FormCostumer from "./FormCostumer";
import ContainerLoadingOverlay from "./ContainerLoadingOverlay";

export default function FormAddCostumer() {
  const { form, handleSubmit, isLoading } = useFormAddCostumer();

  return (
    <ContainerLoadingOverlay isLoading={isLoading}>
      <FormCostumer form={form} handleSubmit={handleSubmit} />
    </ContainerLoadingOverlay>
  );
}
