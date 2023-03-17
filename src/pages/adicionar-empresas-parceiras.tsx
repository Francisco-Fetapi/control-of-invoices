import FormCostumer from "components/forms/FormCostumer";
import AppScheme from "layouts/AppScheme";

// TODO: paginas como esse devem estar em um escopo. inves de adicionar-empresas-parceiras -> empresas-parceiras/adicionar.

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Empresas Parceiras</h2>

        <FormCostumer />
      </AppScheme>
    </div>
  );
}
