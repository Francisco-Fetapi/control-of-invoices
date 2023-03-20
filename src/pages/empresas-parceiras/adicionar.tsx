import FormAddCostumer from "components/forms/FormAddCostumer";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Empresas Parceiras</h2>

        <FormAddCostumer />
      </AppScheme>
    </div>
  );
}
