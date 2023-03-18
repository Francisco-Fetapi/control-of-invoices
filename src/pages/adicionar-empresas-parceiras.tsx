import FormAddCostumer from "components/forms/FormAddCostumer";
import AppScheme from "layouts/AppScheme";

// TODO: paginas como esse devem estar em um escopo. inves de adicionar-empresas-parceiras -> empresas-parceiras/adicionar.

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
