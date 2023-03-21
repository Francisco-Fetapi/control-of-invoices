import FormAddCostumer from "components/forms/FormAddCostumer";
import AppScheme from "layouts/AppScheme";

// TODO: add a button to see items in all pages to add. like on table.

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
